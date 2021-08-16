// const fs = require('fs');

// const Web3 = require('web3')

// const web3Bsc = new Web3(new Web3.providers.WebsocketProvider('wss://apis.ankr.com/wss/73941c08365640568aa4fd407b40a96f/070b207c4ac87bb32ef04a14208dccd9/binance/full/test'))

// const adminPrivKey = fs.readFileSync(".private").toString().trim();
// const {address: admin} = web3Bsc.eth.accounts.wallet.add(adminPrivKey);
// var bsc_json_interface = [{"inputs":[{"internalType":"address","name":"token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"date","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nonce","type":"uint256"},{"indexed":true,"internalType":"enum BridgeBase.Step","name":"step","type":"uint8"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"get_fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"processedNonce","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tendie","outputs":[{"internalType":"contract ITendie","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"otherChainNonce","type":"uint256"}],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawBnb","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]


// const bridgeBsc = new web3Bsc.eth.Contract(
//     bsc_json_interface,
//     // BridgeBsc.networks['97'].address
//     '0x1f4F0B2AB7ED2fF626316013C688126BdC16eba3'
// )
// bridgeBsc.events.Transfer(
//     {fromBlock: 0, step: 0}, function (err, event) {console.log(err)}
// ).on('data', async event => {
//     const {from, to, amount, date, nonce} = event.returnValues

//     const tx = bridgeBsc.methods.mint(to, amount, nonce)
//     const [gasPrice, gasCost] = await Promise.all([
//         web3Bsc.eth.getGasPrice(),
//         tx.estimateGas({from: admin})
//     ])
//     const data = tx.encodeABI()
//     const txData = {
//         from: admin,
//         to: bridgeBsc.options.address,
//         data,
//         gas: gasCost,
//         gasPrice
//     }
//     const receipt = await web3Bsc.eth.sendTransaction(txData);
//     console.log(`Transaction hash: ${receipt.transactionHash}`);
//     console.log(`
//         Processed transfer:
//         - from ${from} 
//         - to ${to} 
//         - amount ${amount} tokens
//         - date ${date}
//     `);
// })
const oracle = require('./oracle.js')