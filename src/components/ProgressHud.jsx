export default function ProgressHud({
    currentST,
    nextCheckpointST,
    currentNode,
    totalNodes,
  }) {
    const progressPercent = Math.min((currentNode / totalNodes) * 100, 100);
  
    return (
      <section className="progress-hud">
        <div className="hud-card">
          <span className="hud-label">Current ST</span>
          <strong>{currentST.toLocaleString()}</strong>
        </div>
  
        <div className="hud-card">
          <span className="hud-label">Next Checkpoint</span>
          <strong>{nextCheckpointST.toLocaleString()} ST</strong>
        </div>
  
        <div className="hud-card">
          <span className="hud-label">Progress</span>
          <strong>
            {currentNode} / {totalNodes}
          </strong>
        </div>
  
        <div className="hud-progress-bar">
          <div className="hud-progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
      </section>
    );
  }