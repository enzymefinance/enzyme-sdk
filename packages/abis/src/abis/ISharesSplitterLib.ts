export const ISharesSplitterLib = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_globalConfigProxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_initializer",
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "percentage",
        type: "uint256",
      },
    ],
    name: "SplitPercentageSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenClaimed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "claimToken",
    outputs: [
      {
        internalType: "uint256",
        name: "claimedAmount_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "claimTokenAmountTo",
    outputs: [
      {
        internalType: "uint256",
        name: "claimedAmount_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getSplitPercentageForUser",
    outputs: [
      {
        internalType: "uint256",
        name: "splitPercentage_",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "getTokenBalClaimableForUser",
    outputs: [
      {
        internalType: "uint256",
        name: "balClaimable_",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "getTokenBalClaimedForUser",
    outputs: [
      {
        internalType: "uint256",
        name: "balClaimed_",
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
        name: "_token",
        type: "address",
      },
    ],
    name: "getTotalTokenBalClaimed",
    outputs: [
      {
        internalType: "uint256",
        name: "totalBalClaimed_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_users",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_splitPercentages",
        type: "uint256[]",
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
        internalType: "address",
        name: "_vaultProxy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_redeemContract",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_redeemSelector",
        type: "bytes4",
      },
      {
        internalType: "bytes",
        name: "_redeemData",
        type: "bytes",
      },
    ],
    name: "redeemShares",
    outputs: [
      {
        internalType: "uint256",
        name: "sharesRedeemed_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
