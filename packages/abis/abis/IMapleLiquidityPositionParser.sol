// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

interface IMapleLiquidityPositionParser {
    function parseAssetsForAction(address, uint256 _actionId, bytes memory _encodedActionArgs)
        external
        returns (
            address[] memory assetsToTransfer_,
            uint256[] memory amountsToTransfer_,
            address[] memory assetsToReceive_
        );
    function parseInitArgs(address, bytes memory) external returns (bytes memory initArgs_);
}
