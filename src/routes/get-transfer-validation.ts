import { Application } from 'express';
import { IRequest, IResponse, INextFunction } from '../http';
import { ERC721Validator } from '@0xcert/erc721-validator';
import codes from '../config/codes';

/**
 * Installs profile-related routes on the provided application.
 * @param app ExpressJS application.
 */
export function inject(app: Application) {
  app.get('/transfer', (req: IRequest, res: IResponse, next: INextFunction) => {
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

  if (!query.test || !query.contract || !query.token || !query.giver) {
    return res.respond(401, { error: 'Invalid input parameters' });
  }
  const validator = new ERC721Validator(ctx.web3);
  const testCase = codes.TESTS_TRANSFER.filter(x => x.id === query.test)[0];

  const result = await validator.transfer(query.test, query.contract, query.token, query.giver);

  res.respond(200, testCase.expected === null ? true : (testCase.expected === result));
}
