import { ERC721Validator } from '@0xcert/erc721-validator';
import { ChainCodes, millionCoinAddressMapping } from './config/types';
import { Stage, IEnv } from './stage';
const Web3 = require('web3');

/**
 * Request object context holds personalized request-based information.
 */
export class Context {
  public env: IEnv;

  /**
   * Class constructor.
   * @param stage Already connected stage instance.
   */
  constructor(stage: Stage) {
    this.env = stage.env;
  }

  getValidator(chainId: string) {
    let validator = null;
    switch (parseInt(chainId)) {
      case ChainCodes.ETHEREUM_MAINNET: {
        const web3 = new Web3(
          new Web3.providers.HttpProvider(this.env.ETH_MAINNET_URL)
        );
        const address = millionCoinAddressMapping[ChainCodes.ETHEREUM_MAINNET];
        validator = new ERC721Validator(web3, address);
        break;
      }
      case ChainCodes.ETHEREUM_RINKEBY: {
        const web3 = new Web3(
          new Web3.providers.HttpProvider(this.env.ETH_RINKEBY_URL)
        );
        const address = millionCoinAddressMapping[ChainCodes.ETHEREUM_RINKEBY];
        validator = new ERC721Validator(web3, address);
        break;
      }
      case ChainCodes.ETHEREUM_ROPSTEN: {
        const web3 = new Web3(
          new Web3.providers.HttpProvider(this.env.ETH_ROPSTEN_URL)
        );
        const address = millionCoinAddressMapping[ChainCodes.ETHEREUM_ROPSTEN];
        validator = new ERC721Validator(web3, address);
        break;
      }
      default: {
        validator = null;
        break;
      }
    }
    return validator;
  }

}
