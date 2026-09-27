import type { MagazinePage } from "../data/content";

type Props = {
  page: MagazinePage;
};

export function LessonContent({ page }: Props) {
  const items = page.blocks ?? page.cards ?? page.steps ?? page.points ?? [];

  return (
    <section className="lesson-content">
      <div className="lesson-content__header">
        <span>{page.section}</span>
        <h2>{page.title}</h2>
        {page.deck && <p>{page.deck}</p>}
      </div>

      <div className="lesson-content__grid">
        {items.map((item, index) => (
          <article
            className="lesson-content__card"
            key={`${page.number}-${index}`}
          >
            <span className="lesson-content__index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            {item.detail && (
              <p className="lesson-content__detail">{item.detail}</p>
            )}
            {item.textbookPage && (
              <small>Giáo trình, trang in {item.textbookPage}</small>
            )}
          </article>
        ))}
      </div>

      {page.note && <p className="lesson-content__note">{page.note}</p>}
    </section>
  );
}
