export const IChainlinkPriceFeedMixin = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_wethToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_staleRateThreshold",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "prevEthUsdAggregator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nextEthUsdAggregator",
        type: "address",
      },
    ],
    name: "EthUsdAggregatorSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "primitive",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "aggregator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum ChainlinkPriceFeedMixin.RateAsset",
        name: "rateAsset",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unit",
        type: "uint256",
      },
    ],
    name: "PrimitiveAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "primitive",
        type: "address",
      },
    ],
    name: "PrimitiveRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_primitive",
        type: "address",
      },
    ],
    name: "getAggregatorForPrimitive",
    outputs: [
      {
        internalType: "address",
        name: "aggregator_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEthUsdAggregator",
    outputs: [
      {
        internalType: "address",
        name: "ethUsdAggregator_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_primitive",
        type: "address",
      },
    ],
    name: "getRateAssetForPrimitive",
    outputs: [
      {
        internalType: "enum ChainlinkPriceFeedMixin.RateAsset",
        name: "rateAsset_",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStaleRateThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "staleRateThreshold_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_primitive",
        type: "address",
      },
    ],
    name: "getUnitForPrimitive",
    outputs: [
      {
        internalType: "uint256",
        name: "unit_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWethToken",
    outputs: [
      {
        internalType: "address",
        name: "wethToken_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
