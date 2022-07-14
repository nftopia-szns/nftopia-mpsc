require('dotenv').config();
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";

module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://polygon-rpc.com",
      chainId: 137,
      gasPrice: 50000000000,
      accounts: [process.env.PRIVATE_KEY]
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      chainId: 80001,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}