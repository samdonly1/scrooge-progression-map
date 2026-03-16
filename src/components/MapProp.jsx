import chestOpen from "../assets/map-props/chest-open.png";
import chestClosed from "../assets/map-props/chest-closed.png";
import coinPile from "../assets/map-props/coin-pile.png";
import crystalBlue from "../assets/map-props/crystal-blue.png";
import crystalPink from "../assets/map-props/crystal-pink.png";
import clusteredCrystals from "../assets/map-props/clustered-crystals.png";
import singleCoin from "../assets/map-props/single-coin.png";
import fewCoins from "../assets/map-props/few-coins.png";
import coinBigPile from "../assets/map-props/coin-big-pile.png";
import coinsBag from "../assets/map-props/coins-bag.png";

const propImageMap = {
  chestOpen,
  chestClosed,
  coinPile,
  crystalBlue,
  crystalPink,
  clusteredCrystals,
  singleCoin,
  fewCoins,
  coinBigPile,
  coinsBag,
};

const propStylePresets = {
  chestOpen: {
    brightness: 0.96,
    saturate: 0.93,
    contrast: 0.97,
    shadowWidth: "72%",
    shadowHeight: "18%",
    shadowY: "82%",
    shadowOpacity: 0.24,
    scale: 0.98,
  },
  chestClosed: {
    brightness: 0.96,
    saturate: 0.93,
    contrast: 0.97,
    shadowWidth: "72%",
    shadowHeight: "18%",
    shadowY: "82%",
    shadowOpacity: 0.24,
    scale: 0.98,
  },
  coinPile: {
    brightness: 0.95,
    saturate: 0.9,
    contrast: 0.96,
    shadowWidth: "84%",
    shadowHeight: "14%",
    shadowY: "86%",
    shadowOpacity: 0.18,
    scale: 0.98,
  },
  coinBigPile: {
    brightness: 0.95,
    saturate: 0.91,
    contrast: 0.97,
    shadowWidth: "86%",
    shadowHeight: "16%",
    shadowY: "84%",
    shadowOpacity: 0.22,
    scale: 0.98,
  },
  coinsBag: {
    brightness: 0.95,
    saturate: 0.9,
    contrast: 0.96,
    shadowWidth: "68%",
    shadowHeight: "16%",
    shadowY: "84%",
    shadowOpacity: 0.22,
    scale: 0.98,
  },
  crystalBlue: {
    brightness: 0.97,
    saturate: 0.93,
    contrast: 0.98,
    shadowWidth: "58%",
    shadowHeight: "12%",
    shadowY: "86%",
    shadowOpacity: 0.16,
    scale: 0.97,
  },
  crystalPink: {
    brightness: 0.97,
    saturate: 0.93,
    contrast: 0.98,
    shadowWidth: "58%",
    shadowHeight: "12%",
    shadowY: "86%",
    shadowOpacity: 0.16,
    scale: 0.97,
  },
  clusteredCrystals: {
    brightness: 0.97,
    saturate: 0.94,
    contrast: 0.98,
    shadowWidth: "64%",
    shadowHeight: "13%",
    shadowY: "85%",
    shadowOpacity: 0.18,
    scale: 0.97,
  },
  singleCoin: {
    brightness: 0.94,
    saturate: 0.88,
    contrast: 0.95,
    shadowWidth: "46%",
    shadowHeight: "10%",
    shadowY: "88%",
    shadowOpacity: 0.12,
    scale: 0.98,
  },
  fewCoins: {
    brightness: 0.94,
    saturate: 0.89,
    contrast: 0.95,
    shadowWidth: "60%",
    shadowHeight: "11%",
    shadowY: "87%",
    shadowOpacity: 0.14,
    scale: 0.98,
  },
};

export default function MapProp({ prop }) {
  const imageSrc = propImageMap[prop.type];
  if (!imageSrc) return null;

  const preset = propStylePresets[prop.type] || {};

  return (
    <div
      className={`map-prop-anchor ${prop.shine ? "has-shine" : ""} ${prop.aura ? "has-aura" : ""}`}
      style={{
        left: `${prop.x}%`,
        top: `${prop.y}%`,
        width: `${prop.width}px`,
        zIndex: prop.z || 3,
        "--rot": `${prop.rotate || 0}deg`,
        animationDelay: prop.delay || "0s",
        "--shadow-w": prop.shadowWidth || preset.shadowWidth || "70%",
        "--shadow-h": prop.shadowHeight || preset.shadowHeight || "16%",
        "--shadow-y": prop.shadowY || preset.shadowY || "84%",
        "--shadow-opacity": prop.shadowOpacity ?? preset.shadowOpacity ?? 0.2,
        "--prop-opacity": prop.opacity ?? 1,
        "--prop-scale": prop.scale ?? preset.scale ?? 1,
        "--prop-brightness": prop.brightness ?? preset.brightness ?? 0.97,
        "--prop-saturate": prop.saturate ?? preset.saturate ?? 0.95,
        "--prop-contrast": prop.contrast ?? preset.contrast ?? 0.98,
      }}
    >
      <span className="map-prop-ground-shadow" />

      {prop.shine ? <span className="prop-shine-rays" /> : null}
      {prop.aura ? <span className="prop-aura" /> : null}

      <img
        src={imageSrc}
        alt=""
        className={`map-prop ${prop.animate || ""}`}
        draggable="false"
      />
    </div>
  );
}