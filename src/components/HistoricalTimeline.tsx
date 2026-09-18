import React, { useState } from 'react';

interface TimelineStage {
  title: string;
  text: string;
  detail?: string;
  textbookPage?: string;
  label?: string;
  opposingClasses?: string;
}

interface HistoricalTimelineProps {
  title: string;
  deck?: string;
  panoramicImage: string;
  stages: TimelineStage[];
}

export const HistoricalTimeline: React.FC<HistoricalTimelineProps> = ({
  title,
  deck,
  panoramicImage,
  stages,
}) => {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);

  const currentStage = stages[activeStageIdx] || stages[0];

  return (
    <section className="historical-panoramic-scene classical-section">
      <div className="panoramic-header text-center">
        <span className="eyebrow-tag">🔥 THẦN THOẠI PROMETHEUS & LỰC LƯỢNG SẢN XUẤT · BIẾN CHUYỂN THỜI ĐẠI</span>
        <h2 className="classical-title">{title}</h2>
        {deck && <p className="panoramic-deck">{deck}</p>}
      </div>

      {/* FULL WIDTH Panoramic Canvas */}
      <div className="panoramic-image-container">
        <div className="panoramic-img-wrapper classical-frame">
          <span className="gold-corner tl" />
          <span className="gold-corner tr" />
          <span className="gold-corner bl" />
          <span className="gold-corner br" />

          <img src={panoramicImage} alt={title} className="panoramic-img classical-engraving-img" />
          <div className="panoramic-overlay-gradient" />

          {/* Overlaid HTML Stage Markers */}
          <div className="panoramic-stage-markers">
            {stages.map((st, idx) => (
              <button
                key={idx}
                className={`marker-pin ${activeStageIdx === idx ? 'active' : ''}`}
                onClick={() => setActiveStageIdx(idx)}
              >
                <span className="pin-num">{st.label || `0${idx + 1}`}</span>
                <span className="pin-title">{st.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Rich Academic Stage Inspector Card */}
      {currentStage && (
        <div className="timeline-stage-inspector">
          <div className="inspector-card classical-frame">
            <span className="gold-corner tl" />
            <span className="gold-corner tr" />
            <span className="gold-corner bl" />
            <span className="gold-corner br" />

            <div className="inspector-top">
              <span className="inspector-idx">
                HÌNH THÁI XÃ HỘI {activeStageIdx + 1} / {stages.length}
              </span>
              {currentStage.textbookPage && (
                <span className="inspector-page">
                  GIÁO TRÌNH TR. {currentStage.textbookPage}
                </span>
              )}
            </div>

            <h3 className="inspector-title">{currentStage.title}</h3>

            {currentStage.opposingClasses && (
              <div className="opposing-classes-badge">
                <span className="badge-tag">GIAI CẤP THỐNG TRỊ VS BỊ TRỊ:</span>
                <strong className="classes-text">{currentStage.opposingClasses}</strong>
              </div>
            )}

            <p className="inspector-text">{currentStage.text}</p>
            {currentStage.detail && (
              <p className="inspector-detail">{currentStage.detail}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
