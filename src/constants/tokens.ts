import { USDC_ABI} from "./abi/usdc";

interface Token {
    name: string;        // Nombre del token
    symbol: string;      // Símbolo del token
    decimals: number;    // Decimales del token
    contractId: string;  // ID del contrato
}

export const tokensAvailable: Token[] = [
    {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 18,
        contractId: "0x77721D19BDfc67fe8cc46ddaa3cc4C94e6826E3C",
    },
    
  ];

export const abiByToken = [
    {
        contractId: "0x77721D19BDfc67fe8cc46ddaa3cc4C94e6826E3C",
        ABI: USDC_ABI
    },
]

export const concatenatedTokens = tokensAvailable
        .map(
        (token) =>
            `Name: ${token.name}, Symbol: ${token.symbol}, Decimals: ${token.decimals}, Contract ID: ${token.contractId}`
        )
        .join("\n");