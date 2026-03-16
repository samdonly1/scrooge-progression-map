import checkpointDefault from "../assets/checkpoints/checkpoint-default.png";
import checkpointActive from "../assets/checkpoints/checkpoint-active.png";
import checkpointLocked from "../assets/checkpoints/checkpoint-locked.png";

function getCheckpointImage(state) {
  if (state === "active") return checkpointActive;
  if (state === "locked") return checkpointLocked;
  return checkpointDefault;
}

export default function CheckpointNode({ node, onClick, isReached }) {
  const checkpointImage = getCheckpointImage(node.state);

  return (
    <button
      className={`checkpoint-node ${node.state} ${isReached ? "reached" : "unreached"}`}
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
      onClick={() => onClick(node)}
      aria-label={`Checkpoint ${node.label}`}
      type="button"
    >
      <img
        src={checkpointImage}
        alt=""
        className="checkpoint-node-image"
        draggable="false"
      />
      <span className="checkpoint-node-label">{node.label}</span>
    </button>
  );
}