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
import bottomTreasureNew from "../assets/map-props/bottom-treasure-new.png";
import bottomTreasureNewClosed from "../assets/map-props/bottom-treasure-new-closed.png";
import coinHeapTopRight from "../assets/map-props/coin-heap-top-right.png";
import coinHeapBottomRight from "../assets/map-props/coin-heap-bottom-right.png";
import coinHeapCentreTop from "../assets/map-props/coin-heap-centre-top.png";
import coinHeapCentreTopOpen from "../assets/map-props/coin-heap-centre-top-open.png";
import sunImage from "../assets/map-props/sun-image.png";

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
  bottomTreasureCustom: bottomTreasureNew,
  bottomTreasureCustomClosed: bottomTreasureNewClosed,
  coinHeapTopRight,
  coinHeapBottomRight,
  coinHeapCentreTop,
  coinHeapCentreTopOpen,
  sunImage,
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
  bottomTreasureCustom: {
    brightness: 0.95,
    saturate: 0.9,
    contrast: 0.96,
    shadowWidth: "78%",
    shadowHeight: "16%",
    shadowY: "86%",
    shadowOpacity: 0.2,
    scale: 0.98,
  },
  bottomTreasureCustomClosed: {
    brightness: 0.95,
    saturate: 0.9,
    contrast: 0.96,
    shadowWidth: "78%",
    shadowHeight: "16%",
    shadowY: "86%",
    shadowOpacity: 0.2,
    scale: 0.98,
  },
  coinHeapTopRight: {
    brightness: 0.95,
    saturate: 0.9,
    contrast: 0.96,
    shadowWidth: "82%",
    shadowHeight: "14%",
    shadowY: "86%",
    shadowOpacity: 0.18,
    scale: 0.98,
  },
  coinHeapBottomRight: {
    brightness: 0.95,
    saturate: 0.9,
    contrast: 0.96,
    shadowWidth: "86%",
    shadowHeight: "14%",
    shadowY: "86%",
    shadowOpacity: 0.18,
    scale: 0.98,
  },
  coinHeapCentreTop: {
    brightness: 0.95,
    saturate: 0.9,
    contrast: 0.96,
    shadowWidth: "84%",
    shadowHeight: "14%",
    shadowY: "86%",
    shadowOpacity: 0.18,
    scale: 0.98,
  },
  coinHeapCentreTopOpen: {
    brightness: 0.95,
    saturate: 0.9,
    contrast: 0.96,
    shadowWidth: "84%",
    shadowHeight: "14%",
    shadowY: "86%",
    shadowOpacity: 0.18,
    scale: 0.98,
  },
  sunImage: {
    brightness: 1,
    saturate: 1,
    contrast: 1,
    shadowWidth: "0%",
    shadowHeight: "0%",
    shadowY: "0%",
    shadowOpacity: 0,
    scale: 1,
  },
};

export default function MapProp({ prop }) {
  const imageSrc = propImageMap[prop.type];
  const preset = propStylePresets[prop.type] || {};

  const swapClosedSrc = prop.swapImages?.closed
    ? propImageMap[prop.swapImages.closed]
    : null;
  const swapOpenSrc = prop.swapImages?.open
    ? propImageMap[prop.swapImages.open]
    : null;

  if (prop.swapImages && (!swapClosedSrc || !swapOpenSrc)) return null;
  if (!prop.swapImages && !imageSrc) return null;

  return (
    <div
      className={`map-prop-anchor ${prop.shine ? "has-shine" : ""} ${prop.aura ? "has-aura" : ""} ${prop.beam ? "has-beam" : ""} ${prop.type === "sunImage" ? "map-prop-anchor-sun" : ""}`}
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
        "--beam-width": prop.beamWidth || "150%",
        "--beam-height": prop.beamHeight || "125%",
        "--beam-bottom": prop.beamBottom || "34%",
        "--beam-opacity": prop.beamOpacity ?? 0.42,
        "--beam-core-opacity": prop.beamCoreOpacity ?? 0.26,
        "--beam-rays-size": prop.beamRaysSize || "240%",
        "--beam-rays-height": prop.beamRaysHeight || "175%",
        "--beam-rays-bottom": prop.beamRaysBottom || "38%",
        "--beam-rays-opacity": prop.beamRaysOpacity ?? 0.42,
      }}
    >
      {prop.beam ? <span className="map-prop-light-rays" /> : null}
      {prop.beam ? <span className="map-prop-light-beam" /> : null}
      <span className="map-prop-ground-shadow" />

      {prop.shine ? <span className="prop-shine-rays" /> : null}
      {prop.aura ? <span className="prop-aura" /> : null}

      {prop.swapImages ? (
        <div className="map-prop-swap-shell">
          <img
            src={swapClosedSrc}
            alt=""
            className="map-prop map-prop-swap-sizer"
            draggable="false"
          />
          <img
            src={swapClosedSrc}
            alt=""
            className={`map-prop map-prop-swap-layer ${prop.animate || ""} ${prop.isOpen ? "is-hidden" : "is-visible"}`}
            draggable="false"
          />
          <img
            src={swapOpenSrc}
            alt=""
            className={`map-prop map-prop-swap-layer ${prop.animate || ""} ${prop.isOpen ? "is-visible" : "is-hidden"}`}
            draggable="false"
          />
        </div>
      ) : (
        <img
          src={imageSrc}
          alt=""
          className={`map-prop ${prop.animate || ""} ${prop.type === "sunImage" ? "map-prop-sun" : ""}`}
          draggable="false"
        />
      )}
    </div>
  );
}