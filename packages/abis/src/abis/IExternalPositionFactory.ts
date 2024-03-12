export const IExternalPositionFactory = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_dispatcher",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "addNewPositionTypes",
    inputs: [
      {
        name: "_labels",
        type: "string[]",
        internalType: "string[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "addPositionDeployers",
    inputs: [
      {
        name: "_accounts",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "deploy",
    inputs: [
      {
        name: "_vaultProxy",
        type: "address",
        internalType: "address",
      },
      {
        name: "_typeId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_constructLib",
        type: "address",
        internalType: "address",
      },
      {
        name: "_constructData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "externalPositionProxy_",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getDispatcher",
    inputs: [],
    outputs: [
      {
        name: "dispatcher_",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getLabelForPositionType",
    inputs: [
      {
        name: "_typeId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "label_",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPositionTypeCounter",
    inputs: [],
    outputs: [
      {
        name: "positionTypeCounter_",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isExternalPositionProxy",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "isExternalPositionProxy_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isPositionDeployer",
    inputs: [
      {
        name: "_account",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "isPositionDeployer_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "removePositionDeployers",
    inputs: [
      {
        name: "_accounts",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updatePositionTypeLabels",
    inputs: [
      {
        name: "_typeIds",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "_labels",
        type: "string[]",
        internalType: "string[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "PositionDeployed",
    inputs: [
      {
        name: "vaultProxy",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "typeId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "constructLib",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "constructData",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PositionDeployerAdded",
    inputs: [
      {
        name: "positionDeployer",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PositionDeployerRemoved",
    inputs: [
      {
        name: "positionDeployer",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PositionTypeAdded",
    inputs: [
      {
        name: "typeId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "label",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PositionTypeLabelUpdated",
    inputs: [
      {
        name: "typeId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "label",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
] as const;
