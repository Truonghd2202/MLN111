import React, { useState } from 'react';

interface CausalStep {
  step?: string;
  title: string;
  text: string;
  detail?: string;
  textbookPage?: string;
  label?: string;
}

interface CausalStoryProps {
  title: string;
  deck?: string;
  steps: CausalStep[];
  deepCauseTitle?: string;
  deepCauseText?: string;
  directCauseTitle?: string;
  directCauseText?: string;
  image?: string;
  mythImage?: string;
  onOpenLightbox?: (src: string, alt: string, caption?: string) => void;
}

export const CausalStory: React.FC<CausalStoryProps> = ({
  title,
  deck,
  steps,
  deepCauseTitle = 'NGUYÊN NHÂN SÂU XA',
  deepCauseText = 'Sự phát triển của lực lượng sản xuất làm cho năng suất lao động tăng lên, xuất hiện sản phẩm dư thừa tương đối.',
  directCauseTitle = 'NGUYÊN NHÂN TRỰC TIẾP',
  directCauseText = 'Chế độ tư hữu về tư liệu sản xuất xuất hiện, xã hội phân hóa thành kẻ giàu người nghèo, hình thành các tập đoàn người có địa vị kinh tế – xã hội đối lập.',
  image,
  onOpenLightbox,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const safeSteps = steps && steps.length > 0 ? steps : [];
  const currentStep = safeSteps[activeStep] || safeSteps[0];
  const totalSteps = safeSteps.length > 0 ? safeSteps.length : 6;

  return (
    <section className="causal-story-scene classical-section">
      <div className="causal-header text-center">
        <span className="eyebrow-tag">⚡ TIẾN TRÌNH BIỆN CHỨNG LỊCH SỬ · THỜI ĐẠI & SẢN XUẤT</span>
        <h2 className="classical-title">{title}</h2>
        {deck && <p className="causal-deck">{deck}</p>}
      </div>

      <div className="causal-timeline-wrapper">
        {/* Symmetrical Step Navigation Buttons */}
        <div className="causal-step-nav-grid">
          {safeSteps.map((st, idx) => (
            <button
              key={idx}
              className={`step-nav-btn classical-frame ${activeStep === idx ? 'active' : ''}`}
              onClick={() => setActiveStep(idx)}
            >
              <span className="step-num">0{idx + 1}</span>
              <span className="step-title">{st.title}</span>
            </button>
          ))}
        </div>

        {/* 2-Column Symmetrical Stage Display */}
        <div className="causal-stage-display-symmetrical">
          {/* Left Column: Active Step Details */}
          <div className="stage-content-card classical-frame">
            <span className="gold-corner tl" />
            <span className="gold-corner tr" />
            <span className="gold-corner bl" />
            <span className="gold-corner br" />

            <div className="stage-badge-row">
              <span className="stage-step-tag">
                BƯỚC {activeStep + 1} / {totalSteps}
              </span>
              {currentStep?.textbookPage && (
                <span className="stage-page-tag">TRANG {currentStep.textbookPage}</span>
              )}
            </div>

            <h3 className="stage-heading">{currentStep?.title}</h3>
            <p className="stage-text">{currentStep?.text}</p>
            {currentStep?.detail && (
              <p className="stage-detail">{currentStep.detail}</p>
            )}
          </div>

          {/* Right Column: Historical Illustration & Mythological Banner */}
          <div className="stage-image-card classical-frame">
            <span className="gold-corner tl" />
            <span className="gold-corner tr" />
            <span className="gold-corner bl" />
            <span className="gold-corner br" />

            {image && (
              <div
                className="stage-img-wrapper"
                onClick={() =>
                  onOpenLightbox &&
                  onOpenLightbox(
                    image,
                    'Tư liệu minh họa nguồn gốc giai cấp và lực lượng sản xuất',
                    'Bức họa khắc họa tiến trình phát triển lực lượng sản xuất và phân công lao động.'
                  )
                }
              >
                <img src={image} alt={title} className="stage-img" />
                <div className="stage-img-caption">📜 NGUỒN GỐC GIAI CẤP · MINH HỌA TƯ LIỆU</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Symmetrical Deep vs Direct Cause Comparison */}
      <div className="causes-comparison-split-symmetrical">
        <div className="cause-box deep-cause classical-frame">
          <span className="gold-corner tl" />
          <span className="gold-corner tr" />
          <span className="gold-corner bl" />
          <span className="gold-corner br" />

          <span className="cause-type-tag">🔥 BẢN CHẤT KINH TẾ (LỰC LƯỢNG SẢN XUẤT)</span>
          <h3>{deepCauseTitle}</h3>
          <p>{deepCauseText}</p>
        </div>

        <div className="cause-divider-axis" aria-hidden="true">
          <span>⇄</span>
        </div>

        <div className="cause-box direct-cause classical-frame">
          <span className="gold-corner tl" />
          <span className="gold-corner tr" />
          <span className="gold-corner bl" />
          <span className="gold-corner br" />

          <span className="cause-type-tag">⚡ QUAN HỆ XÃ HỘI (TƯ HỮU & PHÁP LÝ)</span>
          <h3>{directCauseTitle}</h3>
          <p>{directCauseText}</p>
        </div>
      </div>
    </section>
  );
};
