import { Application } from 'express';
import { IRequest, IResponse, INextFunction } from '../http';
import codes from '../config/codes';
import { ChainCodes, RouteErrorCode } from '../config/types';
import { ResourceError } from '../lib/errors';

/**
 * Installs profile-related routes on the provided application.
 * @param app ExpressJS application.
 */
export function inject(app: Application) {
  app.get('/basic', (req: IRequest, res: IResponse, next: INextFunction) => {
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

  if (!query.test || !query.contract) {
    return res.respond(401, { error: 'Invalid input parameters' });
  }

  if (!query.chainId) {
    query.chainId = ChainCodes.ETHEREUM_MAINNET.toString();
  }

  const validator = ctx.getValidator(query.chainId as string);

  if (!validator) {
    throw new ResourceError(RouteErrorCode.INVALID_CHAIN_ID)
  }

  const testCase = codes.TESTS_BASIC.filter(x => x.id === parseInt(query.test as any))[0];

  if (!testCase) {
    return res.respond(404, { error: 'Requested test not found' });
  }

  const result = await validator.basic(query.test as any, query.contract as any);

  const response = {
    result: testCase.expected === null ? true : (testCase.expected === result.result),
    gas: result.gas
  }

  res.respond(200, response);
}
