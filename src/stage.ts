const Web3 = require('web3')
/**
 * Platform environment interface.
 */
export interface IEnv {
  APP_ENV: string;
  APP_SECRET: string;
  HTTP_HOST: string;
  HTTP_PORT: number;
  WEB3_URL: string;
}

/**
 * Stage class holds infrastructure related information.
 */
export class Stage {
  public env: IEnv;
  public web3: any;

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
    await this.connectWeb3();
  }

  /**
   * Initializes Web3 connection.
   */
  public async connectWeb3() {
    this.web3 = new Web3(
      new Web3.providers.HttpProvider(this.env.WEB3_URL)
    );
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
