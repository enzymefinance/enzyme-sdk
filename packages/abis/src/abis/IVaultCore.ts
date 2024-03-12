export const IVaultCore = [
  {
    type: "function",
    name: "getAccessor",
    inputs: [],
    outputs: [
      {
        name: "accessor_",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getCreator",
    inputs: [],
    outputs: [
      {
        name: "creator_",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMigrator",
    inputs: [],
    outputs: [
      {
        name: "migrator_",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getOwner",
    inputs: [],
    outputs: [
      {
        name: "owner_",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
] as const;
