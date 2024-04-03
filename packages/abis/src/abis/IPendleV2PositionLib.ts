export const IPendleV2PositionLib = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_addressListRegistry",
        type: "address",
        internalType: "address",
      },
      {
        name: "_minimumPricingDuration",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "_maximumPricingDuration",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "_pendleMarketFactoriesListId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_pendleSyTokensListId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_pendlePtOracleAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_pendleRouterAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_wrappedNativeAssetAddress",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getDebtAssets",
    inputs: [],
    outputs: [
      {
        name: "assets_",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "amounts_",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "getLPTokens",
    inputs: [],
    outputs: [
      {
        name: "lpTokenAddresses_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getManagedAssets",
    inputs: [],
    outputs: [
      {
        name: "assets_",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "amounts_",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMarketForPrincipalToken",
    inputs: [
      {
        name: "_principalTokenAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "marketAddress_",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getOraclePricingDurationForMarket",
    inputs: [
      {
        name: "_marketAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "pricingDuration_",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPrincipalTokens",
    inputs: [],
    outputs: [
      {
        name: "principalTokenAddresses_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "init",
    inputs: [
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "receiveCallFromVault",
    inputs: [
      {
        name: "_actionData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "LpTokenAdded",
    inputs: [
      {
        name: "lpToken",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LpTokenRemoved",
    inputs: [
      {
        name: "lpToken",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OracleDurationForMarketAdded",
    inputs: [
      {
        name: "market",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "pricingDuration",
        type: "uint32",
        indexed: true,
        internalType: "uint32",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PrincipalTokenAdded",
    inputs: [
      {
        name: "principalToken",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "market",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PrincipalTokenRemoved",
    inputs: [
      {
        name: "principalToken",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "MarketExchangeRateBelowOne",
    inputs: [
      {
        name: "exchangeRate",
        type: "int256",
        internalType: "int256",
      },
    ],
  },
  {
    type: "error",
    name: "MarketExpired",
    inputs: [],
  },
  {
    type: "error",
    name: "MarketProportionMustNotEqualOne",
    inputs: [],
  },
  {
    type: "error",
    name: "MarketRateScalarBelowZero",
    inputs: [
      {
        name: "rateScalar",
        type: "int256",
        internalType: "int256",
      },
    ],
  },
  {
    type: "error",
    name: "MarketZeroTotalPtOrTotalAsset",
    inputs: [
      {
        name: "totalPt",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "totalAsset",
        type: "int256",
        internalType: "int256",
      },
    ],
  },
] as const;
