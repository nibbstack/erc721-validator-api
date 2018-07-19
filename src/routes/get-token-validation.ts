import { Application } from 'express';
import { IRequest, IResponse, INextFunction } from '../http';
import { ERC721Validator } from '@0xcert/erc721-validator';
import codes from '../config/codes';

/**
 * Installs profile-related routes on the provided application.
 * @param app ExpressJS application.
 */
export function inject(app: Application) {
  app.get('/token', (req: IRequest, res: IResponse, next: INextFunction) => {
    resolve(req, res).catch(next);
  });
}

/**
 * A middleware which subscribes a user to a whitelist list.
 * @param req ExpressJS request object.
 * @param res ExpressJS response object.
 */
export async function resolve(req: IRequest, res: IResponse): Promise<void> {
  const { ctx, query } = req;

  if (!query.test || !query.contract || !query.token) {
    return res.respond(401, { error: 'Invalid input parameters' });
  }
  const validator = new ERC721Validator(ctx.web3);
  const testCase = codes.TESTS_TOKEN.filter(x => x.id === parseInt(query.test))[0];

  if (!testCase) {
    return res.respond(404, { error: 'Requested test not found' });
  }

  const result = await validator.token(query.test, query.contract, query.token);

  res.respond(200, testCase.expected === null ? true : (testCase.expected === result));
}
