export enum ChainCodes {
  ETHEREUM_MAINNET = 1,
  ETHEREUM_RINKEBY = 4,
  ETHEREUM_ROPSTEN = 3,
} 

export const millionCoinAddressMapping = {
  [ChainCodes.ETHEREUM_MAINNET]: '0xbe0eb53f46cd790cd13851d5eff43d12404d33e8',
  [ChainCodes.ETHEREUM_RINKEBY]: '0x31b98d14007bdee637298086988a0bbd31184523',
  [ChainCodes.ETHEREUM_ROPSTEN]: '0x81b7E08F65Bdf5648606c89998A9CC8164397647',
}

/**
 * System Error code.
 */
export enum SystemErrorCode {
  UNHANDLED_SYSTEM_ERROR = 500000,
}

/**
 * Route Error code.
 */
 export enum RouteErrorCode {
  INVALID_CHAIN_ID = 400000,
}