import 'mocha';
import * as assert from 'assert';
import * as request from 'supertest';
import { ApiHttp, Stage } from '../..';
import env from '../../config/env';

describe('routes/get-root', () => {

  it('returns server info', async () => {
    const stage = new Stage(env);
    const api = new ApiHttp(stage);

    const res = await request(api.app)
      .get('/');

    assert.equal(res.status, 200);
    assert.equal(res.body.data.name, '0xcert API');
    assert.equal(res.body.data.description, 'Open protocol for certified non-fungible tokens.');
    assert.equal(res.body.data.uptime > 0, true);
    assert.equal(res.body.data.version, '0.1.0');
  });

  it('checks basic tests', async () => {
    env.ETH_MAINNET_URL='https://mainnet.infura.io/v3/6dcc6f67fadb4338b5af2bc808e75a9f'; // TODO add node link.
    env.ETH_RINKEBY_URL='https://rinkeby.infura.io/v3/6dcc6f67fadb4338b5af2bc808e75a9f'; // TODO add node link.
    env.ETH_ROPSTEN_URL='https://ropsten.infura.io/v3/6dcc6f67fadb4338b5af2bc808e75a9f'; // TODO add node link.
    const stage = new Stage(env);
    await stage.connect();
    const api = new ApiHttp(stage);

    const res = await request(api.app)
      .get('/basic?test=1&contract=0xf176d7bcdD07f8e474877095870685Ef0CCcCb2D');

    assert.equal(res.body.data.result, true);

    const res2 = await request(api.app)
      .get('/basic?test=6&contract=0xf176d7bcdD07f8e474877095870685Ef0CCcCb2D&chainId=2');

    assert.equal(res2.body.errors[0].code, 400000);

    const res3 = await request(api.app)
      .get('/basic?test=1&contract=0xf176d7bcdD07f8e474877095870685Ef0CCcCb2D&chainId=4');

    assert.equal(res3.body.data.result, false);

    const res4 = await request(api.app)
    .get('/basic?test=1&contract=0x8e9269bbd0a6e7a3817048e9f9199c5542257ded&chainId=4');

    assert.equal(res4.body.data.result, true);
  });

});
