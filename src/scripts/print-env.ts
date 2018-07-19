import * as Table from 'cli-table2';
import env from '../config/env';

/**
 * Lists environment variables.
 */

const table = new Table() as Table.HorizontalTable;
table.push(
  ...Object.keys(env).map((k) => [k, env[k]])
);

console.log(table.toString());
