import { testClientMainnet } from "../globals.js";

export async function increaseTimeAndMine({ seconds, blocks = 1 }: { seconds: bigint; blocks?: number }) {
  if (seconds <= 0) {
    throw new Error("Seconds must be a positive integer");
  }

  if (blocks <= 0) {
    throw new Error("Number of blocks must be a positive integer");
  }

  await testClientMainnet.increaseTime({ seconds: Number(seconds) });
  await testClientMainnet.mine({ blocks });
}
