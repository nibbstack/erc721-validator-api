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
   * NODE URLs.
   */
  ETH_MAINNET_URL: process.env['ETH_MAINNET_URL'],
  ETH_RINKEBY_URL: process.env['ETH_RINKEBY_URL'],
  ETH_ROPSTEN_URL: process.env['ETH_ROPSTEN_URL'],
};
