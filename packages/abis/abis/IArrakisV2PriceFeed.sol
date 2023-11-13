// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

interface IArrakisV2PriceFeed {
    function calcUnderlyingValues(address _derivative, uint256 _derivativeAmount)
        external
        returns (address[] memory underlyings_, uint256[] memory underlyingAmounts_);
    function isSupportedAsset(address) external pure returns (bool isSupported_);
}
