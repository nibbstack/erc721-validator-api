import { ApiHttp, Stage } from './index';
import env from './config/env';

const stage = new Stage(env);
const api   = new ApiHttp(stage);

module.exports = api.app;
