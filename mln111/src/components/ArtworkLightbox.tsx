import React from 'react';

interface ArtworkLightboxProps {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}

export const ArtworkLightbox: React.FC<ArtworkLightboxProps> = ({
  src,
  alt,
  caption,
  onClose,
}) => {
  return (
    <dialog open className="lightbox-dialog" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Đóng ảnh">
          ✕ ĐÓNG
        </button>
        <div className="lightbox-image-wrapper">
          <img src={src} alt={alt} className="lightbox-img" />
        </div>
        {caption && (
          <div className="lightbox-caption">
            <span className="caption-tag">MINH HỌA TƯ LIỆU</span>
            <p>{caption}</p>
          </div>
        )}
      </div>
    </dialog>
  );
};
