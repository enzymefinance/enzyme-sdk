export const IUintListRegistry = [
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
    name: "addToList",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_items",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "areAllInAllLists",
    inputs: [
      {
        name: "_ids",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "_items",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [
      {
        name: "areAllInAllLists_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "areAllInList",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_items",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [
      {
        name: "areAllInList_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "areAllInSomeOfLists",
    inputs: [
      {
        name: "_ids",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "_items",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [
      {
        name: "areAllInSomeOfLists_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "areAllNotInAnyOfLists",
    inputs: [
      {
        name: "_ids",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "_items",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [
      {
        name: "areAllNotInAnyOfLists_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "areAllNotInList",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_items",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [
      {
        name: "areAllNotInList_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "attestLists",
    inputs: [
      {
        name: "_ids",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "_descriptions",
        type: "string[]",
        internalType: "string[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createList",
    inputs: [
      {
        name: "_owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "_updateType",
        type: "uint8",
        internalType: "enum IUintListRegistry.UpdateType",
      },
      {
        name: "_initialItems",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [
      {
        name: "id_",
        type: "uint256",
        internalType: "uint256",
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
    name: "getListCount",
    inputs: [],
    outputs: [
      {
        name: "count_",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getListOwner",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "owner_",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getListUpdateType",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "updateType_",
        type: "uint8",
        internalType: "enum IUintListRegistry.UpdateType",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isInAllLists",
    inputs: [
      {
        name: "_ids",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "_item",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "isInAllLists_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isInList",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_item",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "isInList_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isInSomeOfLists",
    inputs: [
      {
        name: "_ids",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "_item",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "isInSomeOfLists_",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "removeFromList",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_items",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setListOwner",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_nextOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setListUpdateType",
    inputs: [
      {
        name: "_id",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_nextUpdateType",
        type: "uint8",
        internalType: "enum IUintListRegistry.UpdateType",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "ItemAddedToList",
    inputs: [
      {
        name: "id",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "item",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ItemRemovedFromList",
    inputs: [
      {
        name: "id",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "item",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ListAttested",
    inputs: [
      {
        name: "id",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "description",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ListCreated",
    inputs: [
      {
        name: "creator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "id",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "updateType",
        type: "uint8",
        indexed: false,
        internalType: "enum IUintListRegistry.UpdateType",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ListOwnerSet",
    inputs: [
      {
        name: "id",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "nextOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ListUpdateTypeSet",
    inputs: [
      {
        name: "id",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "prevUpdateType",
        type: "uint8",
        indexed: false,
        internalType: "enum IUintListRegistry.UpdateType",
      },
      {
        name: "nextUpdateType",
        type: "uint8",
        indexed: true,
        internalType: "enum IUintListRegistry.UpdateType",
      },
    ],
    anonymous: false,
  },
] as const;
