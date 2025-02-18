import assets from "../assets/base.js";
import { Version } from "../contracts.js";
import { Network } from "../networks.js";
import { Deployment, Kind, Status, defineDeployment } from "../releases.js";

export default defineDeployment<Deployment.BASE>({
  address: "0xd79fcd6eb56115f9757ec4c90fc2c5d143f83c16",
  assets,
  externalContracts: {
    aaveUIIncentiveDataProvider: "0x91e04cf78e53aebe609e8a7f2003e7eecd743f2b",
    aaveV2IncentivesController: "0x0000000000000000000000000000000000000000",
    aaveV2LendingPoolProvider: "0x0000000000000000000000000000000000000000",
    aaveV3RewardsController: "0xf9cc4f0d883f1a1eb2c253bdb46c254ca51e1f44",
    aaveV3LendingPoolProvider: "0xe20fcbdbffc4dd138ce8b2e6fbb6cb49777ad64d",
    aaveV3ProtocolDataProvider: "0xd82a47fdebb5bf5329b09441c3dab4b5df2153ad",
    aliceOrderManager: "0x0000000000000000000000000000000000000000",
    arrakisV2Helper: "0x0000000000000000000000000000000000000000",
    arrakisV2Resolver: "0x0000000000000000000000000000000000000000",
    balancerMinter: "0x0000000000000000000000000000000000000000",
    balancerProtocolFeesCollector: "0x0000000000000000000000000000000000000000",
    balancerGaugeController: "0x0000000000000000000000000000000000000000",
    balancerHelpers: "0x0000000000000000000000000000000000000000",
    balancerVault: "0x0000000000000000000000000000000000000000",
    chainlinkFeedsRegistry: "0x0000000000000000000000000000000000000000",
    compoundComptroller: "0x0000000000000000000000000000000000000000",
    compoundV3Rewards: "0x0000000000000000000000000000000000000000",
    curveChildLiquidityGaugeFactory: "0x0000000000000000000000000000000000000000",
    curveMinter: "0x0000000000000000000000000000000000000000",
    curveRegistry: "0x0000000000000000000000000000000000000000",
    cvxCrvStaking: "0x0000000000000000000000000000000000000000",
    gmxV2ExchangeRouter: "0x0000000000000000000000000000000000000000",
    gmxV2ChainlinkPriceFeed: "0x0000000000000000000000000000000000000000",
    gmxV2DataStore: "0x0000000000000000000000000000000000000000",
    gmxV2Reader: "0x0000000000000000000000000000000000000000",
    gmxV2ReferralStorage: "0x0000000000000000000000000000000000000000",
    kilnStaking: "0x0000000000000000000000000000000000000000",
    lidoWithdrawalsQueue: "0x0000000000000000000000000000000000000000",
    liquityHintHelpers: "0x0000000000000000000000000000000000000000",
    liquitySortedTroves: "0x0000000000000000000000000000000000000000",
    liquityTroveManager: "0x0000000000000000000000000000000000000000",
    liquityCollSurplusPool: "0x0000000000000000000000000000000000000000",
    morphoBlue: "0xbbbbbbbbbb9cc5e90e3b3af64bdaf62c37eeffcb",
    paraswapV5AugustusSwapper: "0x59c7c832e96d2568bea6db468c1aadcbbda08a52",
    paraswapV5TokenTransferProxy: "0x93aaae79a53759cd164340e4c8766e4db5331cd7",
    pendlePtLpOracle: "0x0000000000000000000000000000000000000000",
    stakeWiseV3KeeperRewards: "0x0000000000000000000000000000000000000000",
    staderUserWithdrawManager: "0x0000000000000000000000000000000000000000",
    uniswapV3NonFungiblePositionManager: "0x0000000000000000000000000000000000000000",
    voteLockedConvexToken: "0x0000000000000000000000000000000000000000",
    votiumVoteProxy: "0x0000000000000000000000000000000000000000",
    zeroExExchangeProxy: "0x0000000000000000000000000000000000000000",
    theGraphEpochManagerProxy: "0x0000000000000000000000000000000000000000",
    theGraphDelegationStakingProxy: "0x0000000000000000000000000000000000000000",
    multicall: "0xca11bde05977b3631167028862be2a173976ca11",
    makerMCDPotAddress: "0x0000000000000000000000000000000000000000",
    zeroExV4Exchange: "0x0000000000000000000000000000000000000000",
    staderStakingPoolManager: "0x0000000000000000000000000000000000000000",
    zeroLendAaveV3UIIncentiveDataProvider: "0x0000000000000000000000000000000000000000",
    zeroLendLRTBTCAaveV3LendingPoolProvider: "0x0000000000000000000000000000000000000000",
    zeroLendLRTBTCAaveV3ProtocolDataProvider: "0x0000000000000000000000000000000000000000",
    zeroLendLRTBTCAaveV3RewardsController: "0x0000000000000000000000000000000000000000",
    zeroLendRWAStablecoinsAaveV3LendingPoolProvider: "0x0000000000000000000000000000000000000000",
    zeroLendRWAStablecoinsAaveV3ProtocolDataProvider: "0x0000000000000000000000000000000000000000",
    zeroLendRWAStablecoinsAaveV3RewardsController: "0x0000000000000000000000000000000000000000",
  },
  inception: 23178855,
  kind: Kind.TEST,
  knownAddressLists: {
    noSlippageAdapters: 1n,
    adapters: 2n,
    fees: 3n,
    policies: 4n,
    nonStandardPriceFeedAssets: 999n,
    aTokens: 9n,
  },
  knownUintLists: {},
  label: "Base",
  namedTokens: {
    comp: "0x9e1028f5f1d5ede59748ffcee5532509976840e0",
    dai: "0x50c5725949a6f0c72e6c4a641f24049a917db0cb",
    mln: "0x7c298664bd6582f6f264c2cb5a4b9cc09b6e3889",
    usdt: "0xfde4c96c8593536e31f229ea8f37b2ada2699bb2",
    weth: "0x4200000000000000000000000000000000000006",
  },
  network: Network.BASE,
  releases: {
    [Version.SULU]: {
      address: "0xbb274df654f71827cca120e0b916aec1f2ceaaeb",
      contracts: {
        AaveDebtPositionLib: "0x0000000000000000000000000000000000000000",
        AaveDebtPositionParser: "0x0000000000000000000000000000000000000000",
        AavePriceFeed: "0x0000000000000000000000000000000000000000",
        AaveV2Adapter: "0x0000000000000000000000000000000000000000",
        AaveV2ATokenListOwner: "0x0000000000000000000000000000000000000000",
        AaveV3Adapter: "0xc16db2e93492e3ea512edc90787538652ec5c099",
        AaveV3ATokenListOwner: "0xceb47861043a70f8520d761e2ccf42edcc941512",
        AaveV3DebtPositionLib: "0x5c6adf32e432e4eac7e70dd99f8d358c8dc3b762",
        AaveV3DebtPositionParser: "0x55b3236b72583abf94e9f7e83204965e243b7f07",
        AaveV3FlashLoanAssetManagerFactory: "0x0000000000000000000000000000000000000000",
        AaveV3FlashLoanAssetManagerLib: "0x0000000000000000000000000000000000000000",
        AddressListRegistry: "0x42232ff4f38639ed942e0c76723e76e1a0588899",
        AlicePositionLib: "0x0000000000000000000000000000000000000000",
        AlicePositionParser: "0x0000000000000000000000000000000000000000",
        AllowedAdapterIncomingAssetsPolicy: "0x65d2058e86a169e8df2e052ce37c856dc47e6bdf",
        AllowedAdaptersPerManagerPolicy: "0x6d3505a9fece30cc15514cedc7ae664ab39b2035",
        AllowedAdaptersPolicy: "0x3d627701ce55894509c59e5cb3e3cc337f3715aa",
        AllowedAssetsForRedemptionPolicy: "0x0637460015fdb07bc7e4cf58dc52f8159272c7e0",
        AllowedDepositRecipientsPolicy: "0x3ef57e315b0d92e158fa95ca3002ace28c5b8c0a",
        AllowedExternalPositionTypesPerManagerPolicy: "0x31af0ed80bc630522035c114972c3bec574cee60",
        AllowedExternalPositionTypesPolicy: "0xa6ce7302e02ae60a496ca9fe9d051c6a627ddc48",
        AllowedRedeemersForSpecificAssetsPolicy: "0xe7bf2797190fe8c8cf1618bcc348a2ece2bacef4",
        AllowedSharesTransferRecipientsPolicy: "0xd5a58dce0278d58c23a2682763073472a8e85d57",
        ArbitraryLoanPositionLib: "0x0000000000000000000000000000000000000000",
        ArbitraryLoanPositionParser: "0x0000000000000000000000000000000000000000",
        ArbitraryLoanTotalNominalDeltaOracleModule: "0x0000000000000000000000000000000000000000",
        ArrakisV2Adapter: "0x0000000000000000000000000000000000000000",
        ArrakisV2PriceFeed: "0x0000000000000000000000000000000000000000",
        AssetValueCalculator: "0x1d23c7f7517d8e5473471441fbcc99d223a8065a",
        BalancerV2GaugeTokenPriceFeed: "0x0000000000000000000000000000000000000000",
        BalancerV2LiquidityAdapter: "0x0000000000000000000000000000000000000000",
        BalancerV2StablePoolPriceFeed: "0x0000000000000000000000000000000000000000",
        BalancerV2WeightedPoolPriceFeed: "0x0000000000000000000000000000000000000000",
        ChainlinkLikeWstethPriceFeed: "0x0000000000000000000000000000000000000000",
        ChainlinkLikeYnEthPriceFeed: "0x0000000000000000000000000000000000000000",
        CompoundAdapter: "0x0000000000000000000000000000000000000000",
        CompoundDebtPositionLib: "0x0000000000000000000000000000000000000000",
        CompoundDebtPositionParser: "0x0000000000000000000000000000000000000000",
        CompoundPriceFeed: "0x0000000000000000000000000000000000000000",
        CompoundV3TokenListOwner: "0x0000000000000000000000000000000000000000",
        CompoundV3Adapter: "0x0000000000000000000000000000000000000000",
        ComptrollerLib: "0x67132b2d9b31ffcab67c9216f3fa937b259673b8",
        ConvertedQuoteAggregatorFactory: "0xe14a2297328c4bd3e30c365653bb4fdb3514ebac",
        ConvexVotingPositionLib: "0x0000000000000000000000000000000000000000",
        ConvexVotingPositionParser: "0x0000000000000000000000000000000000000000",
        CumulativeSlippageTolerancePolicy: "0xf34cd6612dbfaf771cb961934855870afa384422",
        CurveExchangeAdapter: "0x0000000000000000000000000000000000000000",
        CurveLiquidityAaveAdapter: "0x0000000000000000000000000000000000000000",
        CurveLiquidityAdapter: "0x0000000000000000000000000000000000000000",
        CurveLiquiditySethAdapter: "0x0000000000000000000000000000000000000000",
        CurveLiquidityStethAdapter: "0x0000000000000000000000000000000000000000",
        CurvePriceFeed: "0x0000000000000000000000000000000000000000",
        DepositWrapper: "0x5b69553fbea09a4e7585b02221b9884f5bd2af40",
        DisallowedAdapterIncomingAssetsPolicy: "0xf9ae950b4bb08cb0b239cb3c0c47753ef7df1302",
        Dispatcher: "0xd79fcd6eb56115f9757ec4c90fc2c5d143f83c16",
        EntranceRateBurnFee: "0xe34a4944a916330f54fd06508b674219c00725e2",
        EntranceRateDirectFee: "0xd5e0144464ec160ed2b4ce27f734a975bad2d938",
        ERC4626Adapter: "0x7b6ad882fa39d45667df997c19afb4e1b225606f",
        ERC4626PriceFeed: "0x6889790fb10a03bbf9dc86f1bed3219b509f5367",
        EtherFiEthPriceFeed: "0x0000000000000000000000000000000000000000",
        ExitRateBurnFee: "0x798b093d7a37418d3f68f9f22264508462be450f",
        ExitRateDirectFee: "0x6060295a989bf8d1e74dc75273b3ab2a02b0c0e1",
        ExternalPositionFactory: "0x097c44da5e720641a60c2c438c0c921d28968a00",
        ExternalPositionManager: "0xe7e6db86b10e2cf1f409eb635998de81c841330f",
        FeeManager: "0xa9928195a36ef1c238b1b8b5912b9fbce7554f73",
        FiduPriceFeed: "0x0000000000000000000000000000000000000000",
        FundDataProviderRouter: "0x09136b698fb165c99a4ea5f216cb56ad3a54e69a",
        FundDeployer: "0xbb274df654f71827cca120e0b916aec1f2ceaaeb",
        FundValueCalculator: "0xb6257a6c3aef640a7d09e3dd009a29308d2a321a",
        FundValueCalculatorRouter: "0xb17403bcbccc3b74fa7491e38913dd36f1b9f402",
        GasRelayPaymasterFactory: "0xc6780e244fd22f21f019fec4b802019d17bd558d",
        GasRelayPaymasterLib: "0xafcfa6e8689a7a5469c6bda351c507cd0108423a",
        GatedRedemptionQueueSharesWrapperFactory: "0x0000000000000000000000000000000000000000",
        GatedRedemptionQueueSharesWrapperLib: "0x0000000000000000000000000000000000000000",
        GenericAdapter: "0x0000000000000000000000000000000000000000",
        GlobalConfigLib: "0x66b3962f669c0700f92c5e0692b8600f911d9ace",
        GlobalConfigProxy: "0x65b8f1f82ce8a6b72db0937c522a52af5693d4d3",
        GMXV2LeverageTradingPositionLib: "0x0000000000000000000000000000000000000000",
        GMXV2LeverageTradingPositionParser: "0x0000000000000000000000000000000000000000",
        IntegrationManager: "0x5d8703b4a08fd3f698bafd5389fa25463fb383dd",
        KilnStakingPositionLib: "0x0000000000000000000000000000000000000000",
        KilnStakingPositionParser: "0x0000000000000000000000000000000000000000",
        LidoWithdrawalsPositionLib: "0x0000000000000000000000000000000000000000",
        LidoWithdrawalsPositionParser: "0x0000000000000000000000000000000000000000",
        LiquityDebtPositionLib: "0x0000000000000000000000000000000000000000",
        LiquityDebtPositionParser: "0x0000000000000000000000000000000000000000",
        ManagementFee: "0xbc3c160287e0ea7ce4c1a0312cc02b94e4e03bff",
        ManualValueOracleFactory: "0x0000000000000000000000000000000000000000",
        MapleLiquidityPositionLib: "0x0000000000000000000000000000000000000000",
        MapleLiquidityPositionParser: "0x0000000000000000000000000000000000000000",
        MinAssetBalancesPostRedemptionPolicy: "0x0af17b9abe72d68ca78aa9ea1efc2def0ed1dd8a",
        MinMaxInvestmentPolicy: "0xe16990bcfc59ec6cc00fa1e20707871ae22fd6f7",
        MinSharesSupplyFee: "0xa32d9085c8c56515a1a03648b5c417badbe7732d",
        MorphoBluePositionLib: "0x38953a28a729a60ad2c18ddab964193678292695",
        MorphoBluePositionParser: "0x33691ac33507c8a9ac94ac8f879a6416b04cb53b",
        NoDepegOnRedeemSharesForSpecificAssetsPolicy: "0x33d9d62a9155e96202378b80078bf73d4f1317a9",
        NotionalV2PositionLib: "0x0000000000000000000000000000000000000000",
        NotionalV2PositionParser: "0x0000000000000000000000000000000000000000",
        OneInchV5Adapter: "0xea8f3990fc7357e1835cbe75dcf04d20391a06f9",
        OnlyRemoveDustExternalPositionPolicy: "0x3e96363dedc1b5b2dc628399466f7d194cb97706",
        OnlyUntrackDustOrPricelessAssetsPolicy: "0x7f0e594275ccb17c26a61b35e2d5bd88772fc8a0",
        ParaSwapV5Adapter: "0xee144a9aff584ce709b2d72cbcea4053c0c1717d",
        PeggedDerivativesPriceFeed: "0x0000000000000000000000000000000000000000",
        PerformanceFee: "0x072d99cf2a75aadf605b9970ccba0352e7c4947c",
        PendleV2Adapter: "0x0000000000000000000000000000000000000000",
        PendleV2PositionLib: "0x0000000000000000000000000000000000000000",
        PendleV2PositionParser: "0x0000000000000000000000000000000000000000",
        PendleMarketsRegistry: "0x0000000000000000000000000000000000000000",
        PolicyManager: "0x7d1a8314c6a56a8312053bfd5a3b9e4c768e8d24",
        PoolTogetherV4Adapter: "0x0000000000000000000000000000000000000000",
        PoolTogetherV4PriceFeed: "0x0000000000000000000000000000000000000000",
        ProtocolFeeReserveLib: "0x27d5746b4fa825bfac62954bc561937ca90adc2b",
        ProtocolFeeReserveProxy: "0x410f5bc40668b729675dacb48a3467861bb36c50",
        ProtocolFeeTracker: "0x44ddf1831fb1f9cd62bd07b4c351c826751594a6",
        SharePriceThrottledAssetManagerFactory: "0x0000000000000000000000000000000000000000",
        SharePriceThrottledAssetManagerLib: "0x0000000000000000000000000000000000000000",
        SharesSplitterFactory: "0x0000000000000000000000000000000000000000",
        SingleAssetDepositQueueFactory: "0x0000000000000000000000000000000000000000",
        SingleAssetDepositQueueLib: "0x0000000000000000000000000000000000000000",
        SingleAssetRedemptionQueueFactory: "0x0000000000000000000000000000000000000000",
        SingleAssetRedemptionQueueLib: "0x0000000000000000000000000000000000000000",
        SolvV2BondBuyerPositionLib: "0x0000000000000000000000000000000000000000",
        SolvV2BondBuyerPositionParser: "0x0000000000000000000000000000000000000000",
        SolvV2BondIssuerPositionLib: "0x0000000000000000000000000000000000000000",
        SolvV2BondIssuerPositionParser: "0x0000000000000000000000000000000000000000",
        StaderSDPriceFeed: "0x0000000000000000000000000000000000000000",
        StaderStakingAdapter: "0x0000000000000000000000000000000000000000",
        StaderWithdrawalsPositionLib: "0x0000000000000000000000000000000000000000",
        StaderWithdrawalsPositionParser: "0x0000000000000000000000000000000000000000",
        StakeWiseV3StakingPositionLib: "0x0000000000000000000000000000000000000000",
        StakeWiseV3StakingPositionParser: "0x0000000000000000000000000000000000000000",
        SwellStakingAdapter: "0x0000000000000000000000000000000000000000",
        SynthetixAdapter: "0x0000000000000000000000000000000000000000",
        TermFinanceV1LendingPositionLib: "0x0000000000000000000000000000000000000000",
        TermFinanceV1LendingPositionParser: "0x0000000000000000000000000000000000000000",
        TheGraphDelegationPositionLib: "0x0000000000000000000000000000000000000000",
        TheGraphDelegationPositionParser: "0x0000000000000000000000000000000000000000",
        ThreeOneThirdAdapter: "0x0000000000000000000000000000000000000000",
        TransferAssetsAdapter: "0x0000000000000000000000000000000000000000",
        UintListRegistry: "0x305357dbb4f4a65601751eb25d275ad071466cd2",
        UniswapV2ExchangeAdapter: "0x0000000000000000000000000000000000000000",
        UniswapV2LiquidityAdapter: "0x0000000000000000000000000000000000000000",
        UniswapV2PoolPriceFeed: "0x0000000000000000000000000000000000000000",
        UniswapV3Adapter: "0x0000000000000000000000000000000000000000",
        UniswapV3LiquidityPositionLib: "0x0000000000000000000000000000000000000000",
        UniswapV3LiquidityPositionParser: "0x0000000000000000000000000000000000000000",
        UnpermissionedActionsWrapper: "0x9691a35ca238ac01de7413493fa434eb90bc28a9",
        UsdEthSimulatedAggregator: "0x0000000000000000000000000000000000000000",
        ValueInterpreter: "0xa76bc052a4d200d851c27312b32c35502824e8e1",
        VaultLib: "0x944d01bf533ed041d9947826429f086bf56c5856",
        WstethPriceFeed: "0x0000000000000000000000000000000000000000",
        YearnVaultV2Adapter: "0x0000000000000000000000000000000000000000",
        YearnVaultV2PriceFeed: "0x0000000000000000000000000000000000000000",
        ZeroExV2Adapter: "0x0000000000000000000000000000000000000000",
        ZeroExV4Adapter: "0x0000000000000000000000000000000000000000",
        ZeroExV4AdapterPmm2Kyc: "0x0000000000000000000000000000000000000000",
        ZeroLendLRTBTCAaveV3Adapter: "0x0000000000000000000000000000000000000000",
        ZeroLendLRTBTCAaveV3ATokenListOwner: "0x0000000000000000000000000000000000000000",
        ZeroLendLRTBTCAaveV3DebtPositionLib: "0x0000000000000000000000000000000000000000",
        ZeroLendLRTBTCAaveV3DebtPositionParser: "0x0000000000000000000000000000000000000000",
        ZeroLendRWAStablecoinsAaveV3Adapter: "0x0000000000000000000000000000000000000000",
        ZeroLendRWAStablecoinsAaveV3ATokenListOwner: "0x0000000000000000000000000000000000000000",
        ZeroLendRWAStablecoinsAaveV3DebtPositionLib: "0x0000000000000000000000000000000000000000",
        ZeroLendRWAStablecoinsAaveV3DebtPositionParser: "0x0000000000000000000000000000000000000000",
      },
      inception: 23178855,
      network: Network.BASE,
      slug: `${Deployment.BASE}.${Version.SULU}`,
      status: Status.LIVE,
      version: Version.SULU,
    },
  },
  slug: Deployment.BASE,
  subgraphs: {
    assets: { slug: "asset-universe-base", id: "5pEH7HJiFmFcBeZet5v9QkyWAsTYrynzSTrGsvmG35zr" },
    balances: { slug: "vault-balances-base", id: "33E2svxCDLYayW9M92Xk5hZPpzeoTVLG3xcCS4j2EHD4" },
    core: {
      slug: "enzyme-core-base",
      id: "4mN2FhEurr8LEaFgSGwfcTzUxn7FCrY2UzqFLRcsfGne",
      devVersion: "version/latest",
    },
    shares: { slug: "vault-shares-base", id: "8TUqAo4HpMPapdmG6nsAUmUuKb3YqGbjtGAZsycgd1JM" },
    vaults: { slug: "vault-lineage-base", id: "C7yW1brB1mwHyAmjsHdhnA7uaMdr8hj1fBvL2RdzcyrV" },
  },
});
