import {LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import connection  from "./connection";

const suppliedPublicKey = '6rapYNMKMZpN19g9jf7idUH9D9kLSbxAhjdBTm3B786L';
if (!suppliedPublicKey) {
    throw new Error("Provide a public key to check the balance of!");
}

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
    `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
);