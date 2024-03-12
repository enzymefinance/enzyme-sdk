export const IFee = [
  {
    type: "function",
    name: "activateForFund",
    inputs: [
      {
        name: "_comptrollerProxy",
        type: "address",
        internalType: "address",
      },
      {
        name: "_vaultProxy",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "addFundSettings",
    inputs: [
      {
        name: "_comptrollerProxy",
        type: "address",
        internalType: "address",
      },
      {
        name: "_settingsData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getRecipientForFund",
    inputs: [
      {
        name: "_comptrollerProxy",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "recipient_",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "payout",
    inputs: [
      {
        name: "_comptrollerProxy",
        type: "address",
        internalType: "address",
      },
      {
        name: "_vaultProxy",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "isPayable_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "settle",
    inputs: [
      {
        name: "_comptrollerProxy",
        type: "address",
        internalType: "address",
      },
      {
        name: "_vaultProxy",
        type: "address",
        internalType: "address",
      },
      {
        name: "_hook",
        type: "uint8",
        internalType: "enum IFeeManager.FeeHook",
      },
      {
        name: "_settlementData",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "_gav",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "settlementType_",
        type: "uint8",
        internalType: "enum IFeeManager.SettlementType",
      },
      {
        name: "payer_",
        type: "address",
        internalType: "address",
      },
      {
        name: "sharesDue_",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "settlesOnHook",
    inputs: [
      {
        name: "_hook",
        type: "uint8",
        internalType: "enum IFeeManager.FeeHook",
      },
    ],
    outputs: [
      {
        name: "settles_",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "usesGav_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "update",
    inputs: [
      {
        name: "_comptrollerProxy",
        type: "address",
        internalType: "address",
      },
      {
        name: "_vaultProxy",
        type: "address",
        internalType: "address",
      },
      {
        name: "_hook",
        type: "uint8",
        internalType: "enum IFeeManager.FeeHook",
      },
      {
        name: "_settlementData",
        type: "bytes",
        internalType: "bytes",
      },
      {
        name: "_gav",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updatesOnHook",
    inputs: [
      {
        name: "_hook",
        type: "uint8",
        internalType: "enum IFeeManager.FeeHook",
      },
    ],
    outputs: [
      {
        name: "updates_",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "usesGav_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
] as const;
