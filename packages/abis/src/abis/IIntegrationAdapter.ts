export const IIntegrationAdapter = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vaultProxy",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
      {
        internalType: "bytes",
        name: "_encodedCallArgs",
        type: "bytes",
      },
    ],
    name: "parseAssetsForAction",
    outputs: [
      {
        internalType: "enum IIntegrationManager.SpendAssetsHandleType",
        name: "spendAssetsHandleType_",
        type: "uint8",
      },
      {
        internalType: "address[]",
        name: "spendAssets_",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "spendAssetAmounts_",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "incomingAssets_",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "minIncomingAssetAmounts_",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
