import { Server } from 'http';
import * as express from 'express';
import { Context } from './context';
import { Stage } from './stage';
import { inject as injectCors } from './middlewares/cors';
import { inject as injectDataParser } from './middlewares/data-parser';
import { inject as injectContext } from './middlewares/context';
import { inject as injectRenders } from './middlewares/renders';
import { inject as injectErrors } from './middlewares/errors';
import { inject as injectBasicValidation } from './routes/get-basic-validation';
import { inject as injectTokenValidation } from './routes/get-token-validation';
import { inject as injectTransferValidation } from './routes/get-transfer-validation';
import { inject as injectApplicantDataTokens } from './routes/get-basic-validation';
import { inject as injectApplicantWhitelistTokens } from './routes/get-transfer-validation';
import { inject as injectBalance } from './routes/get-token-validation';
import { inject as injectGetRoot } from './routes/get-root';

/**
 * ExpressJS request object interface which includes middlewares features.
 */
export interface IRequest extends express.Request {
  ctx: Context;
  body: { [key: string]: any };
}

/**
 * ExpressJS response object interface which includes middlewares features.
 */
export interface IResponse extends express.Response {
  respond: (status: number, data: Object, meta?: Object) => void;
  throw: (status: number, errors: any) => void;
}

/**
 * ExpressJS next function interface.
 */
export interface INextFunction extends express.NextFunction {}

/**
 * HTTP server exposes REST API.
 */
export class ApiHttp {
  public stage: Stage;
  public app: express.Application;
  public server: Server;

  /**
   * Class constructor.
   * @param stage Already connected stage instance.
   */
  public constructor(stage: Stage) {
    this.stage = stage;

    this.app = express();
    injectCors(this.app);
    injectDataParser(this.app, this.stage);
    injectContext(this.app, this.stage);
    injectRenders(this.app);
    injectBasicValidation(this.app);
    injectTokenValidation(this.app);
    injectTransferValidation(this.app);
    injectApplicantDataTokens(this.app);
    injectApplicantWhitelistTokens(this.app);
    injectBalance(this.app);
    injectGetRoot(this.app);
    injectErrors(this.app);
  }

  /**
   * Starts the server.
   * @param host Server hostname.
   * @param port Server listening port.
   */
  public async listen() {
    return new Promise((resolve) => {
      this.server = this.app.listen(
        this.stage.env.HTTP_PORT,
        this.stage.env.HTTP_HOST,
        resolve as any,
      );
    });
  }

  /**
   * Stops the server.
   */
  public async close() {
    return new Promise((resolve) => {
      this.server.close(resolve);
      this.server = null;
    });
  }

  /**
   * Returns an array of all available routes.
   */
  public collectRoutes(): { method: string, path: string }[] {
    return this.app.router['stack']
      .map((middleware) => middleware.route)
      .filter((route) => !!route)
      .map((route) => (
        Object.keys(route.methods).map((method) => ({
          method: method.toUpperCase(),
          path: route.path,
        }))
      ))
      .reduce((a, b) => a.concat(b), [])
      .sort((a, b) => `${a.path}@${a.method}`.localeCompare(`${b.path}@${b.method}`));
  }

}
