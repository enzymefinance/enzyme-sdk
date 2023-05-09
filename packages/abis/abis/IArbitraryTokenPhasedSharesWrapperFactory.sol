// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

interface IArbitraryTokenPhasedSharesWrapperFactory {
    event ProxyDeployed(address indexed caller, address proxy);

    function deploy(
        address _vaultProxy,
        address _depositToken,
        uint128 _allowedDepositorListId,
        bool _transfersAllowed,
        uint128 _totalDepositMax,
        address _feeRecipient,
        uint16 _feeBps,
        bool _feeExcludesDepositTokenPrincipal,
        address _manager
    ) external returns (address wrapperProxy_);
}
