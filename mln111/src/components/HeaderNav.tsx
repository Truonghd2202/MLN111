import React, { useState, useEffect } from 'react';

interface Chapter {
  id: string;
  label: string;
}

interface HeaderNavProps {
  chapters: Chapter[];
  activeChapter: number;
  onSelectChapter: (index: number) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  chapters,
  activeChapter,
  onSelectChapter,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatNumber = (n: number) => String(n).padStart(2, '0');

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Floating Glass Header */}
      <header className="site-header-glass">
        <a href="#hero" className="brand-wordmark">
          <span className="brand-roman">III</span>
          <div className="brand-text">
            <strong>GIAI CẤP & DÂN TỘC</strong>
            <small>TRIẾT HỌC MÁC – LÊNIN</small>
          </div>
        </a>

        {/* Current Active Pill */}
        <div className="active-chapter-pill">
          <span className="chapter-idx">{formatNumber(activeChapter)}</span>
          <span className="chapter-name">{chapters[activeChapter]?.label || 'MỞ ĐẦU'}</span>
        </div>

        {/* Action Controls */}
        <div className="header-actions">
          <button
            className="menu-toggle-btn"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Mở mục lục triển lãm"
          >
            <span>MỤC LỰC</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </header>

      {/* Side Chapter Rail */}
      <nav className="chapter-sticky-rail" aria-label="Điều hướng nhanh các chương">
        {chapters.map((ch, idx) => (
          <a
            key={ch.id}
            href={`#${ch.id}`}
            className={`rail-item ${activeChapter === idx ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onSelectChapter(idx);
              const el = document.getElementById(ch.id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            title={`${formatNumber(idx)} ${ch.label}`}
          >
            <span className="rail-num">{formatNumber(idx)}</span>
            <span className="rail-dot" />
          </a>
        ))}
      </nav>

      {/* Fullscreen Overlay Menu */}
      {isMenuOpen && (
        <dialog open className="menu-overlay-dialog">
          <div className="menu-overlay-content">
            <div className="menu-overlay-header">
              <span className="eyebrow-tag">DANH MỤC KHÁM PHÁ</span>
              <button className="menu-close-btn" onClick={() => setIsMenuOpen(false)}>
                ĐÓNG ✕
              </button>
            </div>

            <nav className="menu-chapter-grid">
              {chapters.map((ch, idx) => (
                <a
                  key={ch.id}
                  href={`#${ch.id}`}
                  className="menu-chapter-card"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onSelectChapter(idx);
                    const el = document.getElementById(ch.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="card-num">{formatNumber(idx)}</span>
                  <div className="card-info">
                    <span className="card-title">{ch.label}</span>
                  </div>
                  <span className="card-arrow">↗</span>
                </a>
              ))}
            </nav>
          </div>
        </dialog>
      )}
    </>
  );
};
