import React, { useState } from 'react';

interface ChapterItem {
  id: string;
  label: string;
  desc: string;
  image?: string;
  pages: string;
}

interface TableOfContentsProps {
  chapters: ChapterItem[];
  onSelectChapter: (id: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  chapters,
  onSelectChapter,
}) => {
  // Default to Chapter 0 (first chapter) so there is no empty dashed placeholder!
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  const formatNumber = (n: number) => String(n).padStart(2, '0');

  return (
    <section id="toc" className="toc-exhibition-scene classical-section">
      <div className="toc-header text-center">
        <span className="eyebrow-tag">🏛️ MỤC LỤC TRIỂN LÃM · KHÁM PHÁ CÁC CHƯƠNG</span>
        <h2 className="classical-title">CÁC HÀNH TRÌNH TƯ TƯỞNG</h2>
        <p className="toc-intro">
          Rê chuột hoặc chọn vào từng chương để xem trước nội dung chính và hình ảnh tư liệu.
        </p>
      </div>

      <div className="toc-grid-layout">
        {/* Left List of Chapters */}
        <div className="toc-list">
          {chapters.map((ch, idx) => (
            <div
              key={ch.id}
              className={`toc-row ${hoveredIdx === idx ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onClick={() => onSelectChapter(ch.id)}
            >
              <span className="toc-num">{formatNumber(idx + 1)}</span>
              <div className="toc-row-info">
                <span className="toc-row-title">{ch.label}</span>
                <span className="toc-row-pages">{ch.pages}</span>
              </div>
              <span className="toc-arrow">↗</span>
            </div>
          ))}
        </div>

        {/* Right Preview Card - Always Active */}
        <div className="toc-preview-container">
          {chapters[hoveredIdx] && (
            <div className="toc-preview-card classical-frame">
              <span className="gold-corner tl" />
              <span className="gold-corner tr" />
              <span className="gold-corner bl" />
              <span className="gold-corner br" />

              {chapters[hoveredIdx].image && (
                <div className="preview-img-wrapper">
                  <img
                    src={chapters[hoveredIdx].image}
                    alt={chapters[hoveredIdx].label}
                    className="preview-img classical-engraving-img"
                  />
                </div>
              )}
              <div className="preview-body">
                <span className="preview-tag">CHƯƠNG {formatNumber(hoveredIdx + 1)}</span>
                <h3>{chapters[hoveredIdx].label}</h3>
                <p>{chapters[hoveredIdx].desc}</p>
                <div className="preview-footer-note">
                  <span>TRANG TƯ LIỆU: {chapters[hoveredIdx].pages}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
