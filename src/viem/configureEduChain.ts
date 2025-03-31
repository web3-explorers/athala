import { defineChain } from 'viem'

export const eduChainTestnet = defineChain({
    id: 656476,
    name: 'EDU Chain Testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'EDU',
      symbol: 'EDU',
    },
    rpcUrls: {
      default: {
        http: ["https://rpc.open-campus-codex.gelato.digital"],
      },
    },
    blockExplorers: {
      default: { name: 'Explorer', url: 'https://opencampus-codex.blockscout.com/' },
    },
  })