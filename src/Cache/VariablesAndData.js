/* eslint-disable prefer-const */

export let CacheDragonAura = 0;
export let CacheDragonAura2 = 0;
export let CacheLastDragonLevel = 0;
export let CacheCostDragonUpgrade = 0;
export let CacheLucky = 0;
export let CacheLuckyReward = 0;
export let CacheLuckyWrathReward = 0;
export let CacheLuckyFrenzy = 0;
export let CacheLuckyRewardFrenzy = 0;
export let CacheLuckyWrathRewardFrenzy = 0;
export let CacheConjure = 0;
export let CacheConjureReward = 0;
export let CacheEdifice = 0;
export let CacheEdificeBuilding = 0;
export let CacheNoGoldSwitchCookiesPS = 0;
export let CacheDragonsFortuneMultAdjustment = 1;
export let CacheGoldenCookiesMult = 1;
export let CacheWrathCookiesMult = 1;

export let CacheHCPerSecond = 0;

export let CacheCentEgg = 0;
export let CacheSeaSpec = 0;
export let CacheLastChoEgg = 0;

export let CacheObjects1 = {};
export let CacheObjects10 = {};
export let CacheObjects100 = {};
export let CacheObjectsNextAchievement = {};

export let CacheWrinklersTotal = 0;
export let CacheWrinklersNormal = 0;
export let CacheWrinklersFattest = [0, null];

export let CacheCurrWrinklerCPSMult = 0;
export let CacheCurrWrinklerCount = 0;

export let CacheUpgrades = {};

export let CacheAverageClicks = {};
export let CacheAverageCookiesFromClicks;

export let CacheMissingUpgrades = {};
export let CacheMissingUpgradesPrestige = {};
export let CacheMissingUpgradesCookies = {};

export let CacheChainRequired = 0;
export let CacheChainRequiredNext = 0;
export let CacheChainMaxReward = [];
export let CacheChainWrathRequired = 0;
export let CacheChainWrathRequiredNext = 0;
export let CacheChainWrathMaxReward = [];
export let CacheChainFrenzyRequired = 0;
export let CacheChainFrenzyRequiredNext = 0;
export let CacheChainFrenzyMaxReward = [];
export let CacheChainFrenzyWrathRequired = 0;
export let CacheChainFrenzyWrathRequiredNext = 0;
export let CacheChainFrenzyWrathMaxReward = [];

export let CacheRealCookiesEarned = 0;
export let CacheAvgCPSWithChoEgg = 0;

export let CacheSpawnedGoldenShimmer = {};
export let CacheSeasonPopShimmer = {};

export let CacheTimeTillNextPrestige = 0;

/** Stores index of lowest cost "blue" upgrade, -1 for none */
export let  CacheMinBlueIdx = -1;
/** Stores Price of lowest cost "blue" upgrade */
export let CacheMinBluePrice = 0;
/** Stores index of lowest cost "gray" upgrade, -1 for none */
export let  CacheMinGrayIdx = -1;
/** Stores Price of lowest cost "gray" upgrade */
export let CacheMinGrayPrice = 0;

/** Stores lowest PP value */
export let CacheMinPP = 0;
/** Stores lowest PP value category */
export let CacheMinPPBulk = 0;
/** Stores amount of lowest PP purchase */
export let CacheMinPPAmount = 0;
/** Stores index of lowest PP value */
export let CacheMinPPidx = 0;

/** Stores all PP values of all buildings for all buy settings (1, 10, 100) */
export let CachePPArray = [];

export let CacheGoldenShimmersByID = {};

export let CacheSellForChoEgg = 0;

export let CookiesDiff;
export let WrinkDiff;
export let WrinkFattestDiff;
export let ChoEggDiff;
export let ClicksDiff;
export let HeavenlyChipsDiff;

export let CacheLastCPSCheck;
export let CacheLastCookies;
export let CacheLastWrinkCookies;
export let CacheLastWrinkFattestCookies;
export let CacheLastClicks;

export let CacheAverageGainBank;
export let CacheAverageGainWrink;
export let CacheAverageGainWrinkFattest;
export let CacheAverageGainChoEgg;
export let CacheAverageCPS;

export let CacheLastHeavenlyCheck;
export let CacheLastHeavenlyChips;

export let CacheDoRemakeBuildPrices;

