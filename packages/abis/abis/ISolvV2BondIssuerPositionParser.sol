// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

interface ISolvV2BondIssuerPositionParser {
    function parseAssetsForAction(address _externalPosition, uint256 _actionId, bytes memory _encodedActionArgs)
        external
        returns (
            address[] memory assetsToTransfer_,
            uint256[] memory amountsToTransfer_,
            address[] memory assetsToReceive_
        );
    function parseInitArgs(address, bytes memory) external returns (bytes memory);
}
