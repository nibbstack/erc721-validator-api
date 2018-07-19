import { ApiHttp, Stage } from '..';
import env from '../config/env';

/**
 * Starts the API server.
 */

const stage = new Stage(env);
const api = new ApiHttp(stage);
(async () => {
  await stage.connect();
  await api.listen();
})().catch(async (err) => {
  console.log(err);
  await api.close();
  await stage.close();
});
