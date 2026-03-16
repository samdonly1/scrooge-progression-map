export default function MapHeader({ title, subtitle, seasonLabel, resetText }) {
    return (
      <header className="map-header">
        <div className="title-wrap">
          <div className="season-chip">{seasonLabel}</div>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
  
        <div className="reset-chip">{resetText}</div>
      </header>
    );
  }