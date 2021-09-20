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
    env.WEB3_URL=''; // TODO add node link.
    const stage = new Stage(env);
    await stage.connect();
    const api = new ApiHttp(stage);

    const res = await request(api.app)
      .get('/basic?test=6&contract=0xf176d7bcdD07f8e474877095870685Ef0CCcCb2D');

      assert.equal(res.body.data, true);
  });

});
