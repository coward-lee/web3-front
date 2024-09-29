### 准备：

- 安装基本依赖：`npm install`
- 安装web3相关的依赖 `npm install typescript @solana/web3.js esrun`
- 安装代理相关的依赖 `npm install node-fetch @types/node-fetch https-proxy-agent`

链接solana需要注意的问题，配置clash代理之后，js也不会走代理，需要在代码里面强行配置proxy的信息才行
```typescript
import fetch, {RequestInit, Response} from 'node-fetch';
import {HttpsProxyAgent} from 'https-proxy-agent';

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

```