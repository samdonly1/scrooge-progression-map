import scroogeCharacter from "../assets/characters/scrooge-mcduck.png";

export default function MapCharacter({ x, y }) {
  return (
    <div
      className="map-character"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <img src={scroogeCharacter} alt="Scrooge character" className="map-character-image" />
    </div>
  );
}