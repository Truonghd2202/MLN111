import React, { useState } from 'react';

interface TriptychPanel {
  num: string;
  title: string;
  text: string;
  detail?: string;
  source?: string;
}

interface TriptychSectionProps {
  heading: string;
  deck?: string;
  panels: TriptychPanel[];
  triptychImage?: string;
}

export const TriptychSection: React.FC<TriptychSectionProps> = ({
  heading,
  deck,
  panels,
  triptychImage,
}) => {
  const [activeHoverIdx, setActiveHoverIdx] = useState<number | null>(null);

  return (
    <section className="triptych-museum-scene">
      <div className="triptych-header">
        <span className="eyebrow-tag">BA HÌNH THỨC ĐẤU TRANH</span>
        <h2>{heading}</h2>
        {deck && <p className="triptych-deck">{deck}</p>}
      </div>

      {triptychImage && (
        <div className="triptych-hero-image classical-frame">
          <span className="gold-corner tl" />
          <span className="gold-corner tr" />
          <span className="gold-corner bl" />
          <span className="gold-corner br" />

          <img src={triptychImage} alt={heading} className="triptych-img classical-engraving-img" />
        </div>
      )}

      {/* 3 Column Museum Panels */}
      <div className="triptych-grid-container">
        {panels.map((p, idx) => (
          <div
            key={idx}
            className={`triptych-panel-card ${activeHoverIdx === idx ? 'hovered' : ''}`}
            onMouseEnter={() => setActiveHoverIdx(idx)}
            onMouseLeave={() => setActiveHoverIdx(null)}
          >
            <div className="panel-num-badge">{p.num || `0${idx + 1}`}</div>
            <h3 className="panel-heading">{p.title}</h3>
            <p className="panel-body-text">{p.text}</p>
            {p.detail && <p className="panel-detail-text">{p.detail}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};
