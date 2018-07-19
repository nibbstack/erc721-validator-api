import { ObjectId } from 'mongodb';
import { Stage, IEnv } from './stage';
import * as Web3 from 'web3';

/**
 * Request object context holds personalized request-based information.
 */
export class Context {
  public id: ObjectId;
  public env: IEnv;
  public web3: Web3;

  /**
   * Class constructor.
   * @param stage Already connected stage instance.
   */
  constructor(stage: Stage) {
    this.id = new ObjectId();
    this.env = stage.env;
    this.web3 = stage.web3;
  }

}
