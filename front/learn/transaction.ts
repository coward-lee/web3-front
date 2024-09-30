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
const senderKeypair = Keypair.fromSecretKey(
    new Uint8Array([8,73,230,42,191,220,94,161,218,192,92,28,107,170,83,205,234,209,30,162,237,139,37,118,253,62,220,251,216,8,156,241,86,254,34,97,101,4,51,241,247,134,45,31,213,205,53,248,152,29,106,2,161,53,232,82,234,169,113,64,31,30,214,1])
);
// const senderKeypair = Keypair.fromSecretKey(new TextEncoder().encode('0849e62abfdc5ea1dac05c1c6baa53cdead11ea2ed8b2576fd3edcfbd8089cf156fe2261650433f1f7862d1fd5cd35f8981d6a02a135e852eaa971401f1ed601'));

const toPubkey = new PublicKey('EqSMivHhekiAfTuTMkEwjqE1hKnmtvJV4i5duGypaZMW');

const amount = 0.01;
const sendSolInstruction = SystemProgram.transfer(
    {
        fromPubkey: senderKeypair.publicKey,
        toPubkey: toPubkey,
        lamports: LAMPORTS_PER_SOL * amount
    }
);
transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection,transaction,[senderKeypair]);

console.log(
    `💸 Finished! Sent ${amount} to the address ${toPubkey} `,
);
console.log(`Transaction signature is ${signature}!`);