export let CacheHadBuildAura;

/** Store the CPS effect of each god if it was put into each slot */
export let CacheGods = {
  0: [0, 0, 0],
  1: [0, 0, 0],
  2: [0, 0, 0],
  3: [0, 0, 0],
  4: [0, 0, 0],
  5: [0, 0, 0],
  6: [0, 0, 0],
  7: [0, 0, 0],
  8: [0, 0, 0],
  9: [0, 0, 0],
  10: [0, 0, 0],
};

/** List of things never to auto-buy */
export const CacheUpgradeExclude = [
  // Filter to exclude Switches / Prestiege Items

  // Toggle type = tech
  /* data placeholder
  65, // Specialized chocolate chips
  66, // Designer cocoa beans
  67, // Ritual rolling pins
  68, // Underworld ovens
  */
  69, // One mind
  /*
  70, // Exotic nuts
  71, // Communal brainsweep
  72, // Arcane sugar
  73, // Elder Pact
  */

  // Toggle type = toggle
  74, // Elder Pledge
  84, // Elder Covenant
  85, // Revoke Elder Covenant
  87, // Sacrificial rolling pins ???
  182, // Festive biscuit
  183, // Ghostly biscuit
  184, // Lovesick biscuit
  185, // Fool's biscuit
  209, // Bunny biscuit
  331, // Golden switch [off]
  332, // Golden switch [on]
  333, // Milk selector
  361, // Golden cookie sound selector
  414, // Background selector
  452, // Sugar frenzy
  563, // Shimmering veil [off]
  564, // Shimmering veil [on]

  // Toggle type = prestige
  141, // Persistent memory
  181, // Season switcher
  253, // Tin of british tea biscuits
  254, // Box of macarons
  255, // Box of brand biscuits
  264, // Permanent upgrade slot I
  265, // Permanent upgrade slot II
  266, // Permanent upgrade slot III
  267, // Permanent upgrade slot IV
  268, // Permanent upgrade slot V
  269, // Starspawn
  270, // Starsnow
  271, // Starterror
  272, // Starlove
  273, // Startrade
  274, // Angels
  275, // Archangels
  276, // Virtues
  277, // Dominions
  278, // Cherubim
  279, // Seraphim
  280, // God
  281, // Twin Gates of Transcendence
  282, // Heavenly luck
  283, // Lasting fortune
  284, // Decisive fate
  285, // Divine discount
  286, // Divine sales
  287, // Divine bakeries
  288, // Starter kit
  289, // Starter kitchen
  290, // Halo gloves
  291, // Kitten angels
  292, // Unholy bait
  293, // Sacrilegious corruption
  323, // How to bake your dragon
  325, // Chimera
  326, // Tin of butter cookies
  327, // Golden switch
  328, // Classic dairy selection
  329, // Fanciful dairy selection
  353, // Belphegor
  354, // Mammon
  355, // Abaddon
  356, // Satan
  357, // Asmodeus
  358, // Beelzebub
  359, // Lucifer
  360, // Golden cookie alert sound
  362, // Basic wallpaper assortment
  363, // Legacy
  364, // Elder spice
  365, // Residual luck
  368, // Five-finger discount
  393, // Synergies Vol. I
  394, // Synergies Vol. II
  395, // Heavenly cookies
  396, // Wrinkly cookies
  397, // Distilled essence of redoubled luck
  408, // Stevia Caelestis
  409, // Diabetica Daemonicus
  410, // Sucralosia Inutilis
  411, // Lucky digit
  412, // Lucky number
  413, // Lucky payout
  449, // Sugar baking
  450, // Sugar craving
  451, // Sugar aging process
  495, // Eye of the wrinkler
  496, // Inspired checklist
  505, // Label printer
  520, // Heralds
  537, // Keepsakes
  539, // Sugar crystal cookies
  540, // Box of maybe cookies
  541, // Box of not cookies
  542, // Box of pastries
  561, // Genius accounting
  562, // Shimmering veil
  591, // Cosmic beginner's luck
  592, // Reinforced membrane
  643, // Fortune cookies
  646, // Kitten wages
  647, // Pet the dragon
  717, // Cat ladies
  718, // Milkhelp&reg; lactose intolerance relief tablets
  719, // Aura gloves
  720 // Luminous gloves
];
