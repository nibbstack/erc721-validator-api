import * as Table from 'cli-table2';
import { ApiHttp, Stage } from '..';
import env from '../config/env';

/**
 * Lists API server routes.
 */

const stage = new Stage(env);
const api = new ApiHttp(stage);
const routes = api.collectRoutes();

const table = new Table() as Table.HorizontalTable;
table.push(
  ...routes.map((r) => [r.method, r.path])
);

console.log(table.toString());
