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

export default function MapProp({ prop }) {
  const imageSrc = propImageMap[prop.type];
  if (!imageSrc) return null;

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
      }}
    >
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