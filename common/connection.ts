import fetch, {RequestInit, Response} from 'node-fetch';
import {HttpsProxyAgent} from 'https-proxy-agent';
import {Connection} from "@solana/web3.js";

const proxyUrl = 'http://127.0.0.1:7890';
const agent = new HttpsProxyAgent(proxyUrl);

async function fetchWithProxy(url: string, options?: RequestInit): Promise<Response> {
    const optionsWithAgent: RequestInit = {
        ...options,
        agent
    };
    return fetch(url, optionsWithAgent);
}

const connection = new Connection("https://api.devnet.solana.com", {
    fetch: fetchWithProxy as any,
    commitment: 'confirmed',
})


export default connection;
