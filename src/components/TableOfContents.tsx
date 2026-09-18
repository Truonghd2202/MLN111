import React, { useState, useRef } from 'react';

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
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);

  const formatNumber = (n: number) => String(n).padStart(2, '0');

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : chapters.length - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < chapters.length - 1 ? prev + 1 : 0));
  };

  // Real-time Mouse Parallax Tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Keyboard navigation when hovering stage
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  // Mouse wheel navigation over 3D stage
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > 25 || Math.abs(e.deltaY) > 25) {
      if (e.deltaX > 0 || e.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const currentChapter = chapters[activeIdx] || chapters[0];
  const sparks = Array.from({ length: 12 });

  return (
    <section id="toc" className="toc-exhibition-scene classical-section">
      <div className="toc-header text-center">
        <span className="eyebrow-tag">🏛️ MỤC LỤC TRIỂN LÃM · BẢO TÀNG TƯ TƯỞNG</span>
        <h2 className="classical-title">MA TRẬN HÀNH TRÌNH TƯ TƯỞNG</h2>
        <p className="toc-intro">
          Xoay, click hoặc chọn các thẻ tư tưởng để khám phá nội dung bài học. Nhấn phím ◄ ► hoặc lăn chuột để đổi chương.
        </p>
      </div>

      <div
        className="toc-3d-floating-space"
        ref={stageRef}
        tabIndex={0}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        onWheel={handleWheel}
      >
        {/* Cosmic Nebula Glow & Particles */}
        <div className="toc-cosmic-glow" />
        <div className="toc-particle-layer">
          {sparks.map((_, i) => (
            <span
              key={i}
              className={`spark-dot spark-${i % 4}`}
              style={{
                left: `${(i * 17 + 8) % 90 + 5}%`,
                top: `${(i * 23 + 12) % 80 + 10}%`,
                animationDelay: `${(i * 0.4).toFixed(1)}s`,
              }}
            />
          ))}
        </div>

        {/* 3D Navigation Arrows */}
        <button className="toc-3d-nav-btn prev" onClick={handlePrev} title="Chương trước (◄)">
          <span>‹</span>
        </button>
        <button className="toc-3d-nav-btn next" onClick={handleNext} title="Chương sau (►)">
          <span>›</span>
        </button>

        {/* 3D Floating Stage with Gyro Mouse Tilt */}
        <div
          className="toc-floating-stage"
          style={{
            transform: `rotateX(${mousePos.y * -14}deg) rotateY(${mousePos.x * 22}deg)`,
          }}
        >
          {chapters.map((ch, idx) => {
            const offset = idx - activeIdx;
            const absOffset = Math.abs(offset);

            // Curved 3D Arc Orbital Math
            const angleDeg = offset * 24;
            const angleRad = (angleDeg * Math.PI) / 180;
            const radius = 480;

            const translateX = Math.sin(angleRad) * radius + mousePos.x * (offset === 0 ? 15 : 5);
            const translateZ =
              offset === 0
                ? 280
                : Math.cos(angleRad) * radius - radius + 120 - absOffset * 40;

            const translateY =
              offset === 0
                ? -25 + mousePos.y * -10
                : (offset % 2 === 0 ? 15 : -15) + absOffset * 8;

            const rotateY = -angleDeg + mousePos.x * 12;
            const rotateX = offset === 0 ? mousePos.y * -15 : (offset % 2 === 0 ? 6 : -6);
            const rotateZ = offset * -3.5;

            const opacity =
              offset === 0 ? 1 : absOffset === 1 ? 0.88 : absOffset === 2 ? 0.58 : absOffset === 3 ? 0.25 : 0;

            const scale = offset === 0 ? 1.08 : 1 - Math.min(0.4, absOffset * 0.12);
            const zIndex = 100 - absOffset * 10;
            const isCenter = offset === 0;

            return (
              <div
                key={ch.id}
                className={`toc-floating-card classical-frame ${isCenter ? 'is-floating-active' : ''}`}
                style={{
                  transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                  pointerEvents: absOffset > 3 ? 'none' : 'auto',
                  animationDelay: `${idx * 0.3}s`,
                }}
                onClick={() => {
                  if (isCenter) {
                    onSelectChapter(ch.id);
                  } else {
                    setActiveIdx(idx);
                  }
                }}
              >
                <span className="gold-corner tl" />
                <span className="gold-corner tr" />
                <span className="gold-corner bl" />
                <span className="gold-corner br" />

                {/* Card Levitation Aura */}
                <div className="levitation-aura" />

                {/* Top Badge */}
                <div className="card-top-badge">
                  <span className="badge-number">CHƯƠNG {formatNumber(idx)}</span>
                  <span className="badge-pages">{ch.pages}</span>
                </div>

                {/* Artwork Image Container */}
                <div className="card-img-container">
                  {ch.image ? (
                    <img src={ch.image} alt={ch.label} className="card-artwork classical-engraving-img" />
                  ) : (
                    <div className="card-placeholder-art">🏛️</div>
                  )}
                  <div className="card-img-shine" />
                </div>

                {/* Card Content Body */}
                <div className="card-content-body">
                  <h3 className="card-chapter-title">{ch.label}</h3>
                  <p className="card-chapter-desc">{ch.desc}</p>
                </div>

                {/* Action CTA when active */}
                {isCenter && (
                  <div className="card-action-bar">
                    <button
                      className="btn-discover-chapter"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectChapter(ch.id);
                      }}
                    >
                      TRUY CẬP CHƯƠNG NÀY ➔
                    </button>
                  </div>
                )}

                {/* Anti-gravity Floating Shadow */}
                <div className="anti-gravity-shadow" />
              </div>
            );
          })}
        </div>

        {/* Floating Chapter Pills Bar */}
        <div className="toc-3d-dots-bar">
          {chapters.map((ch, idx) => (
            <button
              key={ch.id}
              className={`toc-dot-item ${activeIdx === idx ? 'active' : ''}`}
              onClick={() => setActiveIdx(idx)}
            >
              <span className="dot-num">{formatNumber(idx)}</span>
              <span className="dot-title">{ch.label.split('. ')[1] || ch.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Chapter Summary Inspector Box */}
      <div className="toc-active-summary-card classical-frame">
        <span className="gold-corner tl" />
        <span className="gold-corner tr" />
        <span className="gold-corner bl" />
        <span className="gold-corner br" />

        <div className="summary-left">
          <span className="summary-chapter-tag">CHƯƠNG HIỆN CHỌN: {formatNumber(activeIdx)} / {formatNumber(chapters.length - 1)}</span>
          <h4 className="summary-title">{currentChapter.label}</h4>
          <p className="summary-desc">{currentChapter.desc}</p>
        </div>

        <div className="summary-right">
          <span className="summary-pages-badge">📍 {currentChapter.pages}</span>
          <button className="summary-action-btn" onClick={() => onSelectChapter(currentChapter.id)}>
            KHÁM PHÁ CHƯƠNG NÀY ➔
          </button>
        </div>
      </div>
    </section>
  );
};


