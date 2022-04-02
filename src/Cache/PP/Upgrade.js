import GetWrinkConfigBank from '../../Disp/HelperFunctions/GetWrinkConfigBank';
import {
  CacheUpgrades,
  CacheMinBlueIdx,  // eslint-disable-line no-unused-vars
  CacheMinGrayIdx,  // eslint-disable-line no-unused-vars
  CacheMinBluePrice,
  CacheMinGrayPrice,
  CacheUpgradeExclude
} from '../VariablesAndData';
import {
  ColourBlue,
  ColourGray
} from '../../Disp/VariablesAndData';
import ColourOfPP from './ColourOfPP';

/**
 * This functions caches the PP of each building it saves all date in CM.Cache.Upgrades
 * It is called by CM.Cache.CachePP()
 */
export default function CacheUpgradePP() {
  CacheMinBlueIdx = -1;
  CacheMinGrayIdx = -1;
  CacheMinBluePrice = Infinity;
  CacheMinGrayPrice = Infinity;
  Object.keys(CacheUpgrades).forEach((i) => {
    if (Game.cookiesPs) {
      CacheUpgrades[i].pp =
        Math.max(Game.Upgrades[i].getPrice() - (Game.cookies + GetWrinkConfigBank()), 0) /
          Game.cookiesPs +
        Game.Upgrades[i].getPrice() / CacheUpgrades[i].bonus;
    } else CacheUpgrades[i].pp = Game.Upgrades[i].getPrice() / CacheUpgrades[i].bonus;
    if (Number.isNaN(CacheUpgrades[i].pp)) CacheUpgrades[i].pp = Infinity;

    const price = Game.Upgrades[i].getPrice()
    CacheUpgrades[i].colour = ColourOfPP(CacheUpgrades[i], price);

    if (!CacheUpgradeExclude.includes(CacheUpgrades[i].id)) {
      if (CacheUpgrades[i].colour === ColourBlue && price < CacheMinBluePrice) {
        CacheMinBlueIdx = CacheUpgrades[i].id;
        CacheMinBluePrice = price;
      } else if (CacheUpgrades[i].colour === ColourGray && price < CacheMinGrayPrice) {
        CacheMinGrayIdx = CacheUpgrades[i].id;
        CacheMinGrayPrice = price;
      }
    }
  });
}
