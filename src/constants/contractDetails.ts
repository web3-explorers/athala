import { Address } from "viem";

export const ERC20_ABI = [
  {
    type: "constructor",
    inputs: [
      { name: "name", type: "string", internalType: "string" },
      { name: "symbol", type: "string", internalType: "string" },
      {
        name: "initialSupply",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "spender", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "value", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC20InsufficientAllowance",
    inputs: [
      { name: "spender", type: "address", internalType: "address" },
      { name: "allowance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InsufficientBalance",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "balance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC20InvalidApprover",
    inputs: [{ name: "approver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidReceiver",
    inputs: [{ name: "receiver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSender",
    inputs: [{ name: "sender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC20InvalidSpender",
    inputs: [{ name: "spender", type: "address", internalType: "address" }],
  },
];

export const ERC20_BYTECODE: Address =
  "0x00050000000000020000008004000039000000400040043f0000006003100270000001020330019700000001002001900000002c0000c13d000000040030008c000003500000413d000000000201043b000000e002200270000001130020009c000000860000a13d000001140020009c0000009c0000a13d000001150020009c000000e90000613d000001160020009c000001020000613d000001170020009c000003500000c13d000000440030008c000003500000413d0000000002000416000000000002004b000003500000c13d0000000402100370000000000202043b0000011f0020009c000003500000213d0000002401100370000000000101043b0000011f0010009c000003500000213d000000000020043f000500000001001d0000000101000039000000200010043f0000004001000039040403e90000040f0000000502000029000000000020043f000000200010043f000000ab0000013d0000000002000416000000000002004b000003500000c13d0000001f0230003900000103022001970000008002200039000000400020043f0000001f0530018f000001040630019800000080026000390000003c0000613d000000000701034f000000007807043c0000000004840436000000000024004b000000380000c13d000000000005004b000000490000613d000000000161034f0000000304500210000000000502043300000000054501cf000000000545022f000000000101043b0000010004400089000000000141022f00000000014101cf000000000151019f0000000000120435000000600030008c000003500000413d000000800500043d000001050050009c000003500000213d0000001f01500039000000000031004b000000000200001900000106020080410000010601100197000000000001004b00000000040000190000010604004041000001060010009c000000000402c019000000000004004b000003500000c13d00000080015000390000000004010433000001050040009c000001f80000213d0000001f0140003900000128011001970000003f011000390000012801100197000000400d00043d00000000011d00190000000000d1004b00000000020000390000000102004039000001050010009c000001f80000213d0000000100200190000001f80000c13d0000008002300039000000400010043f00000000014d0436000000a0055000390000000006540019000000000026004b000003500000213d00000128074001970000001f0640018f000000000015004b000001440000813d000000000007004b000000820000613d00000000096500190000000008610019000000200880008a000000200990008a000000000a780019000000000b790019000000000b0b04330000000000ba0435000000200770008c0000007c0000c13d000000000006004b0000015a0000613d0000000008010019000001500000013d0000011a0020009c000000ae0000213d0000011d0020009c000001170000613d0000011e0020009c000003500000c13d000000440030008c000003500000413d0000000002000416000000000002004b000003500000c13d0000000402100370000000000302043b0000011f0030009c000003500000213d0000002401100370000000000201043b0000000001000411000000000001004b000001960000c13d0000012701000041000001990000013d000001180020009c0000012c0000613d000001190020009c000003500000c13d000000240030008c000003500000413d0000000002000416000000000002004b000003500000c13d0000000401100370000000000101043b0000011f0010009c000003500000213d000000000010043f000000200000043f0000004001000039040403e90000040f000001370000013d0000011b0020009c000001330000613d0000011c0020009c000003500000c13d000000640030008c000003500000413d0000000002000416000000000002004b000003500000c13d0000000402100370000000000302043b0000011f0030009c000003500000213d0000002402100370000000000202043b000500000002001d0000011f0020009c000003500000213d0000004401100370000000000101043b000300000001001d000000000030043f0000000101000039000000200010043f0000000001000414000001020010009c0000010201008041000000c0011002100000010d011001c70000801002000039000400000003001d040403ff0000040f0000000100200190000003500000613d000000000101043b00000000020004110000011f02200197000200000002001d000000000020043f000000200010043f0000000001000414000001020010009c0000010201008041000000c0011002100000010d011001c70000801002000039040403ff0000040f00000004030000290000000100200190000003500000613d000000000101043b000000000101041a000001290010009c0000020d0000c13d0000000001030019000000050200002900000003030000290404038d0000040f000001e30000013d0000000001000416000000000001004b000003500000c13d0000000403000039000000000203041a000000010520019000000001012002700000007f0410018f00000000010460190000001f0010008c00000000060000390000000106002039000000000662013f0000000100600190000001260000c13d000000800010043f000000000005004b0000019d0000c13d0000012a01200197000000a00010043f000000000004004b000000c001000039000000a001006039000000610110008a000001f50000013d000000440030008c000003500000413d0000000002000416000000000002004b000003500000c13d0000000402100370000000000202043b0000011f0020009c000003500000213d0000002401100370000000000301043b00000000010004110404038d0000040f0000000101000039000000400200043d0000000000120435000001020020009c0000010202008041000000400120021000000121011001c7000004050001042e0000000001000416000000000001004b000003500000c13d0000000303000039000000000203041a000000010520019000000001012002700000007f0410018f00000000010460190000001f0010008c00000000060000390000000106002039000000000662013f00000001006001900000013b0000613d0000011001000041000000000010043f0000002201000039000000040010043f000001110100004100000406000104300000000001000416000000000001004b000003500000c13d0000001201000039000000800010043f0000012001000041000004050001042e0000000001000416000000000001004b000003500000c13d0000000201000039000000000101041a000000800010043f0000012001000041000004050001042e000000800010043f000000000005004b000001ad0000c13d0000012a01200197000000a00010043f000000000004004b00000020020000390000000002006039000001f40000013d0000000008710019000000000007004b0000014d0000613d0000000009050019000000000a010019000000009b090434000000000aba043600000000008a004b000001490000c13d000000000006004b0000015a0000613d00000000057500190000000306600210000000000708043300000000076701cf000000000767022f00000000050504330000010006600089000000000565022f00000000056501cf000000000575019f000000000058043500000000044100190000000000040435000000a00400043d000001050040009c000003500000213d0000001f05400039000000000035004b000000000300001900000106030080410000010605500197000000000005004b00000000060000190000010606004041000001060050009c000000000603c019000000000006004b000003500000c13d00000080034000390000000003030433000001050030009c000001f80000213d0000001f0530003900000128055001970000003f055000390000012805500197000000400a00043d00000000055a00190000000000a5004b00000000060000390000000106004039000001050050009c000001f80000213d0000000100600190000001f80000c13d000000400050043f000000000b3a0436000000a0044000390000000005430019000000000025004b000003500000213d00000128053001970000001f0230018f0000000000b4004b000002180000813d000000000005004b000001920000613d000000000724001900000000062b0019000000200660008a000000200770008a0000000008560019000000000957001900000000090904330000000000980435000000200550008c0000018c0000c13d000000000002004b0000022e0000613d00000000060b0019000002240000013d000000000003004b000001b20000c13d0000012601000041000000000010043f000000040000043f00000111010000410000040600010430000000000030043f000000020020008c000001b00000413d0000010b0200004100000000040000190000000003040019000000000402041a000000a005300039000000000045043500000001022000390000002004300039000000000014004b000001a20000413d000000c001300039000000610110008a000001f50000013d000000000030043f000000020020008c000001eb0000813d0000002001000039000001fe0000013d000400000002001d000000000010043f0000000101000039000000200010043f0000000001000414000001020010009c0000010201008041000000c0011002100000010d011001c70000801002000039000500000003001d040403ff0000040f00000005030000290000000100200190000003500000613d000000000101043b000000000030043f000000200010043f0000000001000414000001020010009c0000010201008041000000c0011002100000010d011001c70000801002000039040403ff0000040f00000005060000290000000100200190000003500000613d000000000101043b0000000402000029000000000021041b000000400100043d0000000000210435000001020010009c000001020100804100000040011002100000000002000414000001020020009c0000010202008041000000c002200210000000000112019f00000109011001c70000800d02000039000000030300003900000125040000410000000005000411040403fa0000040f0000000100200190000003500000613d000000400100043d00000001020000390000000000210435000001020010009c0000010201008041000000400110021000000121011001c7000004050001042e00000108030000410000000002000019000000000403041a000000a005200039000000000045043500000001033000390000002002200039000000000012004b000001ed0000413d0000003f012000390000012801100197000001220010009c000001fe0000a13d0000011001000041000000000010043f0000004101000039000000040010043f000001110100004100000406000104300000008001100039000500000001001d000000400010043f0000008002000039040403580000040f00000005020000290000000001210049000001020010009c00000102010080410000006001100210000001020020009c00000102020080410000004002200210000000000121019f000004050001042e0000000304000029000000000241004b000002660000813d0000012302000041000000000020043f0000000002000411000000040020043f000000240010043f000000440040043f0000012401000041000004060001043000000000065b0019000000000005004b000002210000613d000000000704001900000000080b001900000000790704340000000008980436000000000068004b0000021d0000c13d000000000002004b0000022e0000613d00000000045400190000000302200210000000000506043300000000052501cf000000000525022f00000000040404330000010002200089000000000424022f00000000022401cf000000000252019f000000000026043500000000023b0019000000000002043500000000060d0433000001050060009c000001f80000213d0000000305000039000000000205041a000000010320019000000001022002700000007f0220618f0000001f0020008c00000000040000390000000104002039000000000043004b000001260000c13d00010000000b001d00030000000d001d00040000000a001d000000200020008c000002510000413d000000000050043f0000001f036000390000000503300270000001070330009a000000200060008c00000108030040410000001f022000390000000502200270000001070220009a000000000023004b000002510000813d000000000003041b0000000103300039000000000023004b0000024d0000413d000000c00200043d000200000002001d000500000006001d0000001f0060008c0000028a0000a13d000000000050043f0000000001000414000001020010009c0000010201008041000000c00110021000000109011001c70000801002000039040403ff0000040f0000000100200190000000200200008a000003500000613d0000000502200180000000000101043b000002960000c13d0000002003000039000002a30000013d000000000003004b0000009a0000613d000100000002001d0000000001000411000000000001004b000001980000613d000000000030043f0000000101000039000000200010043f0000000001000414000001020010009c0000010201008041000000c0011002100000010d011001c70000801002000039040403ff0000040f0000000100200190000003500000613d000000000101043b0000000202000029000000000020043f000000200010043f0000000001000414000001020010009c0000010201008041000000c0011002100000010d011001c70000801002000039040403ff0000040f00000004030000290000000100200190000003500000613d000000000101043b0000000102000029000000000021041b000000e40000013d000000050000006b00000000020000190000028e0000613d000000000201043300000005040000290000000301400210000001290110027f0000012901100167000000000112016f0000000102400210000000000121019f000002b10000013d000000010320008a0000000503300270000000000431001900000020030000390000000104400039000000030600002900000000056300190000000005050433000000000051041b00000020033000390000000101100039000000000041004b0000029c0000c13d000000050020006c000002ae0000813d00000005020000290000000302200210000000f80220018f000001290220027f000001290220016700000003033000290000000003030433000000000223016f000000000021041b0000000501000029000000010110021000000001011001bf0000000302000039000000000012041b00000004010000290000000001010433000500000001001d000001050010009c000001f80000213d0000000401000039000000000201041a000000010020019000000001012002700000007f0110618f0000001f0010008c00000000030000390000000103002039000000000232013f0000000100200190000001260000c13d000000200010008c000002d60000413d0000000402000039000000000020043f00000005030000290000001f0230003900000005022002700000010a0220009a000000200030008c0000010b020040410000001f0110003900000005011002700000010a0110009a000000000012004b000002d60000813d000000000002041b0000000102200039000000000012004b000002d20000413d00000005010000290000001f0010008c000002ea0000a13d0000000401000039000000000010043f0000000001000414000001020010009c0000010201008041000000c00110021000000109011001c70000801002000039040403ff0000040f0000000100200190000000200200008a000003500000613d0000000502200180000000000101043b000002f70000c13d0000002003000039000003040000013d000000050000006b0000000001000019000002ef0000613d0000000101000029000000000101043300000005040000290000000302400210000001290220027f0000012902200167000000000121016f0000000102400210000000000121019f000003120000013d000000010320008a0000000503300270000000000431001900000020030000390000000104400039000000040600002900000000056300190000000005050433000000000051041b00000020033000390000000101100039000000000041004b000002fd0000c13d000000050020006c0000030f0000813d00000005020000290000000302200210000000f80220018f000001290220027f000001290220016700000004033000290000000003030433000000000223016f000000000021041b0000000501000029000000010110021000000001011001bf0000000402000039000000000012041b00000002010000290005010c001000d5000000000001004b0000031c0000613d000000050200002900000002012000fa0000010c0010009c000003520000c13d0000000001000411000000000001004b000003210000c13d0000011201000041000001990000013d0000000201000039000000000201041a000000050020002a000003520000413d0000000502200029000000000021041b0000000001000411000000000010043f000000200000043f0000000001000414000001020010009c0000010201008041000000c0011002100000010d011001c70000801002000039040403ff0000040f0000000100200190000003500000613d000000000101043b000000000201041a00000005030000290000000002320019000000000021041b000000400100043d0000000000310435000001020010009c000001020100804100000040011002100000000002000414000001020020009c0000010202008041000000c002200210000000000112019f00000109011001c70000800d0200003900000003030000390000010e0400004100000000050000190000000006000411040403fa0000040f0000000100200190000003500000613d0000002001000039000001000010044300000120000004430000010f01000041000004050001042e000000000100001900000406000104300000011001000041000000000010043f0000001101000039000000040010043f00000111010000410000040600010430000000200300003900000000033104360000000042020434000000000023043500000128062001970000001f0520018f0000004001100039000000000014004b000003710000813d000000000006004b0000036d0000613d00000000085400190000000007510019000000200770008a000000200880008a0000000009670019000000000a680019000000000a0a04330000000000a90435000000200660008c000003670000c13d000000000005004b000003870000613d00000000070100190000037d0000013d0000000007610019000000000006004b0000037a0000613d00000000080400190000000009010019000000008a0804340000000009a90436000000000079004b000003760000c13d000000000005004b000003870000613d00000000046400190000000305500210000000000607043300000000065601cf000000000656022f00000000040404330000010005500089000000000454022f00000000045401cf000000000464019f0000000000470435000000000421001900000000000404350000001f0220003900000128022001970000000001210019000000000001042d0004000000000002000400000003001d0000011f01100198000003d90000613d0002011f0020019c000003db0000613d000300000001001d000000000010043f000000200000043f0000000001000414000001020010009c0000010201008041000000c0011002100000010d011001c70000801002000039040403ff0000040f0000000100200190000003d70000613d000000000101043b000000000101041a0001000400100074000003e00000413d0000000301000029000000000010043f000000200000043f0000000001000414000001020010009c0000010201008041000000c0011002100000010d011001c70000801002000039040403ff0000040f0000000100200190000003d70000613d000000000101043b0000000102000029000000000021041b0000000201000029000000000010043f000000200000043f0000000001000414000001020010009c0000010201008041000000c0011002100000010d011001c70000801002000039040403ff0000040f0000000100200190000003d70000613d000000000101043b000000000201041a00000004030000290000000002320019000000000021041b000000400100043d0000000000310435000001020010009c000001020100804100000040011002100000000002000414000001020020009c0000010202008041000000c002200210000000000112019f00000109011001c70000800d0200003900000003030000390000010e0400004100000003050000290000000206000029040403fa0000040f0000000100200190000003d70000613d000000000001042d000000000100001900000406000104300000012c01000041000003dc0000013d0000011201000041000000000010043f000000040000043f000001110100004100000406000104300000012b02000041000000000020043f0000000302000029000000040020043f000000240010043f0000000401000029000000440010043f00000124010000410000040600010430000001020010009c000001020100804100000060011002100000000002000414000001020020009c0000010202008041000000c002200210000000000112019f0000012d011001c70000801002000039040403ff0000040f0000000100200190000003f80000613d000000000101043b000000000001042d00000000010000190000040600010430000003fd002104210000000102000039000000000001042d0000000002000019000000000001042d00000402002104230000000102000039000000000001042d0000000002000019000000000001042d0000040400000432000004050001042e0000040600010430000000000000000000000000000000000000000000000000000000000000000000000000ffffffff00000000000000000000000000000000000000000000000000000001ffffffe000000000000000000000000000000000000000000000000000000000ffffffe0000000000000000000000000000000000000000000000000ffffffffffffffff80000000000000000000000000000000000000000000000000000000000000003da8a5f161a6c3ff06a60736d0ed24d7963cc6a5c4fafd2fa1dae9bb908e07a5c2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b020000000000000000000000000000000000002000000000000000000000000075ca53043ea007e5c65182cbb028f60d7179ff4b55739a3949b401801c942e658a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0000000000000000000000000000000000000000000000000de0b6b3a76400000200000000000000000000000000000000000040000000000000000000000000ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef00000002000000000000000000000000000000400000010000000000000000004e487b71000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024000000000000000000000000ec442f050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000313ce5660000000000000000000000000000000000000000000000000000000095d89b400000000000000000000000000000000000000000000000000000000095d89b4100000000000000000000000000000000000000000000000000000000a9059cbb00000000000000000000000000000000000000000000000000000000dd62ed3e00000000000000000000000000000000000000000000000000000000313ce5670000000000000000000000000000000000000000000000000000000070a082310000000000000000000000000000000000000000000000000000000018160ddc0000000000000000000000000000000000000000000000000000000018160ddd0000000000000000000000000000000000000000000000000000000023b872dd0000000000000000000000000000000000000000000000000000000006fdde0300000000000000000000000000000000000000000000000000000000095ea7b3000000000000000000000000ffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000200000008000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffff7ffb8f41b20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000640000000000000000000000008c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92594280d6200000000000000000000000000000000000000000000000000000000e602df0500000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00e450d38c0000000000000000000000000000000000000000000000000000000096c6fd1e000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000449f9616cd27bc417d724509f30ba0456bf7aaee39c3daff5e171e3cf3c24a6c";
