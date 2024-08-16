import { AssetType, defineAssetList } from "../assets.js";
import { Network } from "../networks.js";
import { releases } from "../releases.js";

const { sulu } = releases.arbitrum;

export default defineAssetList(Network.ARBITRUM, [
  {
    decimals: 18,
    id: "0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8",
    name: "Balancer",
    releases: [],
    symbol: "BAL",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0x354a6da3fcde098f8389cad84b0182725c6c91de",
    name: "Compound",
    releases: [],
    symbol: "COMP",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0x11cdb42b0eb46d95f990bedd4695a6e3fa034978",
    name: "Curve DAO Token",
    releases: [],
    symbol: "CRV",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0xaafcfd42c9954c6689ef1901e03db742520829c5",
    name: "Convex Token",
    releases: [],
    symbol: "CVX",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0x9623063377ad1b27544c965ccd7342f7ea7e88c7",
    name: "Graph Token",
    releases: [],
    symbol: "GRT",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    name: "Tether USD",
    releases: [],
    symbol: "USDT",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0x1debd73e752beaf79865fd6446b0c970eae7732f",
    name: "Coinbase Wrapped Staked ETH",
    releases: [sulu],
    symbol: "cbETH",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0x2416092f143378750bb29b79ed961ab195cceea5",
    name: "Renzo Restaked ETH",
    releases: [sulu],
    symbol: "ezETH",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 9,
    id: "0x2bcc6d6cdbbdc0a4071e48bb3b969b06b3330c07",
    name: "Wrapped SOL",
    releases: [sulu],
    symbol: "SOL",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 8,
    id: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
    name: "Wrapped BTC",
    releases: [sulu],
    symbol: "WBTC",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0x3082cc23568ea640225c2467653db90e9250aaa0",
    name: "Radiant",
    releases: [sulu],
    symbol: "RDNT",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0x35751007a407ca6feffe80b3cb397736d2cf4dbe",
    name: "Wrapped eETH",
    releases: [sulu],
    symbol: "weETH",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0x4186bfc76e2e237523cbc30fd220fe055156b41f",
    name: "KelpDao Restaked ETH",
    releases: [sulu],
    symbol: "rsETH",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0x565609faf65b92f7be02468acf86f8979423e514",
    name: "Wrapped AVAX",
    releases: [sulu],
    symbol: "WAVAX",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0x5979d7b546e38e414f7e9822514be443a4800529",
    name: "Wrapped liquid staked Ether 2.0",
    releases: [sulu],
    symbol: "wstETH",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    name: "Wrapped Ether",
    releases: [sulu],
    symbol: "WETH",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0x8f5c1a99b1df736ad685006cb6adca7b7ae4b514",
    name: "Melon Token",
    releases: [sulu],
    symbol: "MLN",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0x912ce59144191c1204e64559fe8253a0e49e6548",
    name: "Arbitrum",
    releases: [sulu],
    symbol: "ARB",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0xa9004a5421372e1d83fb1f85b0fc986c912f91f3",
    name: "Wrapped BNB",
    releases: [sulu],
    symbol: "WBNB",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0xac800fd6159c2a2cb8fc31ef74621eb430287a5a",
    name: "Optimism",
    releases: [sulu],
    symbol: "OP",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 6,
    id: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
    name: "USD Coin",
    releases: [sulu],
    symbol: "USDC",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0xba5ddd1f9d7f570dc94a51479a000e3bce967196",
    name: "Aave Token",
    releases: [sulu],
    symbol: "AAVE",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0xbc011a12da28e8f0f528d9ee5e7039e22f91cf18",
    name: "swETH",
    releases: [sulu],
    symbol: "swETH",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    name: "Dai Stablecoin",
    releases: [sulu],
    symbol: "DAI",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8",
    name: "Rocket Pool ETH",
    releases: [sulu],
    symbol: "rETH",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
    name: "ChainLink Token",
    releases: [sulu],
    symbol: "LINK",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0",
    name: "Uniswap",
    releases: [sulu],
    symbol: "UNI",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a",
    name: "GMX",
    releases: [sulu],
    symbol: "GMX",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 6,
    id: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    name: "Tether USD",
    releases: [sulu],
    symbol: "USDT",
    type: AssetType.PRIMITIVE,
  },
  {
    decimals: 18,
    id: "0xe50fa9b3c56ffb159cb0fca61f5c9d750e8128c8",
    name: "Aave Arbitrum WETH",
    releases: [sulu],
    symbol: "aArbWETH",
    type: AssetType.AAVE_V3,
    underlying: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
  },
 {
    decimals: 6,
    id: "0x724dc807b04555b71ed48a6896b6f41593b8c637",
    name: "Aave Arbitrum USDCn",
    releases: [sulu],
    symbol: "aArbUSDCn",
    type: AssetType.AAVE_V3,
    underlying: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
  },
{
    decimals: 8,
    id: "0x078f358208685046a11c85e8ad32895ded33a249",
    name: "Aave Arbitrum WBTC",
    releases: [sulu],
    symbol: "aArbWBTC",
    type: AssetType.AAVE_V3,
    underlying: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
  },
{
    decimals: 18,
    id: "0x8437d7c167dfb82ed4cb79cd44b7a32a1dd95c77",
    name: "Aave Arbitrum weETH",
    releases: [sulu],
    symbol: "aArbweETH",
    type: AssetType.AAVE_V3,
    underlying: "0x35751007a407ca6feffe80b3cb397736d2cf4dbe",
  },
  {
    decimals: 18,
    id: "0x513c7e3a9c69ca3e22550ef58ac1c0088e918fff",
    name: "Aave Arbitrum wstETH",
    releases: [sulu],
    symbol: "aArbwstETH",
    type: AssetType.AAVE_V3,
    underlying: "0x5979d7b546e38e414f7e9822514be443a4800529",
  },
  {
    decimals: 6,
    id: "0x6ab707aca953edaefbc4fd23ba73294241490620",
    name: "Aave Arbitrum USDT",
    releases: [sulu],
    symbol: "aArbUSDT",
    type: AssetType.AAVE_V3,
    underlying: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
  },
  {
    decimals: 18,
    id: "0x191c10aa4af7c30e871e70c95db0e4eb77237530",
    name: "Aave Arbitrum LINK",
    releases: [sulu],
    symbol: "aArbLINK",
    type: AssetType.AAVE_V3,
    underlying: "0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
  },
  {
    decimals: 18,
    id: "0x6533afac2e7bccb20dca161449a13a32d391fb00",
    name: "Aave Arbitrum ARB",
    releases: [sulu],
    symbol: "aArbARB",
    type: AssetType.AAVE_V3,
    underlying: "0x912ce59144191c1204e64559fe8253a0e49e6548",
  },
  {
    decimals: 6,
    id: "0x625e7708f30ca75bfd92586e17077590c60eb4cd",
    name: "Aave Arbitrum USDC",
    releases: [sulu],
    symbol: "aArbUSDC",
    type: AssetType.AAVE_V3,
    underlying: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
  },
  {
    decimals: 18,
    id: "0x82e64f49ed5ec1bc6e43dad4fc8af9bb3a2312ee",
    name: "Aave Arbitrum DAI",
    releases: [sulu],
    symbol: "aArbDAI",
    type: AssetType.AAVE_V3,
    underlying: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
  },
  {
    decimals: 18,
    id: "0x8eb270e296023e9d92081fdf967ddd7878724424",
    name: "Aave Arbitrum rETH",
    releases: [sulu],
    symbol: "aArbrETH",
    type: AssetType.AAVE_V3,
    underlying: "0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8",
  },
  {
    decimals: 18,
    id: "0x8ffdf2de812095b1d19cb146e4c004587c0a0692",
    name: "Aave Arbitrum LUSD",
    releases: [sulu],
    symbol: "aArbLUSD",
    type: AssetType.AAVE_V3,
    underlying: "0x93b346b6bc2548da6a1e7d98e9a421b42541425b",
  },
  {
    decimals: 18,
    id: "0xf329e36c7bf6e5e86ce2150875a84ce77f477375",
    name: "Aave Arbitrum AAVE",
    releases: [sulu],
    symbol: "aArbAAVE",
    type: AssetType.AAVE_V3,
    underlying: "0xba5ddd1f9d7f570dc94a51479a000e3bce967196",
  },
  {
    decimals: 18,
    id: "0xebe517846d0f36eced99c735cbf6131e1feb775d",
    name: "Aave Arbitrum GHO",
    releases: [sulu],
    symbol: "aArbGHO",
    type: AssetType.AAVE_V3,
    underlying: "0x7dff72693f6a4149b17e7c6314655f6a9f7c8b33",
  },
  {
    decimals: 18,
    id: "0x38d693ce1df5aadf7bc62595a37d667ad57922e5",
    name: "Aave Arbitrum FRAX",
    releases: [sulu],
    symbol: "aArbFRAX",
    type: AssetType.AAVE_V3,
    underlying: "0x17fc002b466eec40dae837fc4be5c67993ddbd6f",
  },
  {
    decimals: 6,
    id: "0xe80772eaf6e2e18b651f160bc9158b2a5cafca65",
    name: "USD+",
    releases: [sulu],
    symbol: "USD+",
    type: AssetType.PRIMITIVE,
  },
   {
    decimals: 6,
    id: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
    name: "USD Coin (Arb1)",
    releases: [sulu],
    symbol: "USDC",
    type: AssetType.PRIMITIVE,
  },
     {
    decimals: 18,
    id: "0x17fc002b466eec40dae837fc4be5c67993ddbd6f",
    name: "Frax",
    releases: [sulu],
    symbol: "FRAX",
    type: AssetType.PRIMITIVE,
  },
     {
    decimals: 18,
    id: "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34",
    name: "USDe",
    releases: [sulu],
    symbol: "USDe",
    type: AssetType.PRIMITIVE,
  },
     {
    decimals: 18,
    id: "0x211cc4dd073734da055fbf44a2b4667d5e5fe5d2",
    name: "Staked USDe",
    releases: [sulu],
    symbol: "sUSDe",
    type: AssetType.PRIMITIVE,
  },
     {
    decimals: 18,
    id: "0xf7d4e7273e5015c96728a6b02f31c505ee184603",
    name: "Staked ETH",
    releases: [sulu],
    symbol: "osETH",
    type: AssetType.PRIMITIVE,
  },
     {
    decimals: 18,
    id: "0x93b346b6bc2548da6a1e7d98e9a421b42541425b",
    name: "LUSD Stablecoin",
    releases: [sulu],
    symbol: "LUSD",
    type: AssetType.PRIMITIVE,
  },
     {
    decimals: 18,
    id: "0x7dff72693f6a4149b17e7c6314655f6a9f7c8b33",
    name: "Gho Token",
    releases: [sulu],
    symbol: "GHO",
    type: AssetType.PRIMITIVE,
  },
]);
