import InitCache from '../Cache/CacheInit';
import LoopCache from '../Cache/CacheLoop';
import CacheNoGoldSwitchCPS from '../Cache/CPS/NoGoldSwitchCPS';
import CacheSellAllForChoEgg from '../Cache/CPS/SellChoEgg';
import CacheDragonCost from '../Cache/Dragon/Dragon';
import CachePantheonGods from '../Cache/PantheonGods/CacheGods';
import { CacheBuildingsPrices, CacheIncome } from '../Cache/PriceAndIncome/PriceAndIncome';
import { CacheChain } from '../Cache/Stats/ChainCookies';
import CacheAllMissingUpgrades from '../Cache/Stats/MissingUpgrades';
import CacheSeasonSpec from '../Cache/Stats/Reindeer';
import { CacheGoldenAndWrathCookiesMults, CacheStatsCookies } from '../Cache/Stats/Stats';
import AllAmountTillNextAchievement from '../Cache/TillNextAchievement/AllAmountTillNextAchievement';
import {
  CacheDoRemakeBuildPrices,
  CacheHadBuildAura,
  CacheMinPPAmount,
  CacheMinPPBulk,
  CacheMinPPidx,
  CacheMinBlueIdx,
  CacheMinGrayIdx,
  CacheMinBluePrice,
  CacheMinGrayPrice
} from '../Cache/VariablesAndData';
import UpdateAscendState from '../Disp/HelperFunctions/UpdateAscendState';
import { LastAscendState } from '../Disp/VariablesAndData';
import InitData from '../Sim/InitializeData/InitData';
import { SimDoSims } from '../Sim/VariablesAndData';
import CheckGardenTick from './CheckStates/Garden';
import CheckGoldenCookie from './CheckStates/GoldenCookie';
import CheckMagicMeter from './CheckStates/Grimoire';
import CheckSeasonPopup from './CheckStates/Season';
import CheckTickerFortune from './CheckStates/Ticker';
import CheckWrinklerCount from './CheckStates/Wrinkler';
import { LastModCount } from './VariablesAndData';

/**
 * Main loop of Cookie Monster
 * CM.init registers it to the "logic" hook provided by the modding api
 */
export default function CMLoopHook() {
  if (LastAscendState !== Game.OnAscend) {
    LastAscendState = Game.OnAscend;
    UpdateAscendState();
  }
  if (!Game.OnAscend && Game.AscendTimer === 0) {
    // Check if any other mods have been loaded
    if (LastModCount !== Object.keys(Game.mods).length) {
      InitData();
      InitCache();
      LastModCount = Object.keys(Game.mods).length;
    }

    // CM.Sim.DoSims is set whenever CPS has changed
    if (SimDoSims) {
      AllAmountTillNextAchievement(true);
      CacheIncome();

      CacheNoGoldSwitchCPS(); // Needed first
      CacheGoldenAndWrathCookiesMults();
      CacheStatsCookies();
      CacheAllMissingUpgrades();
      CacheChain();
      CacheDragonCost();
      CachePantheonGods();

      CacheSeasonSpec();
      CacheSellAllForChoEgg();

      SimDoSims = 0;
    }

    // Check for aura change to recalculate buildings prices
    const hasBuildAura = Game.auraMult('Fierce Hoarder') > 0;
    if (!CacheHadBuildAura && hasBuildAura) {
      CacheHadBuildAura = true;
      CacheDoRemakeBuildPrices = 1;
    } else if (CacheHadBuildAura && !hasBuildAura) {
      CacheHadBuildAura = false;
      CacheDoRemakeBuildPrices = 1;
    }

    if (CacheDoRemakeBuildPrices) {
      CacheBuildingsPrices();
      CacheDoRemakeBuildPrices = 0;
    }

    LoopCache();

    // Check all changing minigames and game-states
    CheckTickerFortune();
    CheckSeasonPopup();
    CheckGardenTick();
    CheckMagicMeter();
    CheckWrinklerCount();

    /*
     * If there exists a blue upgrade, buy it or save up for it at the expense
     * of a building upgrade.
     */
    if (CacheMinBlueIdx >= 0 && CacheMinBluePrice <= Game.cookies) {
      console.log('Buing upgrade "' + Game.UpgradesById[CacheMinBlueIdx].name + '" for ' + CacheMinBluePrice + 'cookies.');  // eslint-disable-line prefer-template
      Game.UpgradesById[CacheMinBlueIdx].buy(1);
      CacheDoRemakeBuildPrices = 1;
    } else if (CacheMinBlueIdx < 0 && CacheMinPPAmount <= Game.cookies) {
      console.log('Buying ' + CacheMinPPBulk + ' of "' + Game.Objects[CacheMinPPidx].name + '" for ' + CacheMinPPAmount + ' cookies.'); // eslint-disable-line prefer-template
      Game.Objects[CacheMinPPidx].buy(CacheMinPPBulk);
      CacheDoRemakeBuildPrices = 1;
    }
    /*
     * If there exists a gray upgrade, and we did not actively buy a blue upgrade
     * or a building, then see if we can afford the gray upgrade and get it.
     *
    */
    if (CacheDoRemakeBuildPrices === 0 && CacheMinGrayIdx >= 0 && CacheMinGrayPrice <= Game.cookies) {
      console.log('Buying gray upgrade "' + Game.UpgradesById[CacheMinGrayIdx].name + '" for ' + CacheMinGrayPrice + 'cookies.');  // eslint-disable-line prefer-template
      Game.UpgradesById[CacheMinGrayIdx].buy(1);
      CacheDoRemakeBuildPrices = 1;
    }
  }
  // To remove Timers when ascending
  CheckGoldenCookie();
}
