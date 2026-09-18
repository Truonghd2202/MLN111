import React, { useState } from 'react';

interface SideData {
  title: string;
  subtitle?: string;
  text: string;
  detail?: string;
  points?: string[];
  tag?: string;
}

interface SplitComparisonProps {
  heading: string;
  deck?: string;
  leftSide: SideData;
  rightSide: SideData;
  image?: string;
  note?: string;
}

export const SplitComparison: React.FC<SplitComparisonProps> = ({
  heading,
  deck,
  leftSide,
  rightSide,
  image,
  note,
}) => {
  const [activeSide, setActiveSide] = useState<'left' | 'right' | null>(null);

  return (
    <section className="split-comparison-scene">
      <div className="split-header">
        <span className="eyebrow-tag">SO SÁNH BIỆN CHỨNG</span>
        <h2>{heading}</h2>
        {deck && <p className="split-deck">{deck}</p>}
      </div>

      <div className="split-viewport-grid">
        {/* Left Field */}
        <div
          className={`split-field field-left ${activeSide === 'left' ? 'highlighted' : ''}`}
          onMouseEnter={() => setActiveSide('left')}
          onMouseLeave={() => setActiveSide(null)}
        >
          {leftSide.tag && <span className="field-tag">{leftSide.tag}</span>}
          <h3 className="field-title">{leftSide.title}</h3>
          {leftSide.subtitle && <h4 className="field-subtitle">{leftSide.subtitle}</h4>}
          <p className="field-text">{leftSide.text}</p>
          {leftSide.detail && <p className="field-detail">{leftSide.detail}</p>}
          {leftSide.points && (
            <ul className="field-points-list">
              {leftSide.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Central Separator */}
        <div className="split-center-axis">
          <span className="axis-symbol">VS</span>
        </div>

        {/* Right Field */}
        <div
          className={`split-field field-right ${activeSide === 'right' ? 'highlighted' : ''}`}
          onMouseEnter={() => setActiveSide('right')}
          onMouseLeave={() => setActiveSide(null)}
        >
          {rightSide.tag && <span className="field-tag">{rightSide.tag}</span>}
          <h3 className="field-title">{rightSide.title}</h3>
          {rightSide.subtitle && <h4 className="field-subtitle">{rightSide.subtitle}</h4>}
          <p className="field-text">{rightSide.text}</p>
          {rightSide.detail && <p className="field-detail">{rightSide.detail}</p>}
          {rightSide.points && (
            <ul className="field-points-list">
              {rightSide.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {image && (
        <div className="split-inline-image">
          <img src={image} alt={heading} className="split-img" />
        </div>
      )}

      {note && (
        <div className="split-footnote">
          <span className="note-badge">KẾT LUẬN QUAN TRỌNG:</span>
          <p>{note}</p>
        </div>
      )}
    </section>
  );
};
