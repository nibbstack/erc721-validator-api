import { Application } from 'express';
import { IRequest, IResponse, INextFunction } from '../http';

/**
 * Installs new route on the provided application.
 * @param app ExpressJS application.
 */
export function inject(app: Application) {
  app.get('/', (req: IRequest, res: IResponse, next: INextFunction) => {
    resolve(req, res).catch(next);
  });
}

/**
 * A middleware that responds with server information.
 * @param req ExpressJS request object.
 * @param res ExpressJS response object.
 */
export async function resolve(req: IRequest, res: IResponse): Promise<void> {
  return res.respond(200, {
    'name': '0xcert API',
    'description': 'Open protocol for certified non-fungible tokens.',
    'uptime': process.uptime(),
    'version': process.env.npm_package_version,
  });
}
