const { default: Web3 } = require("web3");

const Token = artifacts.require("Token");
const Exchange = artifacts.require("Exchange");


module.exports = async function(callback) {
   try {
        // fetch accounts from wallet - these are unlocked
        const accounts = await web3.eth.getAccounts()

        // fetch the deployed token
        const token = await Token.deployed()
        console.log('Token fetched', token.address)

        // fetch the deployed exchange
        const exchange = await Exchange.deployed()
        console.log('Exchange fetched', exchange.address)

        console.log("script running...")

        // give tokens to account[1]
        const sender = accounts[0]
        const receiver = accounts[1]
        ``

    } catch(err)  {
        console.log(error)
    } 
    callback()
}