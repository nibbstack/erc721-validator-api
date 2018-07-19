import * as bodyParser from 'body-parser';
import { Application, RequestHandler } from 'express';
import { Stage } from '../stage';

/**
 * Applies data parser middlewares to application.
 * @param app ExpressJS application.
 * @param stage Stage instance.
 */
export function inject(app: Application, stage: Stage): void {
  app.use(createJsonParser(stage));
}

/**
 * Returns JSON body parser middleware.
 * @param stage Stage instance.
 */
export function createJsonParser(stage: Stage): RequestHandler {
  return bodyParser.json();
}
