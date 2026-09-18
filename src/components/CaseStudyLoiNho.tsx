import React from 'react';

interface CaseStudyProps {
  image?: string;
  onOpenLightbox?: (src: string, alt: string, caption?: string) => void;
}

export const CaseStudyLoiNho: React.FC<CaseStudyProps> = ({
  image,
  onOpenLightbox,
}) => {
  return (
    <section className="case-study-loinho-scene">
      {/* Visual Header Banner - Contemporary Vietnam */}
      <div className="loinho-hero-wrapper">
        {image && (
          <img
            src={image}
            alt="Case Study Lối Nhỏ"
            className="loinho-hero-img"
            onClick={() =>
              onOpenLightbox &&
              onOpenLightbox(
                image,
                'Case Study Lối Nhỏ - Phân tích thực tiễn',
                'Khắc họa tư liệu xã hội đương đại minh họa cho bài toán phân tích giai cấp.'
              )
            }
          />
        )}
        <div className="loinho-hero-overlay" />

        <div className="loinho-hero-content">
          <span className="case-study-badge">CASE STUDY THỰC TIỄN · ÂM NHẠC & XÃ HỘI</span>
          <h2 className="loinho-main-title">“LỐI NHỎ” THỰC SỰ LÀ GÌ?</h2>
          <p className="loinho-subtitle">
            Phân tích hiện tượng xã hội từ ca từ Đen Vâu dưới góc nhìn Triết học Mác – Lênin
          </p>
        </div>
      </div>

      {/* Lyric Typography Scene */}
      <div className="lyric-cinematic-stage">
        <blockquote className="loinho-lyric-quote">
          <p className="lyric-line-1">“Em vào đời bằng đại lộ...”</p>
          <p className="lyric-line-2">“Còn anh vào đời bằng lối nhỏ...”</p>
        </blockquote>
      </div>

      {/* Analytical Sequence */}
      <div className="case-analysis-flow">
        <div className="analysis-step-card">
          <span className="step-tag">01 · HIỆN TƯỢNG BỀ NGOÀI</span>
          <h3>Điểm xuất phát và biểu hiện bên ngoài</h3>
          <p>
            Hình ảnh “đại lộ” và “lối nhỏ” gợi sự khác biệt về xuất thân, điều kiện sống và khả năng tiếp cận cơ hội.
            Tuy nhiên, trong triết học Mác – Lênin, mức sống hay lối sống không phải là tiêu chuẩn duy nhất để xác định giai cấp.
          </p>
        </div>

        <div className="analysis-step-card">
          <span className="step-tag">02 · BẢN CHẤT TRIẾT HỌC</span>
          <h3>Quan hệ với tư liệu sản xuất là chìa khóa</h3>
          <p>
            Muốn xác định địa vị giai cấp của một tập đoàn hay cá nhân, phải xem xét 3 dấu hiệu cốt lõi:
            Quan hệ sở hữu tư liệu sản xuất, vai trò trong tổ chức lao động, và phương thức / quy mô nhận phân phối của cải.
          </p>
        </div>
      </div>

      {/* Myth Breakdown Section: GIÀU ≠ TƯ SẢN */}
      <div className="myth-breakdown-box">
        <span className="myth-eyebrow">CẢNH BÁO NHẬN THỨC BỎC TÁCH</span>
        <div className="myth-statement-grid">
          <div className="myth-statement myth-wrong">
            <span className="symbol">✕</span>
            <h3>GIÀU ≠ TỰ ĐỘNG LÀ TƯ SẢN</h3>
            <p>Thu nhập cao hay lối sống xa hoa chưa đủ để kết luận là thuộc giai cấp tư sản nếu không nắm giữ tư liệu sản xuất.</p>
          </div>

          <div className="myth-statement myth-wrong">
            <span className="symbol">✕</span>
            <h3>NGHÈO ≠ TỰ ĐỘNG LÀ VÔ SẢN</h3>
            <p>Điểm xuất phát thấp hay ở “lối nhỏ” không tự động biến một cá nhân thành giai cấp vô sản mà phải xét địa vị kinh tế – xã hội thực tế.</p>
          </div>
        </div>

        <div className="myth-conclusion-bar">
          <span className="conclusion-tag">KẾT LUẬN PHƯƠNG PHÁP LUẬN</span>
          <p>
            Luôn phải xuất phát từ <strong>Địa vị trong hệ thống quan hệ sản xuất xã hội</strong> để phân tích bản chất giai cấp,
            không gán ghép định kiến hay đánh giá bề ngoài!
          </p>
        </div>
      </div>
    </section>
  );
};
