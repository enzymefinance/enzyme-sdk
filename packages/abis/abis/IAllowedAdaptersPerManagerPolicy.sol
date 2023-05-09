// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

interface IAllowedAdaptersPerManagerPolicy {
    event ListsSetForFundAndUser(address indexed comptrollerProxy, address indexed user, uint256[] listIds);

    function BYPASS_FLAG() external view returns (uint256);
    function activateForFund(address) external;
    function addFundSettings(address _comptrollerProxy, bytes memory _encodedSettings) external;
    function canDisable() external pure returns (bool canDisable_);
    function getListIdsForFundAndUser(address _comptrollerProxy, address _user)
        external
        view
        returns (uint256[] memory listIds_);
    function getPolicyManager() external view returns (address policyManager_);
    function identifier() external pure returns (string memory identifier_);
    function implementedHooks() external pure returns (uint8[] memory implementedHooks_);
    function passesRule(address _comptrollerProxy, address _caller, address _adapter)
        external
        view
        returns (bool isValid_);
    function updateFundSettings(address _comptrollerProxy, bytes memory _encodedSettings) external;
    function validateRule(address _comptrollerProxy, uint8, bytes memory _encodedArgs)
        external
        returns (bool isValid_);
}
