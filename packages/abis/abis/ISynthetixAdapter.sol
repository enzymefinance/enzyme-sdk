// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

interface ISynthetixAdapter {
    function CLAIM_REWARDS_SELECTOR() external view returns (bytes4);
    function LEND_AND_STAKE_SELECTOR() external view returns (bytes4);
    function LEND_SELECTOR() external view returns (bytes4);
    function REDEEM_SELECTOR() external view returns (bytes4);
    function STAKE_SELECTOR() external view returns (bytes4);
    function TAKE_MULTIPLE_ORDERS_SELECTOR() external view returns (bytes4);
    function TAKE_ORDER_SELECTOR() external view returns (bytes4);
    function UNSTAKE_AND_REDEEM_SELECTOR() external view returns (bytes4);
    function UNSTAKE_SELECTOR() external view returns (bytes4);
    function getIntegrationManager() external view returns (address integrationManager_);
    function getSynthetix() external view returns (address synthetix_);
    function getSynthetixOriginator() external view returns (address synthetixOriginator_);
    function getSynthetixRedeemer() external view returns (address synthetixRedeemer_);
    function getSynthetixTrackingCode() external view returns (bytes32 synthetixTrackingCode_);
    function parseAssetsForAction(address _vaultProxy, bytes4 _selector, bytes memory _actionData)
        external
        view
        returns (
            uint8 spendAssetsHandleType_,
            address[] memory spendAssets_,
            uint256[] memory spendAssetAmounts_,
            address[] memory incomingAssets_,
            uint256[] memory minIncomingAssetAmounts_
        );
    function redeem(address _vaultProxy, bytes memory _actionData, bytes memory _assetData) external;
    function takeOrder(address _vaultProxy, bytes memory _actionData, bytes memory) external;
}
