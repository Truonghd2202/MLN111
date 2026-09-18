import React from 'react';

interface ChapterDividerProps {
  number: string;
  title: string;
  subtitle?: string;
  image?: string;
  id: string;
  theme?: 'dark' | 'wine' | 'olive' | 'charcoal';
}

export const ChapterDivider: React.FC<ChapterDividerProps> = ({
  number,
  title,
  subtitle,
  image,
  id,
  theme = 'dark',
}) => {
  return (
    <div id={id} className={`chapter-divider-bridge theme-${theme}`}>
      {image && (
        <div className="chapter-bg-art">
          <img src={image} alt={title} className="chapter-bg-img" />
          <div className="chapter-bg-overlay" />
        </div>
      )}

      <div className="chapter-divider-content">
        <span className="chapter-big-num">{number}</span>
        <h2 className="chapter-divider-title">{title}</h2>
        {subtitle && <p className="chapter-divider-subtitle">{subtitle}</p>}
        <div className="scroll-next-hint">
          <span className="line-down" />
          <span className="hint-text">TIẾP TỤC NỘI DUNG CHƯƠNG ↓</span>
        </div>
      </div>
    </div>
  );
};
