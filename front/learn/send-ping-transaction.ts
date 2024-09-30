import {PublicKey, sendAndConfirmTransaction, Transaction, TransactionInstruction} from "@solana/web3.js";
import connection from "../common/connection";
import secret from "../common/secret";

/***
 * 1. create a transaction 创建一个交易
 * 2. create an instruction 实例化一个程序入口点
 * 3. add the instruction to the transaction 将程序入口点传入到交易中
 * 4. send the transaction 发送交易
 */

const PING_PROGRAM_ADDRESS = new PublicKey(
    "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa",
);
const PING_PROGRAM_DATA_ADDRESS = new PublicKey(
    "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod",
);


const transaction = new Transaction();
const programId = new PublicKey(PING_PROGRAM_ADDRESS);
const pingProgramDataId = new PublicKey(PING_PROGRAM_DATA_ADDRESS);

// 调用方法的入口
const instruction = new TransactionInstruction({
    keys: [
        {
            pubkey: pingProgramDataId,
            isSigner: false,
            isWritable: true,
        },
    ],
    programId,
});
const payer = secret;

transaction.add(instruction);
const signature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [payer],
);

console.log(`✅ Transaction completed! Signature is ${signature}`);

