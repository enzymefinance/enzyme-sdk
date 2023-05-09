// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

interface IPoolTogetherV4PriceFeed {
    event DerivativeAdded(address indexed derivative, address indexed underlying);
    event DerivativeRemoved(address indexed derivative);

    function addDerivatives(address[] memory _derivatives, address[] memory _underlyings) external;
    function calcUnderlyingValues(address _derivative, uint256 _derivativeAmount)
        external
        returns (address[] memory underlyings_, uint256[] memory underlyingAmounts_);
    function getFundDeployer() external view returns (address fundDeployer_);
    function getOwner() external view returns (address owner_);
    function getUnderlyingForDerivative(address _derivative) external view returns (address underlying_);
    function isSupportedAsset(address _asset) external view returns (bool isSupported_);
    function removeDerivatives(address[] memory _derivatives) external;
}
