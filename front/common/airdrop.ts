import connection from "./connection";
import {LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";

const signature = await connection.requestAirdrop(
  new PublicKey('6rapYNMKMZpN19g9jf7idUH9D9kLSbxAhjdBTm3B786L'),
  LAMPORTS_PER_SOL,
);
// console.log("==============")
// await connection.confirmTransaction(signature,"confirmed");