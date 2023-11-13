export const IDepositWrapper = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_addressListRegistryAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_allowedExchangesListId",
        type: "uint256",
      },
      {
        internalType: "contract IWETH",
        name: "_wrappedNativeAsset",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "contract IComptroller",
        name: "_comptrollerProxy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minSharesQuantity",
        type: "uint256",
      },
      {
        internalType: "contract ERC20",
        name: "_inputAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxInputAssetAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_exchange",
        type: "address",
      },
      {
        internalType: "address",
        name: "_exchangeApproveTarget",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_exchangeData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_exchangeMinReceived",
        type: "uint256",
      },
    ],
    name: "exchangeErc20AndBuyShares",
    outputs: [
      {
        internalType: "uint256",
        name: "sharesReceived_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IComptroller",
        name: "_comptrollerProxy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minSharesQuantity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_exchange",
        type: "address",
      },
      {
        internalType: "address",
        name: "_exchangeApproveTarget",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_exchangeData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_exchangeMinReceived",
        type: "uint256",
      },
    ],
    name: "exchangeEthAndBuyShares",
    outputs: [
      {
        internalType: "uint256",
        name: "sharesReceived_",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;
