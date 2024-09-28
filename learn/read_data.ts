import {Connection, PublicKey, clusterApiUrl} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey('6rapYNMKMZpN19g9jf7idUH9D9kLSbxAhjdBTm3B786L');
connection.getBalance(address).then(balance => {

    console.log(`The balance of the account at ${address} is ${balance} lamports`);
    console.log(`✅ Finished!`)
}).catch(e => {
    console.log('发生错误了')
    console.error(`error is : ${e.message} `, e)
})