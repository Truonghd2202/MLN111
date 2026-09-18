import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Expand,
  List,
  RotateCcw,
  X,
  Users, Network, Landmark, Globe,
} from "lucide-react";
import {
  useEffect,
  useState,
  useRef,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import {
  pages,
  tocItems,
  type ContentBlock,
  type MagazinePage,
} from "./data/content";
import { quizQuestions } from "./data/quiz";
import { sourceLegend, type Source } from "./data/sources";
import "./App.css";

const artFiles = Object.values(
  import.meta.glob("./assets/stitch_class_and_nation_editorial_illustration/**/screen.png", {
    eager: true,
    query: "?url",
    import: "default",
  }),
) as string[];

type QuizState = { answer?: number; checked: boolean };

function App() {
  const tocTrigger = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLElement>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [tocOpen, setTocOpen] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizState, setQuizState] = useState<Record<number, QuizState>>({});
  const goTo = (number: number) => {
    const target = Math.max(1, Math.min(pages.length, number));
    setPageNumber(target);
    document.getElementById(`page-${target}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setTocOpen(false);
      if (tocOpen || event.altKey || event.ctrlKey || event.metaKey || (event.target instanceof Element && event.target.closest('button, input, textarea, select, summary, a, [contenteditable="true"]'))) return;
      if (["ArrowRight", "ArrowLeft", " "].includes(event.key)) {
        event.preventDefault();
        goTo(pageNumber + (event.key === "ArrowLeft" ? -1 : 1));
      }
    };
    const onGoto = (event: Event) =>
      goTo((event as CustomEvent<number>).detail);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("magazine:goto", onGoto);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("magazine:goto", onGoto);
    };
  }, [pageNumber, tocOpen]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".web-section"));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setPageNumber(Number((visible.target as HTMLElement).id.replace("page-", "")));
    }, { rootMargin: "-18% 0px -62% 0px", threshold: [0.05, 0.25, 0.6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!tocOpen) return;
    const trigger = tocTrigger.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawer.current?.querySelector<HTMLButtonElement>('button')?.focus();
    return () => { document.body.style.overflow = previousOverflow; trigger?.focus(); };
  }, [tocOpen]);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement)
      await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  };

  return (
    <main className="app-shell">
      <header className="topbar">
        <button
          className="brand"
          onClick={() => goTo(1)}
          aria-label="Về trang bìa"
        >
          <span className="brand-mark">GĐ</span>
          <span>CHƯƠNG 3<br />CHỦ NGHĨA DUY VẬT LỊCH SỬ</span>
        </button>
        <div className="topbar-meta">
          <span>FPT · TRIẾT HỌC MÁC – LÊNIN</span>
          <span>
            {String(pageNumber).padStart(2, "0")} / {pages.length}
          </span>
        </div>
        <div className="topbar-actions">
          <button
            ref={tocTrigger}
            className="icon-button"
            onClick={() => setTocOpen(true)}
            aria-expanded={tocOpen}
            aria-controls="magazine-toc"
            aria-label="Mở mục lục"
          >
            <List size={18} />
          </button>
          <button
            className="icon-button"
            onClick={toggleFullscreen}
            aria-label="Toàn màn hình"
          >
            <Expand size={18} />
          </button>
        </div>
      </header>
      <div className="web-progress" aria-hidden="true"><motion.div animate={{ width: `${(pageNumber / pages.length) * 100}%` }} /></div>
      <div className="web-feed">
        {pages.map((item, index) => <section className={`web-section kind-${item.kind}`} id={`page-${item.number}`} key={item.number}>
          <div className="web-section-meta"><span>CHƯƠNG 3 · {item.section}</span><span>{String(item.number).padStart(2, "0")} / {pages.length}</span></div>
          <BookPage page={item} quizIndex={quizIndex} setQuizIndex={setQuizIndex} quizState={quizState} setQuizState={setQuizState} />
          <figure className="section-art" aria-label={`Minh họa biên tập: ${item.title}`}>
            <img src={artFiles[index % artFiles.length]} alt="" loading="lazy" />
            <figcaption>Minh họa biên tập · {String((index % artFiles.length) + 1).padStart(2, "0")}</figcaption>
          </figure>
        </section>)}
      </div>
      <footer className="footer-note">
        <span>
          Giáo trình Triết học Mác – Lênin · Bộ GD&ĐT, 2019 · tr. 179–206
        </span>
        <span>Cuộn để đọc · Mục lục để đi nhanh</span>
      </footer>
      <AnimatePresence>
        {tocOpen && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setTocOpen(false)}
          >
            <motion.aside
              ref={drawer}
              id="magazine-toc"
              role="dialog"
              aria-modal="true"
              aria-labelledby="toc-title"
              onKeyDown={(event) => {
                if (event.key !== 'Tab') return;
                const buttons = drawer.current?.querySelectorAll<HTMLButtonElement>('button');
                if (!buttons?.length) return;
                const first = buttons[0], last = buttons[buttons.length - 1];
                if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
                if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
              }}
              className="toc-drawer"
              initial={{ x: 40 }}
              animate={{ x: 0 }}
              exit={{ x: 40 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="drawer-head">
                <div>
                  <span className="eyebrow">Mục lục</span>
                  <h2 id="toc-title">Đi qua chương 3</h2>
                </div>
                <button
                  className="icon-button"
                  onClick={() => setTocOpen(false)}
                  aria-label="Đóng mục lục"
                >
                  <X size={18} />
                </button>
              </div>
              {tocItems.map((item, index) => (
                <button
                  className="toc-item"
                  key={item.page}
                  onClick={() => {
                    goTo(item.page);
                    setTocOpen(false);
                  }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.label}</strong>
                  <small>{item.section}</small>
                </button>
              ))}
              <div className="drawer-source">
                <BookOpen size={16} /> Phạm vi giáo trình: trang 179–206
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

type BookPageProps = {
  page: MagazinePage;
  quizIndex: number;
  setQuizIndex: Dispatch<SetStateAction<number>>;
  quizState: Record<number, QuizState>;
  setQuizState: Dispatch<SetStateAction<Record<number, QuizState>>>;
};
function BookPage({
  page,
  quizIndex,
  setQuizIndex,
  quizState,
  setQuizState,
}: BookPageProps) {
  if (page.kind === "cover")
    return (
      <div className="cover-content">
        <div className="cover-stamp">
          BÀI THUYẾT TRÌNH
          <br />
          MÔN TRIẾT HỌC
        </div>
        <div>
          <Badge source={page.source} />
          <h1>{page.title}</h1>
          <p className="cover-kicker">{page.deck}</p>
        </div>
        {page.visual && <img className="cover-visual" src={page.visual.src} alt={page.visual.alt} />}
        <div className="cover-bottom">
          <span>FPT UNIVERSITY</span>
          <span>01 — {pages.length}</span>
        </div>
        <div className="cover-grid" />
      </div>
    );
  if (page.kind === "hook")
    return (
      <div className="hook-content">
        <span className="chapter-number">01</span>
        <Badge source={page.source} />
        <h1>{page.title}</h1>
        <div className="hook-line" />
        <p className="intro">{page.deck}</p>
        <span className="marginal">MỞ KHÓA CÂU HỎI</span>
      </div>
    );
  if (page.kind === "toc")
    return (
      <StandardPage page={page}>
        <div className="toc-grid">
          {tocItems.map((item, index) => (
            <button
              key={item.page}
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent("magazine:goto", { detail: item.page }),
                )
              }
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.label}</strong>
              <small>{item.section}</small>
            </button>
          ))}
        </div>
      </StandardPage>
    );
  if (page.kind === "quiz")
    return (
      <QuizPage
        page={page}
        index={quizIndex}
        setIndex={setQuizIndex}
        state={quizState}
        setState={setQuizState}
      />
    );
  if (page.kind === "summary")
    return (
      <StandardPage page={page}>
        <div className="summary-flow">
          {page.steps?.map((step, index) => (
              <Step key={step.title} block={step} index={index} last={index === (page.steps?.length ?? 0) - 1} />
          ))}
        </div>
      </StandardPage>
    );
  if (page.kind === "references")
    return (
      <StandardPage page={page}>
        <div className="reference-list">
          {page.blocks?.map((block) => (
            <SourceBlock key={block.title} block={block} />
          ))}
        </div>
      </StandardPage>
    );
  return (
    <StandardPage page={page}>
      {page.kind === "why" && <Blocks blocks={page.blocks ?? []} />}
      {page.kind === "concept" && (
        <Blocks blocks={[...(page.blocks ?? []), ...(page.points ?? [])]} />
      )}
      {page.kind === "flow" && <Flow steps={page.steps ?? []} />}
      {page.kind === "timeline" && <Timeline steps={page.steps ?? []} />}
      {page.kind === "cards" && <Cards cards={page.cards ?? []} />}
      {page.kind === "relation" && <Relation page={page} blocks={page.points ?? []} />}
      {page.kind === "case" && <Blocks blocks={page.blocks ?? []} />}
      {(page.kind === "causal" || page.kind === "application") && <><Flow steps={page.steps ?? []} causal /><Blocks blocks={page.blocks ?? []} /></>}
      {page.kind === "community" && <Community steps={page.steps ?? []} />}
      {(page.kind === "branch" || page.kind === "comparison") && <div className={page.kind === 'branch' ? 'branch-diagram' : 'comparison-diagram'}>
        {page.kind === 'branch' && <div className="branch-root">DÂN TỘC<span aria-hidden="true">↙ ↘</span></div>}
        <Blocks blocks={page.points ?? []} />
      </div>}
    </StandardPage>
  );
}
function StandardPage({
  page,
  children,
}: {
  page: MagazinePage;
  children: ReactNode;
}) {
  return (
    <div className="standard-content">
      <div className="page-heading">
        <Badge source={page.source} page={page.textbookPage} />
        <p className="section-label">{page.section}</p>
        <h1>{page.title}</h1>
        {page.deck && <p className="intro">{page.deck}</p>}
      </div>
      <div className={`page-body ${page.visual ? `has-visual visual-position-${page.visual.position ?? 'hero'}` : ''}`}>
        {page.visual && <figure className="page-visual"><img src={page.visual.src} alt={page.visual.alt} loading="lazy" width="640" height="240" />{page.visual.caption && <figcaption>{page.visual.caption}</figcaption>}</figure>}
        <div className="page-main">{children}</div>
      </div>
      {page.note && <p className="page-note">{page.note}</p>}
    </div>
  );
}
function Badge({ source, page }: { source: Source; page?: string }) {
  return (
    <span className={`source-badge source-${source}`}>
      {sourceLegend[source]}
      {page ? ` · ${source === 'textbook' ? 'tr. in' : 'tham chiếu tr. in'} ${page}` : ""}
    </span>
  );
}
function SourceBlock({ block }: { block: ContentBlock }) {
  return (
    <article className={`source-block source-block-${block.source}`}>
      <div className="block-meta">
        <Badge source={block.source} page={block.textbookPage} />
      </div>
      <h2>
        {block.label &&
        !["KIẾN THỨC MỞ RỘNG", "CASE STUDY"].includes(block.label)
          ? `${block.label} · `
          : ""}
        {block.title}
      </h2>
      <p>{block.text}</p>
      <ReadMore block={block} />
    </article>
  );
}
function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="block-grid">
      {blocks.map((block) => (
        <SourceBlock key={`${block.title}-${block.text}`} block={block} />
      ))}
    </div>
  );
}
function ReadMore({ block }: { block: ContentBlock }) {
  return block.detail ? <details className="read-more"><summary>Đọc thêm</summary><Badge source="extension" /><span className="detail-label">Diễn giải bổ sung của nhóm biên soạn</span><p>{block.detail}</p></details> : null;
}
function Step({ block, index, last = false }: { block: ContentBlock; index: number; last?: boolean }) {
  return (
    <div className="step">
      <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <Badge source={block.source} page={block.textbookPage} />
        {block.label && <strong className="cause-label">{block.label}</strong>}
        <h2>{block.title}</h2>
        <p>{block.text}</p>
        <ReadMore block={block} />
      </div>
      {!last && <i aria-hidden="true">↓</i>}
    </div>
  );
}
function Flow({ steps, causal = false }: { steps: ContentBlock[]; causal?: boolean }) {
  return (
    <div className={`flow ${causal ? 'causal-flow' : ''}`}>
      {steps.map((step, index) => (
        <Step key={step.title} block={step} index={index} last={index === steps.length - 1} />
      ))}
    </div>
  );
}
function Timeline({ steps }: { steps: ContentBlock[] }) {
  return (
    <div className="timeline">
      {steps.map((step, index) => (
        <div className="timeline-item" key={step.title}>
          <div className="timeline-dot">
            {String(index + 1).padStart(2, "0")}
          </div>
          <Badge source={step.source} page={step.textbookPage} />
          <h2>{step.title}</h2>
          <p>{step.text}</p>
          <ReadMore block={step} />
        </div>
      ))}
    </div>
  );
}
function Cards({ cards }: { cards: ContentBlock[] }) {
  return (
    <div className="concept-cards">
      {cards.map((card, index) => (
        <article
          className="concept-card"
          key={card.title}
        >
          <span>{card.label ?? String(index + 1).padStart(2, "0")}</span>
          <Badge source={card.source} page={card.textbookPage} />
          <h2>{card.title}</h2>
          <p>{card.text}</p>
          <ReadMore block={card} />
        </article>
      ))}
    </div>
  );
}
function Relation({ blocks, page }: { blocks: ContentBlock[]; page: MagazinePage }) {
  return (
    <div className="relation-layout">
      <div className="relation-orbit">
        <span>{page.relationLeft}</span>
        <strong aria-hidden="true">{page.relationSymbol ?? '↕'}</strong>
        <span>{page.relationRight}</span>
      </div>
      <div className="relation-points">
        {blocks.map((block, index) => (
          <div className="relation-point" key={block.title}>
            <span>0{index + 1}</span>
            <SourceBlock block={block} />
          </div>
        ))}
      </div>
    </div>
  );
}
function Community({ steps }: { steps: ContentBlock[] }) {
  const icons = { family: Users, groups: Network, landmark: Landmark, globe: Globe };
  return <ol className="community-timeline">{steps.map((step) => {
    const Icon = icons[step.icon ?? 'groups'];
    return <li key={step.title}><Icon aria-hidden="true" size={30} /><div><Badge source={step.source} page={step.textbookPage} /><h2>{step.title}</h2><p>{step.text}</p><strong>Đặc trưng: </strong><span>{step.feature}</span></div></li>;
  })}</ol>;
}
function QuizPage({
  page,
  index,
  setIndex,
  state,
  setState,
}: {
  page: MagazinePage;
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  state: Record<number, QuizState>;
  setState: Dispatch<SetStateAction<Record<number, QuizState>>>;
}) {
  const question = quizQuestions[index];
  const current = state[index] ?? { checked: false };
  const score = quizQuestions.reduce(
    (total, item, itemIndex) =>
      total + (state[itemIndex]?.answer === item.answer ? 1 : 0),
    0,
  );
  const choose = (answer: number) =>
    setState((old) => old[index]?.checked ? old : ({ ...old, [index]: { answer, checked: true } }));
  return (
    <StandardPage page={page}>
      <div className="quiz-progress">
        <span>
          {String(index + 1).padStart(2, '0')} / {String(quizQuestions.length).padStart(2, '0')}
        </span>
        <div>
          <i
            style={{ width: `${((index + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
        <strong>{score} đúng</strong>
      </div>
      <article className="quiz-card">
        <span className="question-number">
          CÂU {String(index + 1).padStart(2, "0")}
        </span>
        <h2>{question.question}</h2>
        <div className="options">
          {question.options.map((option, optionIndex) => (
            <button
              className={`${current.answer === optionIndex ? "selected" : ""} ${current.checked && optionIndex === question.answer ? "correct" : ""}`}
              key={option}
              onClick={() => choose(optionIndex)}
              aria-disabled={current.checked}
              aria-pressed={current.answer === optionIndex}
            >
              {String.fromCharCode(65 + optionIndex)}. {option}
              {current.checked && optionIndex === question.answer && (
                <Check size={15} />
              )}
            </button>
          ))}
        </div>
        {current.checked && (
          <div
            role="status"
            className={`quiz-feedback ${current.answer === question.answer ? "is-correct" : ""}`}
          >
            <strong>
              {current.answer === question.answer ? "Đúng" : "Chưa đúng"}
            </strong>
            <p>{question.explanation}</p>
            <Badge source={question.source} page={question.textbookPage} />
          </div>
        )}
      </article>
      <div className="quiz-controls">
        {index > 0 && (
          <button onClick={() => setIndex(index - 1)}>
            <ArrowLeft size={15} /> Câu trước
          </button>
        )}
        {index < quizQuestions.length - 1 ? (
          <button
            className="submit-button"
            onClick={() => setIndex(index + 1)}
            disabled={!current.checked}
          >
            Câu tiếp theo <ArrowRight size={15} />
          </button>
        ) : (
          <button
            className="submit-button"
            onClick={() => {
              setIndex(0);
              setState({});
            }}
          >
            <RotateCcw size={15} /> Làm lại
          </button>
        )}
      </div>
    </StandardPage>
  );
}

export default App;
