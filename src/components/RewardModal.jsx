export default function RewardModal({ node, onClose }) {
    if (!node) return null;
  
    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="reward-modal" onClick={(e) => e.stopPropagation()}>
          <div className="reward-badge">Checkpoint {node.label}</div>
          <h3>{node.reward}</h3>
          <p>
            This is the reward for checkpoint {node.label}. Later we will connect this
            with real backend reward logic and actual claim states.
          </p>
  
          <div className="modal-status">
            <span>Status</span>
            <strong className={`status-text ${node.state}`}>{node.state}</strong>
          </div>
  
          <div className="modal-actions">
            <button className="secondary-btn" onClick={onClose}>
              Close
            </button>
            <button className="primary-btn" disabled={node.state === "locked"}>
              {node.state === "claimed"
                ? "Already Claimed"
                : node.state === "locked"
                ? "Locked"
                : "Claim Reward"}
            </button>
          </div>
        </div>
      </div>
    );
  }