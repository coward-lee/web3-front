import {LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";

const transaction = new Transaction();

const amount = 0.1;
const sendSolInstruction = SystemProgram.transfer(
    {
        fromPubkey: new PublicKey(''),
        toPubkey: new PublicKey(''),
        lamports: LAMPORTS_PER_SOL * amount
    }
);
transaction.add(sendSolInstruction);

