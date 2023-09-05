export const INoDepegOnRedeemSharesForSpecificAssetsPolicy = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_policyManagerAddress",
        type: "address",
      },
      {
        internalType: "contract IValueInterpreter",
        name: "_valueInterpreter",
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
        name: "comptrollerProxy",
        type: "address",
      },
      {
        components: [
          {
            internalType: "contract ERC20",
            name: "asset",
            type: "address",
          },
          {
            internalType: "contract ERC20",
            name: "referenceAsset",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "deviationToleranceInBps",
            type: "uint16",
          },
        ],
        indexed: false,
        internalType: "struct NoDepegPolicyBase.AssetConfig[]",
        name: "assetConfigs",
        type: "tuple[]",
      },
    ],
    name: "FundSettingsUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
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
        name: "_encodedSettings",
        type: "bytes",
      },
    ],
    name: "addFundSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "canDisable",
    outputs: [
      {
        internalType: "bool",
        name: "canDisable_",
        type: "bool",
      },
    ],
    stateMutability: "pure",
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
    name: "getAssetConfigsForFund",
    outputs: [
      {
        components: [
          {
            internalType: "contract ERC20",
            name: "asset",
            type: "address",
          },
          {
            internalType: "contract ERC20",
            name: "referenceAsset",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "deviationToleranceInBps",
            type: "uint16",
          },
        ],
        internalType: "struct NoDepegPolicyBase.AssetConfig[]",
        name: "assetConfigs_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPolicyManager",
    outputs: [
      {
        internalType: "address",
        name: "policyManager_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "identifier",
    outputs: [
      {
        internalType: "string",
        name: "identifier_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "implementedHooks",
    outputs: [
      {
        internalType: "enum IPolicyManager.PolicyHook[]",
        name: "implementedHooks_",
        type: "uint8[]",
      },
    ],
    stateMutability: "pure",
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
        name: "_encodedSettings",
        type: "bytes",
      },
    ],
    name: "updateFundSettings",
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
        internalType: "enum IPolicyManager.PolicyHook",
        name: "",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "validateRule",
    outputs: [
      {
        internalType: "bool",
        name: "isValid_",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
