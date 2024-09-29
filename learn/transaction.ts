import {
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction
} from "@solana/web3.js";
import connection from "../common/connection";

const transaction = new Transaction();

const senderKeyPair = Keypair.fromSecretKey('fromSecretKey');
const toPubkey = new Keypair();

const amount = 0.1;
const sendSolInstruction = SystemProgram.transfer(
    {
        fromPubkey: new PublicKey(''),
        toPubkey: toPubkey.publicKey,
        lamports: LAMPORTS_PER_SOL * amount
    }
);
transaction.add(sendSolInstruction);

const signature = sendAndConfirmTransaction(connection,transaction,[senderKeyPair]);

console.log(
    `💸 Finished! Sent ${amount} to the address ${toPubkey}. `,
);
console.log(`Transaction signature is ${signature}!`);

