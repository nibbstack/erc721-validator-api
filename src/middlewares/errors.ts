import { Application } from 'express';
import { IRequest, IResponse, INextFunction } from '../http';
import { ResourceError, UnauthenticatedError, UnauthorizedError, ValidationError } from '../lib/errors';
import messages from '../config/messages';

/**
 * Applies error-related routes to application.
 * @param app ExpressJS application.
 */
export function inject(app: Application) {
  app.use(handleNotFound);
  app.use(handleError);
}

/**
 * A middleware which handles 404.
 * @param req ExpressJS request object.
 * @param res ExpressJS response object.
 */
export function handleNotFound(req: IRequest, res: IResponse): void {
  res.throw(404, {
    code: 50033,
    message: messages[50033],
  });
}

/**
 * A middleware which handles system errors.
 * @param error Error object.
 * @param req ExpressJS request object.
 * @param res ExpressJS response object.
 * @param next ExpressJS next function.
 */
export function handleError(error: any, req: IRequest, res: IResponse, next: INextFunction): void {
  if (
    error instanceof UnauthenticatedError
    || error instanceof UnauthorizedError
    || error instanceof ResourceError
  ) {
    res.throw(error.status, {
      code: error.code,
      message: error.message,
    });
  } else if (
    error instanceof ValidationError
  ) {
    res.throw(error.status, error.model.collectErrors()
      .map((e) => e.errors)
      .reduce((a, b) => a.concat(b), [])
      .map((e) => ({
        code: e.code,
        message: messages[e.code],
      }))
    );
  } else {
    res.throw(500, {
      code: error.code || 50034, // expose only error code
      message: messages[50034], // don't expose message to users
    });
    console.error('Error:', error);
  }

  next();
}
