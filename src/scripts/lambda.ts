import { Stage, ApiHttp } from '..';
import * as awsSe from 'aws-serverless-express';
import env from '../config/env';

const binaryMimeTypes = [
  'application/octet-stream',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml'
];

const stage = new Stage(env);
const api   = new ApiHttp(stage);

const server = awsSe.createServer(api.app, null, binaryMimeTypes);
exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  await stage.connect();

  return new Promise((resolve, reject) => {
    awsSe.proxy(server, event, {
      ...context,
      succeed: resolve,
    });
  });
};
