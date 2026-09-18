import React from 'react';

interface ArchiveSourcesProps {
  closingImage?: string;
  onOpenLightbox?: (src: string, alt: string, caption?: string) => void;
}

export const ArchiveSources: React.FC<ArchiveSourcesProps> = ({
  closingImage,
  onOpenLightbox,
}) => {
  return (
    <footer id="sources" className="archive-sources-footer">
      {/* Final Summary Collage Scene */}
      <div className="final-summary-stage">
        <span className="eyebrow-tag">TỔNG KẾT KHẢO LUẬN</span>
        <h2 className="summary-wordmark">
          GIAI CẤP · ĐẤU TRANH · DÂN TỘC · LỊCH SỬ
        </h2>
        <p className="summary-deck">
          Lý luận Triết học Mác – Lênin chỉ ra mối quan hệ biện chứng sâu sắc giữa kinh tế,
          giai cấp và sự phát triển dân tộc trong tiến trình văn minh nhân loại.
        </p>

        {closingImage && (
          <div
            className="summary-artwork-wrapper"
            onClick={() =>
              onOpenLightbox &&
              onOpenLightbox(
                closingImage,
                'Bức họa tổng kết khảo luận Giai cấp & Dân tộc',
                'Minh họa tổng kết các giá trị tư tưởng của học thuyết.'
              )
            }
          >
            <img src={closingImage} alt="Tổng kết khảo luận" className="summary-artwork-img" />
          </div>
        )}
      </div>

      {/* Bibliographic Archive Table */}
      <div className="bibliographic-archive-table">
        <div className="archive-header-row">
          <span className="archive-tag">THƯ MỤC TƯ LIỆU VÀ NGUỒN TRÍCH DẪN</span>
        </div>

        <div className="archive-entries-grid">
          <div className="archive-entry">
            <span className="entry-num">01</span>
            <div className="entry-content">
              <strong>Giáo trình Triết học Mác – Lênin</strong>
              <p>Bộ Giáo dục và Đào tạo (Dành cho bậc Đại học hệ không chuyên Lý luận chính trị), NXB Chính trị quốc gia Sự thật.</p>
              <small>Nguồn chính: Chương III (Giai cấp và Dân tộc), tr. 179 — 206.</small>
            </div>
          </div>

          <div className="archive-entry">
            <span className="entry-num">02</span>
            <div className="entry-content">
              <strong>Tác phẩm kinh điển Mác – Ăng-ghen</strong>
              <p>V.I. Lênin, “Sáng kiến vĩ đại” (về định nghĩa giai cấp) & K. Marx, “Tuyên ngôn của Đảng Cộng sản”.</p>
              <small>Cơ sở lý luận về 4 dấu hiệu giai cấp & đấu tranh giai cấp.</small>
            </div>
          </div>

          <div className="archive-entry">
            <span className="entry-num">03</span>
            <div className="entry-content">
              <strong>Thực tiễn & Case Study Đương đại</strong>
              <p>Vận dụng phân tích quan hệ kinh tế – xã hội qua tác phẩm âm nhạc “Lối nhỏ” (Đen Vâu).</p>
              <small>Góc nhìn liên hệ thực tiễn xã hội Việt Nam đương đại.</small>
            </div>
          </div>
        </div>
      </div>

      {/* Final Copyright & Return Bar */}
      <div className="sources-bottom-nav">
        <div className="brand-copy">
          <strong>TRIẾT HỌC MÁC – LÊNIN</strong>
          <span>CHƯƠNG III · TRIỂN LÃM SỐ HỌC TƯƠNG TÁC</span>
        </div>
        <a href="#hero" className="btn-back-to-top">
          TRỞ VỀ ĐIỂM BẮT ĐẦU ↑
        </a>
      </div>
    </footer>
  );
};
