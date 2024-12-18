import assets from "../assets/polygon.js";
import { Version } from "../contracts.js";
import { Network } from "../networks.js";
import { Deployment, Kind, Status, defineDeployment } from "../releases.js";

export default defineDeployment<Deployment.POLYGON>({
  address: "0x2e25271297537b8124b8f883a92ffd95c4032733",
  assets,
  externalContracts: {
    aaveUIIncentiveDataProvider: "0x5c5228ac8bc1528482514af3e27e692495148717",
    aaveV2IncentivesController: "0x357d51124f59836ded84c8a1730d72b749d8bc23",
    aaveV2LendingPoolProvider: "0xd05e3e715d945b59290df0ae8ef85c1bdb684744",
    aaveV3LendingPoolProvider: "0xa97684ead0e402dc232d5a977953df7ecbab3cdb",
    aaveV3ProtocolDataProvider: "0x7f23d86ee20d869112572136221e173428dd740b",
    aaveV3RewardsController: "0x929ec64c34a17401f460460d4b9390518e5b473e",
    aliceOrderManager: "0x0000000000000000000000000000000000000000",
    arrakisV2Helper: "0x89e4be1f999e3a58d16096fbe405fc2a1d7f07d6",
    arrakisV2Resolver: "0x535c5fdf31477f799366df6e4899a12a801cc7b8",
    balancerGaugeController: "0x0000000000000000000000000000000000000000",
    balancerHelpers: "0x239e55f427d44c3cc793f49bfb507ebe76638a2b",
    balancerMinter: "0x0000000000000000000000000000000000000000",
    balancerProtocolFeesCollector: "0xce88686553686da562ce7cea497ce749da109f9f",
    balancerVault: "0xba12222222228d8ba445958a75a0704d566bf2c8",
    chainlinkFeedsRegistry: "0x0000000000000000000000000000000000000000",
    compoundComptroller: "0x0000000000000000000000000000000000000000",
    compoundV3Rewards: "0x45939657d1ca34a8fa39a924b71d28fe8431e581",
    curveChildLiquidityGaugeFactory: "0xabc000d88f23bb45525e447528dbf656a9d55bf5",
    curveMinter: "0x0000000000000000000000000000000000000000",
    curveRegistry: "0x0000000022d53366457f9d5e68ec105046fc4383",
    cvxCrvStaking: "0x0000000000000000000000000000000000000000",
    gmxV2ChainlinkPriceFeed: "0x0000000000000000000000000000000000000000",
    gmxV2DataStore: "0x0000000000000000000000000000000000000000",
    gmxV2ExchangeRouter: "0x0000000000000000000000000000000000000000",
    gmxV2Reader: "0x0000000000000000000000000000000000000000",
    gmxV2ReferralStorage: "0x0000000000000000000000000000000000000000",
    kilnStaking: "0x0000000000000000000000000000000000000000",
    lidoWithdrawalsQueue: "0x0000000000000000000000000000000000000000",
    liquityCollSurplusPool: "0x0000000000000000000000000000000000000000",
    liquityHintHelpers: "0x0000000000000000000000000000000000000000",
    liquitySortedTroves: "0x0000000000000000000000000000000000000000",
    liquityTroveManager: "0x0000000000000000000000000000000000000000",
    makerMCDPotAddress: "0x0000000000000000000000000000000000000000",
    morphoBlue: "0x0000000000000000000000000000000000000000",
    multicall: "0xca11bde05977b3631167028862be2a173976ca11",
    staderStakingPoolManager: "0x0000000000000000000000000000000000000000",
    staderUserWithdrawManager: "0x0000000000000000000000000000000000000000",
    paraswapV5AugustusSwapper: "0xdef171fe48cf0115b1d80b88dc8eab59176fee57",
    paraswapV5TokenTransferProxy: "0x216b4b4ba9f3e719726886d34a177484278bfcae",
    pendlePtLpOracle: "0x0000000000000000000000000000000000000000",
    stakeWiseV3KeeperRewards: "0x0000000000000000000000000000000000000000",
    theGraphDelegationStakingProxy: "0x0000000000000000000000000000000000000000",
    theGraphEpochManagerProxy: "0x0000000000000000000000000000000000000000",
    uniswapV3NonFungiblePositionManager: "0xc36442b4a4522e871399cd717abdd847ab11fe88",
    voteLockedConvexToken: "0x0000000000000000000000000000000000000000",
    votiumVoteProxy: "0x0000000000000000000000000000000000000000",
    zeroExExchangeProxy: "0x0000000000000000000000000000000000000000",
    zeroExV4Exchange: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
  },
  inception: 25825424,
  kind: Kind.LIVE,
  knownAddressLists: {
    noSlippageAdapters: 1n,
    adapters: 2n,
    fees: 3n,
    policies: 4n,
    nonStandardPriceFeedAssets: 1383n,
    aTokens: 735n,
  },
  knownUintLists: {},
  label: "Polygon",
  namedTokens: {
    aave: "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
    bal: "0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3",
    comp: "0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c",
    crv: "0x172370d5cd63279efa6d502dab29171933a610af",
    cvx: "0x4257ea7637c355f81616050cbb6a9b709fd72683",
    dai: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    eure: "0x18ec0a6e18e5bc3784fdd3a3634b31245ab704f6",
    grt: "0x5fe2b58c013d7601147dcdd68c143a77499f5531",
    mln: "0xa9f37d84c856fda3812ad0519dad44fa0a3fe207",
    uni: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    usdc: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    usdt: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    weth: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  },
  network: Network.POLYGON,
  releases: {
    [Version.SULU]: {
      address: "0x188d356caf78bc6694aee5969fde99a9d612284f",
      contracts: {
        AaveDebtPositionLib: "0x83e3d456344f25f0a235de5d2f6c193c983e9d36",
        AaveDebtPositionParser: "0x7913a5a5424d3593f82e5eeb78008a3b8c719afe",
        AavePriceFeed: "0x3116cab784d30a07ff1bb370222290160a9eba1f",
        AaveV2Adapter: "0x1ff30682801251751c1f69355014112d29a0494d",
        AaveV2ATokenListOwner: "0x6d5b95aa342f77e4825496334195e9c1c7d3208b",
        AaveV3Adapter: "0xb3b21dfa60b399ad00587b845aef7476a1659e9f",
        AaveV3ATokenListOwner: "0xeffb0467247b01e944203246694afb64d4af69ce",
        AaveV3DebtPositionLib: "0x07e48d8b165bf2a13d8cb68810898d0c3baf346f",
        AaveV3DebtPositionParser: "0xfb2a99055c8cd5a6f2fde4f8815ad635a83f26aa",
        AaveV3FlashLoanAssetManagerFactory: "0xc393aab83371350e6c002b1c2db75c4f6b56308c",
        AaveV3FlashLoanAssetManagerLib: "0x12534065db54c01a73857febc6a0a9225b53309c",
        AddressListRegistry: "0x5ae15bf655a8f42b9c7d93e64f4476ec1da248f8",
        AlicePositionLib: "0x0000000000000000000000000000000000000000",
        AlicePositionParser: "0x0000000000000000000000000000000000000000",
        AllowedAdapterIncomingAssetsPolicy: "0xc192fd3b13549ad5bc3c0a0118a29556d0cdd482",
        AllowedAdaptersPerManagerPolicy: "0x30ed4e3cf5e1faf6fc9776d256d535f3470bb710",
        AllowedAdaptersPolicy: "0x4218783ae10bd1841e6664cf048ac295d8d27a4a",
        AllowedAssetsForRedemptionPolicy: "0x71b8254f608a73162445655ff2f07ccb1586b3b6",
        AllowedDepositRecipientsPolicy: "0xe1853502e2ea2b7c14c5e89169c63065f5a459ff",
        AllowedExternalPositionTypesPerManagerPolicy: "0xb6367cd4b67c44e963ae81e9c1757a1c08ede28c",
        AllowedExternalPositionTypesPolicy: "0x5a739da3099fd4fc954bd764099fc000da76d8e7",
        AllowedRedeemersForSpecificAssetsPolicy: "0x9f99e9bcb69c58e9889bdd6b88c1d3059a122195",
        AllowedSharesTransferRecipientsPolicy: "0x3b6913a8ed4595919a6b4a9022208cede20194bd",
        ArbitraryLoanPositionLib: "0xf45071ea30afa81be89430f3d0f334e98af206d3",
        ArbitraryLoanPositionParser: "0xe8a5dadff7dbd09f3b2abbb09643ba67f1860131",
        ArbitraryLoanTotalNominalDeltaOracleModule: "0x9301b377f646b38e31681cc5c35f364385e4121d",
        ArrakisV2Adapter: "0xf0409b59a971f5d0cdcc59b26f95340306e7011d",
        ArrakisV2PriceFeed: "0xcc80908a82676e1fa89837b2a06350e546ac678a",
        AssetValueCalculator: "0xe9d4d87478dcb10da0032f9fac8d253e9dd27d86",
        BalancerV2GaugeTokenPriceFeed: "0xbd19713e7fe01d3958afbb4fb5b3802a0d53605c",
        BalancerV2LiquidityAdapter: "0xaa7f7b3daaabdeaf828f4c489379160b034d125b",
        BalancerV2StablePoolPriceFeed: "0xea9cf93260aee30a5c4fd892607920bbbeb8c409",
        BalancerV2WeightedPoolPriceFeed: "0x30ee2560675f8a523cd07b109fcb472a54b08314",
        ChainlinkLikeWstethPriceFeed: "0x0000000000000000000000000000000000000000",
        ChainlinkLikeYnEthPriceFeed: "0x0000000000000000000000000000000000000000",
        CompoundAdapter: "0x0000000000000000000000000000000000000000",
        CompoundDebtPositionLib: "0x0000000000000000000000000000000000000000",
        CompoundDebtPositionParser: "0x0000000000000000000000000000000000000000",
        CompoundPriceFeed: "0x0000000000000000000000000000000000000000",
        CompoundV3TokenListOwner: "0xbabf1375c221a2bb838fe87052833212d5a95011",
        CompoundV3Adapter: "0x360eb57d32bf3a95e9fb0aad2a4629ceca3ef7ac",
        ComptrollerLib: "0xf5fc0e36c85552e44354132d188c33d9361eb441",
        ConvexVotingPositionLib: "0x0000000000000000000000000000000000000000",
        ConvexVotingPositionParser: "0x0000000000000000000000000000000000000000",
        CumulativeSlippageTolerancePolicy: "0x1332367c181f1157f751b160187dcaa219706bf2",
        CurveExchangeAdapter: "0x7edcca545c784afa09c9decd5fff23057506da4b",
        CurveLiquidityAaveAdapter: "0x0000000000000000000000000000000000000000",
        CurveLiquidityAdapter: "0x40524c19050bc5cbdf55375b27e3d6ebc5ce9c65",
        CurveLiquiditySethAdapter: "0x0000000000000000000000000000000000000000",
        CurveLiquidityStethAdapter: "0x0000000000000000000000000000000000000000",
        CurvePriceFeed: "0xc537439f4397a0f625cb323f90bf87397da92fcf",
        DepositWrapper: "0x2baa64f0ce9c2e60e91127fc3f40a72529e82c87",
        DisallowedAdapterIncomingAssetsPolicy: "0x45be6669cc53fb2f6ae7f5e302482e30113888fb",
        Dispatcher: "0x2e25271297537b8124b8f883a92ffd95c4032733",
        EntranceRateBurnFee: "0x01460ba35cb6f847d65c5eee124e7e9e10055f16",
        EntranceRateDirectFee: "0x88c9a11c7bb8bc274388d0db864ab87c14fb78b8",
        ERC4626Adapter: "0x79567acc4c54c23f5f449c1fbc1b54ac615df87d",
        ERC4626PriceFeed: "0xb13f73c5e333fb760a5bed668b1ff04432cadab0",
        EtherFiEthPriceFeed: "0x0000000000000000000000000000000000000000",
        ExitRateBurnFee: "0x0bbb9635d12a9c022b647f379224d88874d37879",
        ExitRateDirectFee: "0xc5c7f7c6e5e2db074d96b440d30d7aab2c99b848",
        ExternalPositionFactory: "0x067eeea753aba0ddecca0b80bbb8b7572bf6580d",
        ExternalPositionManager: "0x9513b3a49fc9ae8b76942c94fb6f660c41fd7f47",
        FeeManager: "0xddd7432671f5adc1c82c7c875624c1b0bc461deb",
        FiduPriceFeed: "0x0000000000000000000000000000000000000000",
        FundDataProviderRouter: "0xf03dc1f6e470919b5078d17e23e7107204dace6b",
        FundDeployer: "0x188d356caf78bc6694aee5969fde99a9d612284f",
        FundValueCalculator: "0xcdf038dd3b66506d2e5378aee185b2f0084b7a33",
        FundValueCalculatorRouter: "0xd70389a7d6171e1dba6c3df4db7331811fd93f08",
        GasRelayPaymasterFactory: "0xed05786ef7b5e5bf909512f0ad46eb8f22cdc4ca",
        GasRelayPaymasterLib: "0x44654bc1107caaa3297ed5ccb70d9cdb445f5592",
        GatedRedemptionQueueSharesWrapperFactory: "0x7a68d541af898c14fbd5ecbda3b402b18d8c17d4",
        GatedRedemptionQueueSharesWrapperLib: "0x9932120518b25e35d4653a8b8d316c58c8b6d7c9",
        GenericAdapter: "0x0000000000000000000000000000000000000000",
        GlobalConfigLib: "0xcbbd50255cf49797badb28ce625a4ea217c67a64",
        GlobalConfigProxy: "0x905448cb27f51d9a663fb18d57d76c49d19be837",
        GMXV2LeverageTradingPositionLib: "0x0000000000000000000000000000000000000000",
        GMXV2LeverageTradingPositionParser: "0x0000000000000000000000000000000000000000",
        IntegrationManager: "0x92fcde09790671cf085864182b9670c77da0884b",
        KilnStakingPositionLib: "0x0000000000000000000000000000000000000000",
        KilnStakingPositionParser: "0x0000000000000000000000000000000000000000",
        LidoWithdrawalsPositionLib: "0x0000000000000000000000000000000000000000",
        LidoWithdrawalsPositionParser: "0x0000000000000000000000000000000000000000",
        LiquityDebtPositionLib: "0x0000000000000000000000000000000000000000",
        LiquityDebtPositionParser: "0x0000000000000000000000000000000000000000",
        ManagementFee: "0x97f13b3040a565be791d331b0edd4b1b58dbd843",
        ManualValueOracleFactory: "0x735615beb04bfd3665f06541ea00af1860c4354f",
        MapleLiquidityPositionLib: "0x0000000000000000000000000000000000000000",
        MapleLiquidityPositionParser: "0x0000000000000000000000000000000000000000",
        MinAssetBalancesPostRedemptionPolicy: "0x9d940beaa6e3cfb441d49787fdf1db18d7f8251e",
        MinMaxInvestmentPolicy: "0x8ac04e34d9c1d0bd5a440157538cc6fbb0dbbc9a",
        MinSharesSupplyFee: "0xeb45b91d582ae383e750a1626a97f854a9df19a3",
        MorphoBluePositionLib: "0x0000000000000000000000000000000000000000",
        MorphoBluePositionParser: "0x0000000000000000000000000000000000000000",
        NoDepegOnRedeemSharesForSpecificAssetsPolicy: "0x0069111def5258f692d88bde2116c9c211cf8b04",
        NotionalV2PositionLib: "0x0000000000000000000000000000000000000000",
        NotionalV2PositionParser: "0x0000000000000000000000000000000000000000",
        OneInchV5Adapter: "0x2f4a9c0256e4f8e8d65733da1aeb4871f923b457",
        OnlyRemoveDustExternalPositionPolicy: "0xc0f49507c125a000e02ab58c22be9764e2abab99",
        OnlyUntrackDustOrPricelessAssetsPolicy: "0x9f856372f7bd844dac0254c7859b117259b5c9d2",
        ParaSwapV5Adapter: "0xb665e93e19eb18ef5005f0296d4693e3154ab0df",
        PendleV2Adapter: "0x0000000000000000000000000000000000000000",
        PendleV2PositionLib: "0x0000000000000000000000000000000000000000",
        PendleV2PositionParser: "0x0000000000000000000000000000000000000000",
        PendleMarketsRegistry: "0x0000000000000000000000000000000000000000",
        PerformanceFee: "0xbc63afe28c66a6279bd3a55a4d0d3ab61f479bdf",
        PeggedDerivativesPriceFeed: "0xbfa1027ef1da99c17358cb4719a2297d67fcc5b1",
        PolicyManager: "0x5a8ee0850d22ffef4169dbd348c1b0d7d5f5546f",
        PoolTogetherV4Adapter: "0xe1ade612e8a568a4a060a60a22f890171d3dc63b",
        PoolTogetherV4PriceFeed: "0xf35a9f4d9ceb494e3671bb79f7532607c1682f69",
        ProtocolFeeReserveLib: "0x420811f86787ae5f4070dcf85c74d8a5a2aaad5b",
        ProtocolFeeReserveProxy: "0xf0bfee2a93b0a1f9c5f6c1d731a6cf1308d68b2d",
        ProtocolFeeTracker: "0xb8e6eda0ce8fddd21f0b0268a43a57b9296e23d5",
        SharePriceThrottledAssetManagerFactory: "0x42637a6fe8dd32448be441a10782b4e29bfea3de",
        SharePriceThrottledAssetManagerLib: "0x65d9202b5494450310c43b6b47942305859a349c",
        SharesSplitterFactory: "0x1a0e3326795a77903e2a11790bd702ebb29b8944",
        SingleAssetRedemptionQueueFactory: "0x4b6b342ba8bb29e2d1b542532e6b7be1cae026b9",
        SingleAssetRedemptionQueueLib: "0xe54065f5b303c2843c769fb232b95bb893cf0b87",
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
        ThreeOneThirdAdapter: "0x5a1c0e89133c4cd844a8b345370565f1368a79a8",
        TransferAssetsAdapter: "0x52e83a4c9a123500e8324b9f489a681ffda92a17",
        UintListRegistry: "0x6ddd871c1607348ebb5be250f882255390166519",
        UniswapV2ExchangeAdapter: "0x0000000000000000000000000000000000000000",
        UniswapV2LiquidityAdapter: "0x0000000000000000000000000000000000000000",
        UniswapV2PoolPriceFeed: "0x0000000000000000000000000000000000000000",
        UniswapV3Adapter: "0xe11f3f7ac24a0839b3a3b13bd7eb5bc5e65e2483",
        UniswapV3LiquidityPositionLib: "0x3e44a8be6ba3175b7659b66a4ef35a48db755e6e",
        UniswapV3LiquidityPositionParser: "0x3338ef8a1a288c3b3b71708e85c7809b46c06776",
        UnpermissionedActionsWrapper: "0x1648cc031a1b6d60b5585ae21dae507a69d2b17b",
        UsdEthSimulatedAggregator: "0x51e75b5e0eef2d40b4d70c5daa2666e1ea30f0bd",
        ValueInterpreter: "0x66de7e286aae66f7f3daf693c22d16eea48a0f45",
        VaultLib: "0xddb8ebe5361ca93614e5efb34049e842912e1612",
        WstethPriceFeed: "0x0000000000000000000000000000000000000000",
        YearnVaultV2Adapter: "0x0000000000000000000000000000000000000000",
        YearnVaultV2PriceFeed: "0x0000000000000000000000000000000000000000",
        ZeroExV2Adapter: "0x0000000000000000000000000000000000000000",
        ZeroExV4Adapter: "0x21ba78486377987ae12d9214a0ff9e12b6ee67aa",
        ZeroExV4AdapterPmm2Kyc: "0x0000000000000000000000000000000000000000",
      },
      inception: 25825608,
      network: Network.POLYGON,
      slug: `${Deployment.POLYGON}.${Version.SULU}`,
      status: Status.PENDING,
      version: Version.SULU,
    },
  },
  slug: Deployment.POLYGON,
  subgraphs: {
    assets: { slug: "asset-universe-polygon", id: "6gfWidQ9TBcHLyUPuL343dw8LpvXW7sALPPHpcZi7SKz" },
    balances: { slug: "vault-balances-polygon", id: "tLbAAASbNgTZuqkVdPMs8RJBXLs9WZS7758t1maT86C" },
    core: {
      slug: "enzyme-core-polygon",
      id: "GCAHDyqvZBLMwqdb9U7AqWAN4t4TSwR3aXMHDoUUFuRV",
      devVersion: "version/latest",
    },
    shares: { slug: "vault-shares-polygon", id: "7Tahv9dmeKKcF2SUeHU3ZN4X52y8KGwPo5UaFidJb1hr" },
    vaults: { slug: "vault-lineage-polygon", id: "hQMwVerKMpt8ChLU33jhZ4GLmcP8q2fBhJzw4JRFq4q" },
  },
});
