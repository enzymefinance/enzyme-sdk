export const IStakeWiseV3StakingPositionParser = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_stakeWiseV3VaultsRegistryAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "_wethAddress",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "STAKEWISE_V3_VAULT_REGISTRY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IStakeWiseV3VaultsRegistry",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "WETH_ADDRESS",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "parseAssetsForAction",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "_actionId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_encodedActionArgs",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "assetsToTransfer_",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "amountsToTransfer_",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "assetsToReceive_",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "parseInitArgs",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "initArgs_",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "pure",
  },
] as const;
