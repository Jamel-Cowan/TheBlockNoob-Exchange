require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKeys = process.env.PRIVATE_KEYS || ""


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    sepolia: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(','), // array of account private keys
          `https://sepolia.infura.io/v3/93d3def4055545b8af7cc37eb4db84bc` // Url to ethereum node
        )
      },
    network_id: 11155111
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
