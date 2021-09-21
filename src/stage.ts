/**
 * Platform environment interface.
 */
export interface IEnv {
  APP_ENV: string;
  APP_SECRET: string;
  HTTP_HOST: string;
  HTTP_PORT: number;
  ETH_MAINNET_URL: string;
  ETH_RINKEBY_URL: string;
  ETH_ROPSTEN_URL: string;
}

/**
 * Stage class holds infrastructure related information.
 */
export class Stage {
  public env: IEnv;

  /**
   * Class constructor.
   * @param env Environment variables.
   */
  public constructor(env: IEnv) {
    this.env = env;
  }

  /**
   * Starts platform connectors.
   */
  public async connect() {
  }

  /**
   * Stops platform connectors.
   */
  public async close() {
  }

  /**
   * Removes temporial fils and removes content from database.
   */
  public async cleenup() {
  }
}
