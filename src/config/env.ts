/**
 * Environment variables interface.
 */
export default {
  /**
   * Application internals.
   */
  APP_ENV: process.env['APP_ENV'],
  APP_SECRET: process.env['APP_SECRET'],
  /**
   * HTTP server config.
   */
  HTTP_HOST: process.env['API_HOST'],
  HTTP_PORT: parseInt(process.env['API_PORT']),
  /**
   * WEB3_URL.
   */
  WEB3_URL: process.env['WEB3_URL']
};
