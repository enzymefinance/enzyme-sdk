export const ISolvV2ConvertibleBuyerPositionLib = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_convertibleMarketcontract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_initialConvertibleOfferingMarket",
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
        internalType: "uint24",
        name: "saleId",
        type: "uint24",
      },
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "SaleAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint24",
        name: "saleId",
        type: "uint24",
      },
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "SaleRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voucher",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32",
      },
    ],
    name: "VoucherTokenIdAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voucher",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "tokenId",
        type: "uint32",
      },
    ],
    name: "VoucherTokenIdRemoved",
    type: "event",
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
    stateMutability: "nonpayable",
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getSales",
    outputs: [
      {
        components: [
          {
            internalType: "uint24",
            name: "saleId",
            type: "uint24",
          },
          {
            internalType: "address",
            name: "currency",
            type: "address",
          },
        ],
        internalType: "struct SolvV2ConvertibleBuyerPositionLibBase1.Sale[]",
        name: "sales_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVoucherTokenIds",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "voucher",
            type: "address",
          },
          {
            internalType: "uint32",
            name: "tokenId",
            type: "uint32",
          },
        ],
        internalType: "struct SolvV2ConvertibleBuyerPositionLibBase1.VoucherTokenId[]",
        name: "voucherTokenIds_",
        type: "tuple[]",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onVNFTReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "selector_",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
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
