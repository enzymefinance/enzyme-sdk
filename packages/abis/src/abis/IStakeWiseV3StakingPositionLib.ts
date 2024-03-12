export const IStakeWiseV3StakingPositionLib = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_wethToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "_referrer",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "WETH_TOKEN",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IWETH",
      },
    ],
    stateMutability: "view",
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
    name: "getExitRequests",
    inputs: [],
    outputs: [
      {
        name: "exitRequests_",
        type: "tuple[]",
        internalType: "struct StakeWiseV3StakingPositionLibBase1.ExitRequest[]",
        components: [
          {
            name: "stakeWiseVaultAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "positionTicket",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "sharesAmount",
            type: "uint256",
            internalType: "uint256",
          },
        ],
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
    name: "getStakeWiseVaultTokens",
    inputs: [],
    outputs: [
      {
        name: "stakeWiseVaultTokens_",
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
    name: "ExitRequestAdded",
    inputs: [
      {
        name: "stakeWiseVaultAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "positionTicket",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "sharesAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ExitRequestRemoved",
    inputs: [
      {
        name: "stakeWiseVaultAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "positionTicket",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "VaultTokenAdded",
    inputs: [
      {
        name: "stakeWiseVaultAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "VaultTokenRemoved",
    inputs: [
      {
        name: "stakeWiseVaultAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
] as const;
