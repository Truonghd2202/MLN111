import React, { useState } from 'react';

interface ConceptPoint {
  title: string;
  text: string;
  detail?: string;
  textbookPage?: string;
  source?: string;
  label?: string;
}

interface SystemDiagramProps {
  heading: string;
  deck?: string;
  points: ConceptPoint[];
  atlasImage?: string;
  onOpenLightbox?: (src: string, alt: string, caption?: string) => void;
}

export const SystemDiagram: React.FC<SystemDiagramProps> = ({
  heading,
  deck,
  points,
  atlasImage,
  onOpenLightbox,
}) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="system-diagram-scene classical-section">
      <div className="diagram-header text-center">
        <span className="eyebrow-tag">🏛️ HỆ THỐNG KHÁI NIỆM TRỌNG YẾU · TRIẾT HỌC CỔ ĐIỂN</span>
        <h2 className="classical-title">{heading}</h2>
        {deck && <p className="diagram-deck">{deck}</p>}
      </div>

      <div className="diagram-interactive-workspace-symmetrical">
        {/* Left Column: Symmetrical Interactive Node Canvas */}
        <div className="diagram-canvas-box classical-frame">
          <span className="gold-corner tl" />
          <span className="gold-corner tr" />
          <span className="gold-corner bl" />
          <span className="gold-corner br" />

          <svg className="svg-connector-lines" viewBox="0 0 600 500" aria-hidden="true">
            <line x1="300" y1="250" x2="130" y2="120" className={`connector-line ${activeIdx === 0 ? 'active' : ''}`} />
            <line x1="300" y1="250" x2="470" y2="120" className={`connector-line ${activeIdx === 1 ? 'active' : ''}`} />
            <line x1="300" y1="250" x2="130" y2="380" className={`connector-line ${activeIdx === 2 ? 'active' : ''}`} />
            <line x1="300" y1="250" x2="470" y2="380" className={`connector-line ${activeIdx === 3 ? 'active' : ''}`} />
          </svg>

          {/* Central Hub */}
          <div className="hub-node classical-hub">
            <span className="hub-tag">ĐỊNH NGHĨA LÊNIN</span>
            <h3>GIAI CẤP</h3>
            <small>TẬP ĐOÀN NGƯỜI XÃ HỘI</small>
          </div>

          {/* Symmetrical Orbit Buttons */}
          <button
            className={`orbit-node node-tl ${activeIdx === 0 ? 'selected' : ''}`}
            onClick={() => setActiveIdx(0)}
          >
            <span className="node-num">01</span>
            <span className="node-label">{points[0]?.title || 'TƯ LIỆU SẢN XUẤT'}</span>
          </button>

          <button
            className={`orbit-node node-tr ${activeIdx === 1 ? 'selected' : ''}`}
            onClick={() => setActiveIdx(1)}
          >
            <span className="node-num">02</span>
            <span className="node-label">{points[1]?.title || 'TỔ CHỨC LAO ĐỘNG'}</span>
          </button>

          <button
            className={`orbit-node node-bl ${activeIdx === 2 ? 'selected' : ''}`}
            onClick={() => setActiveIdx(2)}
          >
            <span className="node-num">03</span>
            <span className="node-label">{points[2]?.title || 'PHÂN PHỐI CỦA CẢI'}</span>
          </button>

          <button
            className={`orbit-node node-br ${activeIdx === 3 ? 'selected' : ''}`}
            onClick={() => setActiveIdx(3)}
          >
            <span className="node-num">04</span>
            <span className="node-label">{points[3]?.title || 'ĐỊA VỊ XÃ HỘI'}</span>
          </button>
        </div>

        {/* Right Column: Symmetrical Classical Artwork & Inspector Display */}
        <div className="diagram-right-column">
          {atlasImage && (
            <div
              className="diagram-classical-art-card classical-frame"
              onClick={() =>
                onOpenLightbox &&
                onOpenLightbox(
                  atlasImage,
                  'Hình tượng Atlas đỡ vòm trời — Biểu tượng kết cấu và tải trọng xã hội',
                  'Khắc họa thạch cao Atlas đại diện cho trọng tải của các quan hệ sản xuất và tầng lớp xã hội.'
                )
              }
            >
              <img src={atlasImage} alt="Atlas tượng trưng kết cấu xã hội" className="diagram-art-img" />
              <div className="art-overlay-tag">🌍 THẦN THOẠI ATLAS · BIỂU TƯỢNG TẢI TRỌNG XÃ HỘI</div>
            </div>
          )}

          {/* Active Node Detail Card */}
          {points[activeIdx] && (
            <div className="diagram-detail-panel classical-frame">
              <span className="gold-corner tl" />
              <span className="gold-corner tr" />
              <span className="gold-corner bl" />
              <span className="gold-corner br" />

              <div className="panel-badge-row">
                <span className="panel-badge-num">DẤU HIỆU {activeIdx + 1} / 04</span>
                {points[activeIdx].textbookPage && (
                  <span className="panel-badge-source">
                    GIÁO TRÌNH TR. {points[activeIdx].textbookPage}
                  </span>
                )}
              </div>

              <h3 className="panel-title">{points[activeIdx].title}</h3>
              <p className="panel-text">{points[activeIdx].text}</p>
              {points[activeIdx].detail && (
                <p className="panel-detail">{points[activeIdx].detail}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
