import React from 'react';

export const OpeningQuestion: React.FC = () => {
  return (
    <section className="opening-question-scene">
      <div className="scene-bg-overlay" aria-hidden="true" />
      <div className="opening-question-container">
        <span className="question-tag">CÂU HỎI MỞ ĐẦU · KHẢO LUẬN BẢN THỂ</span>

        <blockquote className="cinematic-quote">
          “Tại sao có người bước vào đời bằng đại lộ,
          <br />
          chồng chất nguồn lực và đặc quyền,
          <br />
          còn người khác lại bắt đầu bằng một lối nhỏ?”
        </blockquote>

        <div className="quote-response-reveal">
          <p className="response-lead">
            Muốn trả lời, không thể dừng lại ở hiện tượng bề ngoài hay số phận cá nhân.
            <br />
            <strong>Phải đi sâu vào bản chất của quan hệ sản xuất và địa vị kinh tế – xã hội.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
