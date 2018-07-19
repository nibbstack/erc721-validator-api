import { Application, RequestHandler } from 'express';
import { Stage } from '../stage';
import { Context } from '../context';
import { IRequest, IResponse, INextFunction } from '../http';

/**
 * Applies context middleware to application.
 * @param app ExpressJS application.
 * @param stage Stage instance.
 */
export function inject(app: Application, stage: Stage): void {
  app.use(createContext(stage));
}

/**
 * Returns a middleware which creates a new context object for each request and
 * saves it to the request object.
 * @param stage Stage instance.
 */
export function createContext(stage: Stage): RequestHandler {
  return async (req: IRequest, res: IResponse, next: INextFunction) => {
    req.ctx = await new Context(stage);
    next();
  };
}
