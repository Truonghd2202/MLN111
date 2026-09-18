import React from 'react';

interface HeroExhibitionProps {
  coverImage: string;
  onStart: () => void;
}

export const HeroExhibition: React.FC<HeroExhibitionProps> = ({
  coverImage,
  onStart,
}) => {
  return (
    <section id="hero" className="hero-exhibition-scene">
      {/* Dynamic Background Glow & Ambient Light */}
      <div className="hero-ambient-glow" aria-hidden="true" />
      
      {/* Viewport Canvas Grid */}
      <div className="hero-grid-canvas">
        
        {/* Left/Top Content Layer */}
        <div className="hero-typography-layer">
          <div className="hero-eyebrow">
            <span className="eyebrow-badge">TRIẾT HỌC MÁC – LÊNIN</span>
            <span className="eyebrow-chapter">CHƯƠNG III · GIÁO TRÌNH DỰA TRÊN TƯ LIỆU</span>
          </div>

          <h1 className="hero-title-massive">
            <span className="title-row-1">GIAI CẤP</span>
            <span className="title-row-amp">&amp;</span>
            <span className="title-row-2">DÂN TỘC</span>
          </h1>

          <p className="hero-subtitle-deck">
            Một khảo luận trực quan và trải nghiệm học thuật tương tác về quan hệ giai cấp,
            đấu tranh giai cấp và sự hình thành dân tộc trong triết học Mác – Lênin.
          </p>

          <div className="hero-cta-group">
            <button className="btn-hero-primary" onClick={onStart}>
              KHÁM PHÁ TRIỂN LÃM ↓
            </button>
            <a href="#giai-cap" className="btn-hero-secondary">
              MỤC LỤC CHƯƠNG
            </a>
          </div>
        </div>

        {/* Overlapping Classical Sculpture / Engraving Artwork */}
        <div className="hero-artwork-container">
          <div className="hero-artwork-wrapper classical-frame">
            <span className="gold-corner tl" />
            <span className="gold-corner tr" />
            <span className="gold-corner bl" />
            <span className="gold-corner br" />

            <img
              src={coverImage}
              alt="Bức khắc cổ điển Giai cấp và Dân tộc"
              className="hero-artwork-img classical-engraving-img"
            />
          </div>
        </div>

      </div>

      {/* Bottom Floating Metadata */}
      <div className="hero-bottom-bar">
        <div className="meta-left">
          <span>GIÁO TRÌNH CHÍNH THỨC</span>
          <span className="meta-divider">•</span>
          <span>TRANG 179 — 206</span>
        </div>
        <div className="meta-right">
          <span className="scroll-indicator">CUỘN ĐỂ KHÁM PHÁ KHÔNG GIAN ↓</span>
        </div>
      </div>
    </section>
  );
};
