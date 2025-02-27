import assets from "../assets/arbitrum.js";
import { Version } from "../contracts.js";
import { Network } from "../networks.js";
import { Deployment, Kind, Status, defineDeployment } from "../releases.js";

export default defineDeployment<Deployment.ARBITRUM>({
  address: "0x8da28441a4c594fd2fac72726c1412d8cf9e4a19",
  assets,
  externalContracts: {
    aaveUIIncentiveDataProvider: "0xe92cd6164ce7dc68e740765bc1f2a091b6cbc3e4",
    aaveV2IncentivesController: "0x0000000000000000000000000000000000000000",
    aaveV2LendingPoolProvider: "0x0000000000000000000000000000000000000000",
    aaveV3LendingPoolProvider: "0xa97684ead0e402dc232d5a977953df7ecbab3cdb",
    aaveV3ProtocolDataProvider: "0x7f23d86ee20d869112572136221e173428dd740b",
    aaveV3RewardsController: "0x929ec64c34a17401f460460d4b9390518e5b473e",
    aliceOrderManager: "0x0000000000000000000000000000000000000000",
    arrakisV2Helper: "0x0000000000000000000000000000000000000000",
    arrakisV2Resolver: "0x0000000000000000000000000000000000000000",
    balancerGaugeController: "0x0000000000000000000000000000000000000000",
    balancerHelpers: "0x0000000000000000000000000000000000000000",
    balancerMinter: "0x0000000000000000000000000000000000000000",
    balancerProtocolFeesCollector: "0x0000000000000000000000000000000000000000",
    balancerVault: "0xba12222222228d8ba445958a75a0704d566bf2c8",
    chainlinkFeedsRegistry: "0x0000000000000000000000000000000000000000",
    compoundComptroller: "0x0000000000000000000000000000000000000000",
    compoundV3Rewards: "0x0000000000000000000000000000000000000000",
    curveChildLiquidityGaugeFactory: "0x0000000000000000000000000000000000000000",
    curveMinter: "0x0000000000000000000000000000000000000000",
    curveRegistry: "0x0000000000000000000000000000000000000000",
    cvxCrvStaking: "0x0000000000000000000000000000000000000000",
    gmxV2ExchangeRouter: "0x900173a66dbd345006c51fa35fa3ab760fcd843b",
    gmxV2ChainlinkPriceFeed: "0x527fb0bcff63c47761039bb386cfe181a92a4701",
    gmxV2DataStore: "0xfd70de6b91282d8017aa4e741e9ae325cab992d8",
    gmxV2Reader: "0x0537c767cdac0726c76bb89e92904fe28fd02fe1",
    gmxV2ReferralStorage: "0xe6fab3f0c7199b0d34d7fbe83394fc0e0d06e99d",
    kilnStaking: "0x0000000000000000000000000000000000000000",
    lidoWithdrawalsQueue: "0x0000000000000000000000000000000000000000",
    liquityCollSurplusPool: "0x0000000000000000000000000000000000000000",
    liquityHintHelpers: "0x0000000000000000000000000000000000000000",
    liquitySortedTroves: "0x0000000000000000000000000000000000000000",
    liquityTroveManager: "0x0000000000000000000000000000000000000000",
    makerMCDPotAddress: "0x0000000000000000000000000000000000000000",
    morphoBlue: "0x0000000000000000000000000000000000000000",
    merklDistributor: "0x3ef3d8ba38ebe18db133cec108f4d14ce00dd9ae",
    multicall: "0xca11bde05977b3631167028862be2a173976ca11",
    paraswapV5AugustusSwapper: "0xdef171fe48cf0115b1d80b88dc8eab59176fee57",
    paraswapV5TokenTransferProxy: "0x216b4b4ba9f3e719726886d34a177484278bfcae",
    pendlePtLpOracle: "0x0000000000000000000000000000000000000000",
    staderStakingPoolManager: "0x0000000000000000000000000000000000000000",
    staderUserWithdrawManager: "0x0000000000000000000000000000000000000000",
    stakeWiseV3KeeperRewards: "0x0000000000000000000000000000000000000000",
    theGraphDelegationStakingProxy: "0x00669a4cf01450b64e8a2a20e9b1fcb71e61ef03",
    theGraphEpochManagerProxy: "0x5a843145c43d328b9bb7a4401d94918f131bb281",
    uniswapV3NonFungiblePositionManager: "0xc36442b4a4522e871399cd717abdd847ab11fe88",
    voteLockedConvexToken: "0x0000000000000000000000000000000000000000",
    votiumVoteProxy: "0x0000000000000000000000000000000000000000",
    zeroExExchangeProxy: "0x0000000000000000000000000000000000000000",
    zeroExV4Exchange: "0x0000000000000000000000000000000000000000",
    zeroLendAaveV3UIIncentiveDataProvider: "0x0000000000000000000000000000000000000000",
    zeroLendLRTBTCAaveV3LendingPoolProvider: "0x0000000000000000000000000000000000000000",
    zeroLendLRTBTCAaveV3ProtocolDataProvider: "0x0000000000000000000000000000000000000000",
    zeroLendLRTBTCAaveV3RewardsController: "0x0000000000000000000000000000000000000000",
    zeroLendRWAStablecoinsAaveV3LendingPoolProvider: "0x0000000000000000000000000000000000000000",
    zeroLendRWAStablecoinsAaveV3ProtocolDataProvider: "0x0000000000000000000000000000000000000000",
    zeroLendRWAStablecoinsAaveV3RewardsController: "0x0000000000000000000000000000000000000000",
  },
  inception: 230330283,
  kind: Kind.LIVE,
  knownAddressLists: {
    noSlippageAdapters: 1n,
    adapters: 2n,
    fees: 3n,
    policies: 4n,
    nonStandardPriceFeedAssets: 16n,
    aTokens: 8n,
  },
  knownUintLists: {},
  label: "Arbitrum",
  namedTokens: {
    bal: "0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8",
    comp: "0x354a6da3fcde098f8389cad84b0182725c6c91de",
    crv: "0x11cdb42b0eb46d95f990bedd4695a6e3fa034978",
    cvx: "0xaafcfd42c9954c6689ef1901e03db742520829c5",
    dai: "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    grt: "0x9623063377ad1b27544c965ccd7342f7ea7e88c7",
    mln: "0x8f5c1a99b1df736ad685006cb6adca7b7ae4b514",
    usdt: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    weth: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
  },
  network: Network.ARBITRUM,
  releases: {
    [Version.SULU]: {
      address: "0xa2b4c827de13d4e9801ea1ca837524a1a148dec3",
      contracts: {
        AaveDebtPositionLib: "0x0000000000000000000000000000000000000000",
        AaveDebtPositionParser: "0x0000000000000000000000000000000000000000",
        AavePriceFeed: "0x0000000000000000000000000000000000000000",
        AaveV2Adapter: "0x0000000000000000000000000000000000000000",
        AaveV2ATokenListOwner: "0x0000000000000000000000000000000000000000",
        AaveV3Adapter: "0xd0c6b9801fc1e70945f11b3f93340dcc7507fd7c",
        AaveV3ATokenListOwner: "0x575af64231a91b3a954d5e45a57187ace6549c81",
        AaveV3DebtPositionLib: "0x6ef082e4041030dca3ae728a6d60d137404bda35",
        AaveV3DebtPositionParser: "0xa4fc3fa736b812ee086c75c442d568a2cd48cd59",
        AaveV3FlashLoanAssetManagerFactory: "0xb49f8c0ce9df900e024dab48952bb8a8992c1795",
        AaveV3FlashLoanAssetManagerLib: "0xd38c8c77b250d80e743013c4019d02f6cc85b80e",
        AddressListRegistry: "0x2c6bef68dabf0494bb5f727e63c8fb54f7d2c287",
        AlicePositionLib: "0x0000000000000000000000000000000000000000",
        AlicePositionParser: "0x0000000000000000000000000000000000000000",
        AllowedAdapterIncomingAssetsPolicy: "0x54325c3dc5ad60305a70bc565be7a9ce71224a76",
        AllowedAdaptersPerManagerPolicy: "0xeb036c294e54cc5047ab526c204752d056cc1952",
        AllowedAdaptersPolicy: "0x1768b813d17f82a8d70bd8b80a8c8c1562878337",
        AllowedAssetsForRedemptionPolicy: "0x166ada85f6a398ba01d2b97022770cc6bd9d2ea2",
        AllowedDepositRecipientsPolicy: "0xde0c43b8cb1cacdec773ef55fcbfbcbe009891f1",
        AllowedExternalPositionTypesPerManagerPolicy: "0x38673bace2ae5e90d4936d0d90b58a3577795205",
        AllowedExternalPositionTypesPolicy: "0x3c441b696bd451d0ba95ebb73cf1b23c20873e14",
        AllowedRedeemersForSpecificAssetsPolicy: "0x19abba4ab3134c64abdd17a9073d1ec83663f036",
        AllowedSharesTransferRecipientsPolicy: "0xb5ef1f5e549ad46603bec9011b99a96a6cfd993e",
        ArbitraryLoanPositionLib: "0x0000000000000000000000000000000000000000",
        ArbitraryLoanPositionParser: "0x0000000000000000000000000000000000000000",
        ArbitraryLoanTotalNominalDeltaOracleModule: "0x0000000000000000000000000000000000000000",
        ArrakisV2Adapter: "0x0000000000000000000000000000000000000000",
        ArrakisV2PriceFeed: "0x0000000000000000000000000000000000000000",
        AssetValueCalculator: "0x12cccb314e67d3ed7178f0601b2f4c72fb9fee6e",
        BalancerV2GaugeTokenPriceFeed: "0x80f0fc50d672158d118e5ee1e64a6905a5e72540",
        BalancerV2LiquidityAdapter: "0xb3ea1f2f3d2cdbd81a3de91fdf9a2f3e3acd66c1",
        BalancerV2StablePoolPriceFeed: "0x8f30c0483c1cd32c100462f1af6d4ae6283086a9",
        BalancerV2WeightedPoolPriceFeed: "0xa95878965f3af1d88002e06ae25182a45943b9e2",
        ChainlinkLikeWstethPriceFeed: "0x0000000000000000000000000000000000000000",
        ChainlinkLikeYnEthPriceFeed: "0x0000000000000000000000000000000000000000",
        CompoundAdapter: "0x0000000000000000000000000000000000000000",
        CompoundDebtPositionLib: "0x0000000000000000000000000000000000000000",
        CompoundDebtPositionParser: "0x0000000000000000000000000000000000000000",
        CompoundPriceFeed: "0x0000000000000000000000000000000000000000",
        CompoundV3TokenListOwner: "0x0000000000000000000000000000000000000000",
        CompoundV3Adapter: "0x0000000000000000000000000000000000000000",
        ComptrollerLib: "0x3868c0fc34b6ece124c6ab122f6f29e978be6661",
        ConvertedQuoteAggregatorFactory: "0xd12e5973a04dabe5bbc2d05b2598310217bd2640",
        ConvexVotingPositionLib: "0x0000000000000000000000000000000000000000",
        ConvexVotingPositionParser: "0x0000000000000000000000000000000000000000",
        CumulativeSlippageTolerancePolicy: "0x487f6a8a93c2be5a296ead2c3fbc3fceed4ac599",
        CurveExchangeAdapter: "0x0000000000000000000000000000000000000000",
        CurveLiquidityAaveAdapter: "0x0000000000000000000000000000000000000000",
        CurveLiquidityAdapter: "0x0000000000000000000000000000000000000000",
        CurveLiquiditySethAdapter: "0x0000000000000000000000000000000000000000",
        CurveLiquidityStethAdapter: "0x0000000000000000000000000000000000000000",
        CurvePriceFeed: "0x0000000000000000000000000000000000000000",
        DepositWrapper: "0x41d82e0512d77508ad486d6800059f3d936910db",
        DisallowedAdapterIncomingAssetsPolicy: "0x5c9348fbedb75c39f0e84396618accab6c01f847",
        Dispatcher: "0x8da28441a4c594fd2fac72726c1412d8cf9e4a19",
        EntranceRateBurnFee: "0x6180b98d85afbd904016c7ea08eb41cba77a1c08",
        EntranceRateDirectFee: "0xbd35b273453eb3a977f2757f92b20e8c0b33c0b2",
        ERC4626Adapter: "0x0000000000000000000000000000000000000000",
        ERC4626PriceFeed: "0x0000000000000000000000000000000000000000",
        EtherFiEthPriceFeed: "0x0000000000000000000000000000000000000000",
        ExitRateBurnFee: "0x8bdb929f16c2ce833c3c3176ba5c607e20949010",
        ExitRateDirectFee: "0x769c732a17f6e72d7ba0fe79ad01a31b27bbcb3d",
        ExternalPositionFactory: "0xd44256acea2193d4a50a9ad879a531666729962c",
        ExternalPositionManager: "0x90b53aefdbd2ba3573d965d2d98951f2aa00507d",
        FeeManager: "0x2c46503d4a0313c7161a5593b6865baa194b466f",
        FiduPriceFeed: "0x0000000000000000000000000000000000000000",
        FundDataProviderRouter: "0xbd154eed58a880fe4c0129491539751fc2bbbfe1",
        FundDeployer: "0xa2b4c827de13d4e9801ea1ca837524a1a148dec3",
        FundValueCalculator: "0xea609eeb38d1ee8e8719597d47cc9276df9f8707",
        FundValueCalculatorRouter: "0x2e58f80cea88f0787cadf1bb30acc23d8ac81982",
        GasRelayPaymasterFactory: "0xe922362aa3426bd683b63a8e5d13903a9cfc4cbb",
        GasRelayPaymasterLib: "0x9ab4e80bfb2d6ad0b52fa22e8fe3d9fd3846bbb4",
        GatedRedemptionQueueSharesWrapperFactory: "0x0000000000000000000000000000000000000000",
        GatedRedemptionQueueSharesWrapperLib: "0x0000000000000000000000000000000000000000",
        GenericAdapter: "0x0000000000000000000000000000000000000000",
        GlobalConfigLib: "0x211e54a2f1e83cabc9d1211a1df0759b7193201a",
        GlobalConfigProxy: "0xf9315b421904eadf2f8fce776958c147ee9bc880",
        GMXV2LeverageTradingPositionLib: "0xa69944d328b0045bd87c051b241055d3123b68a1",
        GMXV2LeverageTradingPositionParser: "0x0645b362a0d43e005f46713d1857e193f665810e",
        IntegrationManager: "0x55df97aca98c2a708721f28ea1ca42a2be7ff934",
        KilnStakingPositionLib: "0x0000000000000000000000000000000000000000",
        KilnStakingPositionParser: "0x0000000000000000000000000000000000000000",
        LidoWithdrawalsPositionLib: "0x0000000000000000000000000000000000000000",
        LidoWithdrawalsPositionParser: "0x0000000000000000000000000000000000000000",
        LiquityDebtPositionLib: "0x0000000000000000000000000000000000000000",
        LiquityDebtPositionParser: "0x0000000000000000000000000000000000000000",
        ManagementFee: "0xd2fa8f6706241dfdf8069d05e1d6f6c4a439aa86",
        ManualValueOracleFactory: "0x671ed11497e8fe5c98ed45e699639cf081ee0a5f",
        MapleLiquidityPositionLib: "0x0000000000000000000000000000000000000000",
        MapleLiquidityPositionParser: "0x0000000000000000000000000000000000000000",
        MinAssetBalancesPostRedemptionPolicy: "0x53a124c9201f0d00470cd4245946d2bbb98210ba",
        MinMaxInvestmentPolicy: "0x542812a43334634213877fbfde33ecbef5234c9d",
        MinSharesSupplyFee: "0xa8c3b04a800c08ae010b56ac1c1ad7033d980b0f",
        MorphoBluePositionLib: "0x0000000000000000000000000000000000000000",
        MorphoBluePositionParser: "0x0000000000000000000000000000000000000000",
        NoDepegOnRedeemSharesForSpecificAssetsPolicy: "0xad404ceabad39d4b22bf2e1265a161ac44620825",
        NotionalV2PositionLib: "0x0000000000000000000000000000000000000000",
        NotionalV2PositionParser: "0x0000000000000000000000000000000000000000",
        OneInchV5Adapter: "0xc2f737aeece89d8db98a7d82bfed40d09e381ed5",
        OnlyRemoveDustExternalPositionPolicy: "0xe4453105be9e579896a3ed73df9a1e285c8c95c2",
        OnlyUntrackDustOrPricelessAssetsPolicy: "0xa482f4ab637cd5ca00084d511b3ca9aa8d8f475e",
        ParaSwapV5Adapter: "0x08df49f617ecdccbc90d9a0f87b8c1a84b2e7cb9",
        PeggedDerivativesPriceFeed: "0x0000000000000000000000000000000000000000",
        PerformanceFee: "0x9e0f80bc5a688e93d6c57efcfdd4564f70975e8b",
        PendleV2Adapter: "0x0000000000000000000000000000000000000000",
        PendleV2PositionLib: "0x0000000000000000000000000000000000000000",
        PendleV2PositionParser: "0x0000000000000000000000000000000000000000",
        PendleMarketsRegistry: "0x0000000000000000000000000000000000000000",
        PolicyManager: "0xbde1e8c4a061cd28f4871860ddf22200b85ee9ec",
        PoolTogetherV4Adapter: "0x0000000000000000000000000000000000000000",
        PoolTogetherV4PriceFeed: "0x0000000000000000000000000000000000000000",
        ProtocolFeeReserveLib: "0x642986a6bc5ec518cfb97d8afa5a7fa8477d3cf5",
        ProtocolFeeReserveProxy: "0x9eb802e7696c9951fdcba90699e5000d7a39205c",
        ProtocolFeeTracker: "0xe71227d6d846e0fb3367d020683327031c4c4a3d",
        SharePriceThrottledAssetManagerFactory: "0x0000000000000000000000000000000000000000",
        SharePriceThrottledAssetManagerLib: "0x0000000000000000000000000000000000000000",
        SharesSplitterFactory: "0x0000000000000000000000000000000000000000",
        SingleAssetRedemptionQueueFactory: "0xb658a26ec9638051a42160bb02319fed12299b25",
        SingleAssetRedemptionQueueLib: "0x137ac14e27de154e6a0a260570259f8cef436ba4",
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
        TheGraphDelegationPositionLib: "0x92da9df390d3e9199d105289b297eca357ecc9b7",
        TheGraphDelegationPositionParser: "0xc2822eca13a7760141041a173c1b9b13e22515f6",
        ThreeOneThirdAdapter: "0x5a1c0e89133c4cd844a8b345370565f1368a79a8",
        TransferAssetsAdapter: "0xe8db4924569a3c61aadfb721bbb009e3127196bd",
        UintListRegistry: "0xc438e48f5d2f99eb4a2b9865f8cccfc9915f227a",
        UniswapV2ExchangeAdapter: "0x0000000000000000000000000000000000000000",
        UniswapV2LiquidityAdapter: "0x0000000000000000000000000000000000000000",
        UniswapV2PoolPriceFeed: "0x0000000000000000000000000000000000000000",
        UniswapV3Adapter: "0xea0f3cc847c8e388bd2f7adac130b64b6754f5e2",
        UniswapV3LiquidityPositionLib: "0x250530db7ee6a10e0126288ace48a7bb54bd4adc",
        UniswapV3LiquidityPositionParser: "0xc6ece1bff7a7b16def7e2a6956b7c75189240671",
        UnpermissionedActionsWrapper: "0x6aab72ede0255f3dd0e1ce568248a63aa3df2320",
        UsdEthSimulatedAggregator: "0x0000000000000000000000000000000000000000",
        ValueInterpreter: "0xdd5f18a52a63ececf502a165a459d33be5c0a06c",
        VaultLib: "0xe1a147b3fb8a7be78bf3a061f176bc718d897695",
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
      inception: 230330283,
      network: Network.ARBITRUM,
      slug: `${Deployment.ARBITRUM}.${Version.SULU}`,
      status: Status.LIVE,
      version: Version.SULU,
    },
  },
  slug: Deployment.ARBITRUM,
  subgraphs: {
    assets: { slug: "asset-universe-arbitrum", id: "J2DQQxBCL5qxzwickTR2YKxVH5Bnr3aUwYdVEYbaYbrJ" },
    balances: { slug: "vault-balances-arbitrum", id: "F6uEWkrjChyqzfA3wdwRTKCBdzQYm9LPCFbaVj3tvudN" },
    core: {
      slug: "enzyme-core-arbitrum",
      id: "8UJ5Bkf2eazZhXsAshhzQ2Keibcb8NFHBvXis9pb2C2Y",
      devVersion: "version/latest",
    },
    shares: { slug: "vault-shares-arbitrum", id: "8pUZ51EFRYiMMdL5JLdjzYRjG5yqA2zv1KiMRHdrz9EH" },
    vaults: { slug: "vault-lineage-arbitrum", id: "ErvkSrie41cprdwYAnLz7PAN44ZjJoqrLm14SyPvhbHa" },
  },
});
