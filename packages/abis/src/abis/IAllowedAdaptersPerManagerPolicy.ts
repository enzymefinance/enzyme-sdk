export const IAllowedAdaptersPerManagerPolicy = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_policyManager",
        type: "address",
        internalType: "address",
      },
      {
        name: "_addressListRegistry",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "BYPASS_FLAG",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "activateForFund",
    inputs: [
      {
        name: "",
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
        name: "_encodedSettings",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "canDisable",
    inputs: [],
    outputs: [
      {
        name: "canDisable_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "getListIdsForFundAndUser",
    inputs: [
      {
        name: "_comptrollerProxy",
        type: "address",
        internalType: "address",
      },
      {
        name: "_user",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "listIds_",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPolicyManager",
    inputs: [],
    outputs: [
      {
        name: "policyManager_",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "identifier",
    inputs: [],
    outputs: [
      {
        name: "identifier_",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "implementedHooks",
    inputs: [],
    outputs: [
      {
        name: "implementedHooks_",
        type: "uint8[]",
        internalType: "enum IPolicyManager.PolicyHook[]",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "passesRule",
    inputs: [
      {
        name: "_comptrollerProxy",
        type: "address",
        internalType: "address",
      },
      {
        name: "_caller",
        type: "address",
        internalType: "address",
      },
      {
        name: "_adapter",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "isValid_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updateFundSettings",
    inputs: [
      {
        name: "_comptrollerProxy",
        type: "address",
        internalType: "address",
      },
      {
        name: "_encodedSettings",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "validateRule",
    inputs: [
      {
        name: "_comptrollerProxy",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "uint8",
        internalType: "enum IPolicyManager.PolicyHook",
      },
      {
        name: "_encodedArgs",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "isValid_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "ListsSetForFundAndUser",
    inputs: [
      {
        name: "comptrollerProxy",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "listIds",
        type: "uint256[]",
        indexed: false,
        internalType: "uint256[]",
      },
    ],
    anonymous: false,
  },
] as const;
