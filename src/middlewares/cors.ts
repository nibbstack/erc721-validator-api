import { Application, RequestHandler } from 'express';
import * as cors from 'cors';

/**
 * Applies CORS middleware to application.
 * @param app ExpressJS application.
 */
export function inject(app: Application): void {
  app.use(createAllowAll());
}

/**
 * Returns a middleware for handling cross-origin resource sharing permissions.
 */
export function createAllowAll(): RequestHandler {
  return cors();
}
