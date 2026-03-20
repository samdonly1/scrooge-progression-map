import { useEffect, useState } from "react";
import ebenzerFront from "../assets/characters/ebenzer-front.png";
import ebenzerWalk1 from "../assets/characters/ebenzer-walk-1.png";
import ebenzerWalk2 from "../assets/characters/ebenzer-walk-2.png";

export default function MapCharacter({
  x,
  y,
  isTravelling = false,
  isFrontFacing = false,
  flipX = false,
}) {
  const [walkFrame, setWalkFrame] = useState(0);

  useEffect(() => {
    if (!isTravelling) {
      setWalkFrame(0);
      return;
    }

    const interval = setInterval(() => {
      setWalkFrame((prev) => (prev === 0 ? 1 : 0));
    }, 180);

    return () => clearInterval(interval);
  }, [isTravelling]);

  const activeCharacter = isFrontFacing
    ? ebenzerFront
    : walkFrame === 0
    ? ebenzerWalk1
    : ebenzerWalk2;

  return (
    <div
      className="map-character"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -92%) ${flipX ? "scaleX(-1)" : "scaleX(1)"}`,
        transition: isTravelling
          ? "left 900ms linear, top 900ms linear, transform 120ms linear"
          : "left 700ms ease-in-out, top 700ms ease-in-out, transform 120ms linear",
      }}
    >
      <img
        src={activeCharacter}
        alt="Ebenezer character"
        className="map-character-image"
        style={{
          animation: isTravelling ? "scroogeBob 1.1s ease-in-out infinite" : "none",
        }}
      />
    </div>
  );
}