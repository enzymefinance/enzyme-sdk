// SPDX-License-Identifier: Unlicense
pragma solidity >=0.6.0 <0.9.0;

interface IExternalPositionProxy {
    function getExternalPositionType() external view returns (uint256 externalPositionType_);
    function getVaultProxy() external view returns (address vaultProxy_);
    function receiveCallFromVault(bytes memory _data) external;
}
