export const IStakeWiseV3StakingPositionLib = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_wethToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_referrer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "stakeWiseVaultAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "positionTicket",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sharesAmount",
        type: "uint256",
      },
    ],
    name: "ExitRequestAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "stakeWiseVaultAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "positionTicket",
        type: "uint256",
      },
    ],
    name: "ExitRequestRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "stakeWiseVaultAddress",
        type: "address",
      },
    ],
    name: "VaultTokenAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "stakeWiseVaultAddress",
        type: "address",
      },
    ],
    name: "VaultTokenRemoved",
    type: "event",
  },
  {
    inputs: [],
    name: "WETH_TOKEN",
    outputs: [
      {
        internalType: "contract IWETH",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDebtAssets",
    outputs: [
      {
        internalType: "address[]",
        name: "assets_",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts_",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getExitRequests",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "stakeWiseVaultAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "positionTicket",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sharesAmount",
            type: "uint256",
          },
        ],
        internalType: "struct StakeWiseV3StakingPositionLibBase1.ExitRequest[]",
        name: "exitRequests_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getManagedAssets",
    outputs: [
      {
        internalType: "address[]",
        name: "assets_",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts_",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStakeWiseVaultTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "stakeWiseVaultTokens_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_actionData",
        type: "bytes",
      },
    ],
    name: "receiveCallFromVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
