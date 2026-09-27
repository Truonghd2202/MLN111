import React from "react";

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
          Lý luận Triết học Mác – Lênin chỉ ra mối quan hệ biện chứng sâu sắc
          giữa kinh tế, giai cấp và sự phát triển dân tộc trong tiến trình văn
          minh nhân loại.
        </p>

        {closingImage && (
          <div
            className="summary-artwork-wrapper"
            onClick={() =>
              onOpenLightbox &&
              onOpenLightbox(
                closingImage,
                "Bức họa tổng kết khảo luận Giai cấp & Dân tộc",
                "Minh họa tổng kết các giá trị tư tưởng của học thuyết.",
              )
            }
          >
            <img
              src={closingImage}
              alt="Tổng kết khảo luận"
              className="summary-artwork-img"
            />
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
            Đọc hiểu sâu sắc hơn qua các giáo trình chính thức và nguồn tư liệu
            gốc.
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

            <div className="ref-card-footer">
              <a
                href="/docs/giao-trinh-mln-2019.pdf"
                target="_blank"
                rel="noreferrer"
                className="ref-link-btn"
              >
                Mở tài liệu ↗
              </a>
            </div>
          </div>

          {/* Card 3: English reference materials */}
          <div className="ref-card classical-frame full-width-card">
            <span className="gold-corner tl" />
            <span className="gold-corner tr" />
            <span className="gold-corner bl" />
            <span className="gold-corner br" />

            <div className="ref-card-header">
              <div className="ref-icon-badge purple-globe">🌐</div>
              <span className="ref-edition-tag">
                Tài liệu tham khảo · English
              </span>
            </div>

            <h3 className="ref-card-title">
              Tác phẩm gốc tham khảo bằng tiếng Anh
            </h3>
            <p className="ref-card-publisher">
              Tác phẩm của Marx, Engels và Lenin
            </p>

            <ul className="ref-page-list horizontal-list">
              <li>
                <span className="bookmark-icon">🌐</span>
                <span>
                  Tư liệu gốc về chủ nghĩa Mác – Lênin trên toàn thế giới.
                </span>
              </li>
              <li>
                <span className="bookmark-icon">📚</span>
                <span>
                  Bao gồm các tác phẩm kinh điển của K. Marx, F. Engels, V.I.
                  Lenin và các nhà lý luận.
                </span>
              </li>
            </ul>

            <div className="ref-card-footer">
              <a
                href="https://www.gutenberg.org/ebooks/61"
                target="_blank"
                rel="noreferrer"
                className="ref-link-btn"
              >
                Marx & Engels · The Communist Manifesto (toàn văn) ↗
              </a>

              <a
                href="https://foreignlanguages.press/wp-content/uploads/2025/06/C40-The-Right-of-Nations-to-Self-Determination-Lenin-2nd-Printing-FINAL.pdf"
                target="_blank"
                rel="noreferrer"
                className="ref-link-btn"
              >
                Lenin · The Right of Nations to Self-Determination ↗
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
