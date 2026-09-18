import React, { useState } from 'react';

interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  textbookPage?: string;
  source?: string;
}

interface QuizExperienceProps {
  questions: QuizQuestion[];
}

export const QuizExperience: React.FC<QuizExperienceProps> = ({ questions }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [completed, setCompleted] = useState<boolean>(false);

  const currentQ = questions[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === currentQ.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setCompleted(false);
  };

  const formatNum = (n: number) => String(n).padStart(2, '0');

  if (completed) {
    return (
      <section id="quiz" className="quiz-experience-scene completed">
        <div className="quiz-result-card">
          <span className="quiz-badge">KẾT QUẢ KIỂM TRA</span>
          <h2 className="result-score-heading">
            {score} / {questions.length}
          </h2>
          <p className="result-eval-text">
            {score === questions.length
              ? 'Xuất sắc! Bạn đã nắm vững toàn bộ lý luận Triết học Mác – Lênin về Giai cấp và Dân tộc.'
              : score >= questions.length / 2
              ? 'Khá tốt! Bạn đã hiểu đúng các khái niệm nền tảng. Có thể ôn lại các trang giáo trình được trích dẫn.'
              : 'Hãy dành thêm thời gian rà soát lại nội dung các chương và các trang giáo trình tương ứng.'}
          </p>
          <button className="btn-quiz-retry" onClick={handleRestart}>
            THỬ LẠI BÀI KIỂM TRA ↺
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="quiz-experience-scene">
      <div className="quiz-header">
        <div className="quiz-header-top">
          <span className="eyebrow-tag">KIỂM TRA KIẾN THỨC BÀI HỌC</span>
          <span className="quiz-progress-counter">
            {formatNum(currentIdx + 1)} / {formatNum(questions.length)}
          </span>
        </div>
        <h2 className="quiz-scene-title">KHẢO SÁT LÝ LUẬN</h2>
      </div>

      <div className="quiz-card-workspace">
        {/* Question Text */}
        <h3 className="quiz-question-text">{currentQ?.question}</h3>

        {/* Options */}
        <div className="quiz-options-grid">
          {currentQ?.options.map((opt, idx) => {
            let stateClass = '';
            if (isAnswered) {
              if (idx === currentQ.answer) stateClass = 'correct';
              else if (idx === selectedOption) stateClass = 'wrong';
              else stateClass = 'disabled';
            } else if (selectedOption === idx) {
              stateClass = 'selected';
            }

            return (
              <button
                key={idx}
                className={`quiz-option-btn ${stateClass}`}
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered}
              >
                <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                <span className="option-text">{opt}</span>
              </button>
            );
          })}
        </div>

        {/* Answer Feedback & Explanation */}
        {isAnswered && (
          <div
            className={`quiz-explanation-panel ${
              selectedOption === currentQ.answer ? 'correct' : 'wrong'
            }`}
          >
            <div className="explanation-status">
              {selectedOption === currentQ.answer ? '✓ CHÍNH XÁC' : '✕ CHƯA CHÍNH XÁC'}
              {currentQ.textbookPage && (
                <span className="textbook-ref">TRANG GIÁO TRÌNH: {currentQ.textbookPage}</span>
              )}
            </div>
            <p className="explanation-text">{currentQ.explanation}</p>

            <button className="btn-quiz-next" onClick={handleNextQuestion}>
              {currentIdx + 1 < questions.length ? 'CÂU TIẾP THEO →' : 'XEM KẾT QUẢ →'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
