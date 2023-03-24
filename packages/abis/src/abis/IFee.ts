export const IFee = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_comptrollerProxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vaultProxy",
        type: "address",
      },
    ],
    name: "activateForFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_comptrollerProxy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_settingsData",
        type: "bytes",
      },
    ],
    name: "addFundSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_comptrollerProxy",
        type: "address",
      },
    ],
    name: "getRecipientForFund",
    outputs: [
      {
        internalType: "address",
        name: "recipient_",
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
        name: "_comptrollerProxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vaultProxy",
        type: "address",
      },
    ],
    name: "payout",
    outputs: [
      {
        internalType: "bool",
        name: "isPayable_",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_comptrollerProxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vaultProxy",
        type: "address",
      },
      {
        internalType: "enum IFeeManager.FeeHook",
        name: "_hook",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "_settlementData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_gav",
        type: "uint256",
      },
    ],
    name: "settle",
    outputs: [
      {
        internalType: "enum IFeeManager.SettlementType",
        name: "settlementType_",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "payer_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "sharesDue_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IFeeManager.FeeHook",
        name: "_hook",
        type: "uint8",
      },
    ],
    name: "settlesOnHook",
    outputs: [
      {
        internalType: "bool",
        name: "settles_",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "usesGav_",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_comptrollerProxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vaultProxy",
        type: "address",
      },
      {
        internalType: "enum IFeeManager.FeeHook",
        name: "_hook",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "_settlementData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_gav",
        type: "uint256",
      },
    ],
    name: "update",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IFeeManager.FeeHook",
        name: "_hook",
        type: "uint8",
      },
    ],
    name: "updatesOnHook",
    outputs: [
      {
        internalType: "bool",
        name: "updates_",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "usesGav_",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
