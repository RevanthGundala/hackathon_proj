require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/uCEYmy2DTEaZ7K-uSji3CWGnFjNwQg3K",
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/S74hlwWI4VY_rvgbmCup8y99ZHKb5lCO",
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
