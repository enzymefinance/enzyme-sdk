import type { Prettify } from "../../utils/types.js";
import { ExternalPositionManagerActionId, prepareCallOnExtensionParams } from "../callOnExtension.js";
import { ExternalPosition, type ExternalPositionArgs } from "./externalPositionTypes.js";
import {
  encodeAaveV2DebtAddCollateralArgs,
  encodeAaveV2DebtBorrowArgs,
  encodeAaveV2DebtRemoveCollateralArgs,
  encodeAaveV2DebtRepayBorrowArgs,
} from "./instances/aaveV2Debt.js";
import {
  encodeCompoundV2DebtAddCollateralArgs,
  encodeCompoundV2DebtBorrowArgs,
  encodeCompoundV2DebtClaimCompArgs,
  encodeCompoundV2DebtRemoveCollateralArgs,
  encodeCompoundV2DebtRepayBorrowArgs,
} from "./instances/compoundV2Debt.js";
import {
  encodeConvexVotingClaimRewardsArgs,
  encodeConvexVotingDelegateArgs,
  encodeConvexVotingLockArgs,
  encodeConvexVotingRelockArgs,
  encodeConvexVotingWithdrawArgs,
} from "./instances/convexVoting.js";
import { encodeKilnStakeArgs } from "./instances/kiln.js";
import type { Address } from "viem";

export type TypedExternalPositionCallArgs = {
  [TKey in keyof ExternalPositionArgs]: Prettify<{ type: TKey } & ExternalPositionArgs[TKey]>;
}[keyof ExternalPositionArgs];

export type PrepareUseExternalPositionParams = {
  /**
   * The address of the `externalPositionManager` contract.
   */
  externalPositionManager: Address;
  /**
   * The trade to prepare.
   */
  callArgs: TypedExternalPositionCallArgs;
};

export function prepareUseExternalPosition({ callArgs, externalPositionManager }: PrepareUseExternalPositionParams) {
  return prepareCallOnExtensionParams({
    extension: externalPositionManager,
    actionId: ExternalPositionManagerActionId.CallOnExternalPosition,
    callArgs: encodeExternalPositionCallArgs(callArgs),
  });
}

export function encodeExternalPositionCallArgs(callArgs: TypedExternalPositionCallArgs) {
  switch (callArgs.type) {
    case ExternalPosition.KilnStake:
      return encodeKilnStakeArgs(callArgs);
    case ExternalPosition.AaveV2DebtAddCollateral:
      return encodeAaveV2DebtAddCollateralArgs(callArgs);
    case ExternalPosition.AaveV2DebtRemoveCollateral:
      return encodeAaveV2DebtRemoveCollateralArgs(callArgs);
    case ExternalPosition.AaveV2DebtBorrow:
      return encodeAaveV2DebtBorrowArgs(callArgs);
    case ExternalPosition.AaveV2DebtRepayBorrow:
      return encodeAaveV2DebtRepayBorrowArgs(callArgs);
    case ExternalPosition.CompoundV2DebtAddCollateral:
      return encodeCompoundV2DebtAddCollateralArgs(callArgs);
    case ExternalPosition.CompoundV2DebtClaimComp:
      return encodeCompoundV2DebtClaimCompArgs(callArgs);
    case ExternalPosition.CompoundV2DebtRemoveCollateral:
      return encodeCompoundV2DebtRemoveCollateralArgs(callArgs);
    case ExternalPosition.CompoundV2DebtBorrow:
      return encodeCompoundV2DebtBorrowArgs(callArgs);
    case ExternalPosition.CompoundV2DebtRepayBorrow:
      return encodeCompoundV2DebtRepayBorrowArgs(callArgs);
    case ExternalPosition.ConvexVotingLock:
      return encodeConvexVotingLockArgs(callArgs);
    case ExternalPosition.ConvexVotingRelock:
      return encodeConvexVotingRelockArgs(callArgs);
    case ExternalPosition.ConvexVotingWithdraw:
      return encodeConvexVotingWithdrawArgs(callArgs);
    case ExternalPosition.ConvexVotingClaimRewards:
      return encodeConvexVotingClaimRewardsArgs(callArgs);
    case ExternalPosition.ConvexVotingDelegate:
      return encodeConvexVotingDelegateArgs(callArgs);
  }
}
