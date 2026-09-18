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

      {/* Interactive Bibliographic References Section */}
      <div className="archive-reference-section">
        <div className="reference-header text-center">
          <h2 className="reference-title">
            Tài liệu <span className="title-highlight">tham khảo</span>
          </h2>
          <p className="reference-subtitle">
            Đọc hiểu sâu sắc hơn qua các giáo trình chính thức và nguồn tư liệu gốc.
          </p>
        </div>

        {/* 3 Reference Cards Grid */}
        <div className="reference-cards-grid">
          {/* Card 1: Edition 2019 */}
          <div className="ref-card classical-frame">
            <span className="gold-corner tl" />
            <span className="gold-corner tr" />
            <span className="gold-corner bl" />
            <span className="gold-corner br" />

            <div className="ref-card-header">
              <div className="ref-icon-badge red-flag">🚩</div>
              <span className="ref-edition-tag">Phiên bản 2019</span>
            </div>

            <h3 className="ref-card-title">Giáo trình Triết học Mác – Lênin</h3>
            <p className="ref-card-publisher">NXB Chính trị quốc gia Sự thật</p>

            <ul className="ref-page-list">
              <li>
                <span className="bookmark-icon">🔖</span>
                <span>Trang 100 → Trang 108 <em>(Nguyên lý sản xuất & Giai cấp)</em></span>
              </li>
              <li>
                <span className="bookmark-icon">🔖</span>
                <span>Trang 108 → Trang 125 <em>(Phạm trù Đấu tranh & Dân tộc)</em></span>
              </li>
            </ul>

            <div className="ref-card-footer">
              <a
                href="https://nxbcntqg.org.vn"
                target="_blank"
                rel="noreferrer"
                className="ref-link-btn"
              >
                Mở tài liệu ↗
              </a>
            </div>
          </div>

          {/* Card 2: Edition 2021 (Main Textbook Citation) */}
          <div className="ref-card classical-frame is-primary-edition">
            <span className="gold-corner tl" />
            <span className="gold-corner tr" />
            <span className="gold-corner bl" />
            <span className="gold-corner br" />

            <div className="ref-card-header">
              <div className="ref-icon-badge cyan-flag">📘</div>
              <span className="ref-edition-tag highlight">Phiên bản 2021 (Chính thức)</span>
            </div>

            <h3 className="ref-card-title">Giáo trình Triết học Mác – Lênin</h3>
            <p className="ref-card-publisher">Bộ Giáo dục & Đào tạo — NXB Chính trị quốc gia Sự thật</p>

            <ul className="ref-page-list">
              <li>
                <span className="bookmark-icon">🔖</span>
                <span>Trang 179 → Trang 186 <em>(Khái niệm & Nguồn gốc giai cấp)</em></span>
              </li>
              <li>
                <span className="bookmark-icon">🔖</span>
                <span>Trang 187 → Trang 198 <em>(3 hình thức Đấu tranh giai cấp)</em></span>
              </li>
              <li>
                <span className="bookmark-icon">🔖</span>
                <span>Trang 199 → Trang 204 <em>(Dân tộc & Các hình thái cộng đồng)</em></span>
              </li>
              <li>
                <span className="bookmark-icon">🔖</span>
                <span>Trang 205 → Trang 206 <em>(Quan hệ Giai cấp × Dân tộc)</em></span>
              </li>
            </ul>

            <div className="ref-card-footer">
              <a
                href="#hero"
                className="ref-link-btn primary-btn"
              >
                Trích dẫn chính thức ↗
              </a>
            </div>
          </div>

          {/* Card 3: Marxists Internet Archive */}
          <div className="ref-card classical-frame full-width-card">
            <span className="gold-corner tl" />
            <span className="gold-corner tr" />
            <span className="gold-corner bl" />
            <span className="gold-corner br" />

            <div className="ref-card-header">
              <div className="ref-icon-badge purple-globe">🌐</div>
              <span className="ref-edition-tag">Nguồn gốc · English & Tiếng Việt</span>
            </div>

            <h3 className="ref-card-title">Marxists Internet Archive</h3>
            <p className="ref-card-publisher">Thư viện điện tử quốc tế kinh điển Mác – Lênin</p>

            <ul className="ref-page-list horizontal-list">
              <li>
                <span className="bookmark-icon">🌐</span>
                <span>Tư liệu gốc về chủ nghĩa Mác – Lênin trên toàn thế giới.</span>
              </li>
              <li>
                <span className="bookmark-icon">📚</span>
                <span>Bao gồm các tác phẩm kinh điển của K. Marx, F. Engels, V.I. Lenin và các nhà lý luận.</span>
              </li>
            </ul>

            <div className="ref-card-footer">
              <a
                href="https://www.marxists.org"
                target="_blank"
                rel="noreferrer"
                className="ref-link-btn"
              >
                Mở trang marxists.org ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Final Copyright & Return Bar */}
      <div className="sources-bottom-nav">
        <div className="brand-copy">
          <strong>TRIẾT HỌC MÁC – LÊNIN</strong>
          <span>SEMINAR 2026 · FPT UNIVERSITY · SE1918 · NHÓM 05</span>
        </div>
        <a href="#hero" className="btn-back-to-top">
          TRỞ VỀ ĐIỂM BẮT ĐẦU ↑
        </a>
      </div>
    </footer>
  );
};
