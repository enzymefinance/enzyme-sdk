import { ALICE, BOB, PARASWAP_V5_ADAPTER, INTEGRATION_MANAGER, USDC, WETH } from "../../../../tests/constants.js";
import { sendTestTransaction, testActions } from "../../../../tests/globals.js";
import { Integration } from "../integrationTypes.js";
import { prepareUseIntegration } from "../prepareUseIntegration.js";

import { parseEther } from "viem";
import { test } from "vitest";

test("prepare adapter trade for ParaswapV5 take order should work correctly", async () => {
  const vaultOwner = ALICE;
  const sharesBuyer = BOB;

  const { comptrollerProxy, vaultProxy } = await testActions.createTestVault({
    vaultOwner,
    denominationAsset: WETH,
  });

  const outgoingAssetAmount = parseEther("1");
  const swapData = "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002600000000000000000000000000000000000000000000000000000000000000001000000000000000000000000f9234cb08edb93c0d4a4d4c70cc3ffd070e78e0700000000000000000000000000000000000000000000000000000000000000e491a32b69000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000000000000000000000000000000000000000f42400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001000000000000000000004de4b4e16d0168e52d35cacd2c6185b44281ec28c9dc000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e400000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000";

  await testActions.buyShares({
    comptrollerProxy,
    sharesBuyer,
    investmentAmount: outgoingAssetAmount,
  });

  await sendTestTransaction({
    ...prepareUseIntegration({
      integrationManager: INTEGRATION_MANAGER,
      integrationAdapter: PARASWAP_V5_ADAPTER,
      callArgs: {
        type: Integration.ParaswapV5TakeOrder,
        minIncomingAssetAmount: 582973872841376n,
        expectedIncomingAssetAmount: 588862497819572n,
        outgoingAsset: USDC,
        outgoingAssetAmount: 1000000n,
        uuid: "0x099663e6ed5244079a0f2e393dd8093e",
        swapType: 0n,
        swapData,
      },
    }),
    account: vaultOwner,
    address: comptrollerProxy,
  });

  await testActions.assertBalanceOf({
    token: WETH,
    account: vaultProxy,
    expected: 588862497819572n,
    fuzziness: 588862497819572n - 582973872841376n,
  });
});