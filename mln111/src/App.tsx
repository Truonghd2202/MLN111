import React, { useState } from 'react';
import { pages, quizQuestions, type MagazinePage } from './data/content';
import './App.css';
import pyramidImage from './assets/pyramid_of_capitalism.jpg';

// Import exhibition components
import { HeaderNav } from './components/HeaderNav';
import { HeroExhibition } from './components/HeroExhibition';
import { OpeningQuestion } from './components/OpeningQuestion';
import { TableOfContents } from './components/TableOfContents';
import { ChapterDivider } from './components/ChapterDivider';
import { SystemDiagram } from './components/SystemDiagram';
import { CausalStory } from './components/CausalStory';
import { HistoricalTimeline } from './components/HistoricalTimeline';
import { TriptychSection } from './components/TriptychSection';
import { SplitComparison } from './components/SplitComparison';
import { CaseStudyLoiNho } from './components/CaseStudyLoiNho';
import { QuizExperience } from './components/QuizExperience';
import { ArchiveSources } from './components/ArchiveSources';
import { ArtworkLightbox } from './components/ArtworkLightbox';

// Assets mapping via Vite Glob
const assetFiles = import.meta.glob<string>('./assets/stitch*/**/screen*.{webp,png}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const getArt = (queryStr: string) =>
  Object.entries(assetFiles).find(([path]) => path.includes('/' + queryStr))?.[1] ?? '';

const artwork = {
  cover: getArt('a_premium_academic_editorial_illustration_for'),
  class: getArt('academic_conceptual_editorial_illustration_illustrating'),
  factory: getArt('educational_academic_editorial_conceptual'),
  prometheus: getArt('classical_academic_philosophical'),
  atlas: getArt('a_museum_quality'),
  history: pyramidImage,
  struggle: getArt('historical_academic'),
  triptych: getArt('a_three_panel'),
  nation: getArt('a_premium_academic_sociology'),
  relation: getArt('an_academic_conceptual_editorial_illustration_depicting_social'),
  closing: getArt('a_masterclass'),
  community: getArt('a_four_stage_panoramic_historical_anthropology'),
  loinho: getArt('a_documentary_inspired_academic_editorial'),
};

const byNumber = (n: number): MagazinePage => pages.find((p) => p.number === n)!;

export const App: React.FC = () => {
  const [activeChapterIdx, setActiveChapterIdx] = useState(0);
  const [lightboxState, setLightboxState] = useState<{
    open: boolean;
    src: string;
    alt: string;
    caption?: string;
  }>({ open: false, src: '', alt: '' });

  // Define major exhibition chapters
  const chapters = [
    { id: 'hero', label: '00. MỞ ĐẦU', desc: 'Lời dẫn nhập và câu hỏi nền tảng', image: artwork.cover, pages: 'Tr. 179' },
    { id: 'giai-cap', label: '01. GIAI CẤP', desc: 'Định nghĩa, dấu hiệu và nguồn gốc giai cấp', image: artwork.class, pages: 'Tr. 180 - 186' },
    { id: 'dau-tranh', label: '02. ĐẤU TRANH GIAI CẤP', desc: 'Ba hình thức đấu tranh và động lực phát triển', image: artwork.struggle, pages: 'Tr. 187 - 198' },
    { id: 'dan-toc', label: '03. DÂN TỘC', desc: 'Các đặc trưng và hình thái phát triển cộng đồng', image: artwork.nation, pages: 'Tr. 199 - 204' },
    { id: 'quan-he', label: '04. GIAI CẤP × DÂN TỘC', desc: 'Mối quan hệ biện chứng giai cấp, dân tộc & nhân loại', image: artwork.relation, pages: 'Tr. 205 - 206' },
    { id: 'loi-nho', label: '05. LỐI NHỎ', desc: 'Case study thực tiễn Đen Vâu & nhận thức giai cấp', image: artwork.loinho, pages: 'Phân tích thực tiễn' },
    { id: 'kiem-tra', label: '06. KIỂM TRA', desc: '8 câu hỏi trắc nghiệm khảo sát lý luận', image: artwork.factory, pages: 'Trắc nghiệm' },
    { id: 'tong-ket', label: '07. TỔNG KẾT & NGUỒN', desc: 'Tổng kết và thư mục trích dẫn giáo trình', image: artwork.closing, pages: 'Thư mục' },
  ];

  const handleOpenLightbox = (src: string, alt: string, caption?: string) => {
    setLightboxState({ open: true, src, alt, caption });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, open: false }));
  };

  // Content extraction for components
  const page5 = byNumber(5); // Giai cấp là gì
  const page10 = byNumber(10); // Nguồn gốc giai cấp
  const page13 = byNumber(13); // Kết cấu xã hội
  const page17 = byNumber(17); // 3 hình thức đấu tranh
  const page23 = byNumber(23); // Dân tộc 2 nghĩa
  const page25 = byNumber(25); // Sự phát triển các hình thái cộng đồng
  const page28 = byNumber(28); // Giai cấp x Dân tộc

  return (
    <div className="app-exhibition-root">
      {/* Floating Header & Navigation Rail */}
      <HeaderNav
        chapters={chapters}
        activeChapter={activeChapterIdx}
        onSelectChapter={(idx) => setActiveChapterIdx(idx)}
      />

      {/* Main Content Sections Flow */}
      <main>
        {/* 00. HERO SCENE */}
        <HeroExhibition
          coverImage={artwork.cover}
          onStart={() => {
            const el = document.getElementById('question');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 00. OPENING CINEMATIC QUESTION */}
        <div id="question">
          <OpeningQuestion />
        </div>

        {/* 00. INTERACTIVE TABLE OF CONTENTS */}
        <TableOfContents
          chapters={chapters}
          onSelectChapter={(id) => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 01. CHAPTER 1: GIAI CẤP */}
        <ChapterDivider
          id="giai-cap"
          number="01"
          title="GIAI CẤP"
          subtitle="Khái niệm, dấu hiệu nhận diện và nguồn gốc lịch sử của giai cấp"
          image={artwork.class}
          theme="wine"
        />

        {/* 01.1 SYSTEM DIAGRAM: GIAI CẤP LÀ GÌ */}
        <SystemDiagram
          heading={page5.title}
          deck={page5.deck}
          points={
            page5.points?.map((p) => ({
              title: p.title,
              text: p.text,
              detail: p.detail,
              textbookPage: p.textbookPage,
              source: p.source,
            })) || []
          }
          atlasImage={artwork.atlas}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 01.2 CAUSAL STORY: NGUỒN GỐC GIAI CẤP (PAGE 10) */}
        <CausalStory
          title={page10.title || 'Nguồn gốc của giai cấp'}
          deck={page10.deck || 'Từ năng lực sản xuất đến phân hóa xã hội.'}
          steps={
            page10.steps?.map((s) => ({
              step: s.label || '',
              title: s.title,
              text: s.text,
              detail: s.detail,
              textbookPage: s.textbookPage,
            })) || []
          }
          image={artwork.factory}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 01.3 HISTORICAL SOCIAL STRUCTURE */}
        <HistoricalTimeline
          title="KẾT CẤU XÃ HỘI – GIAI CẤP TRONG LỊCH SỬ"
          deck={page13.deck || 'Các hình thái kinh tế – xã hội cùng giai cấp thống trị và bị trị tương ứng.'}
          panoramicImage={artwork.history || artwork.prometheus}
          stages={[
            {
              title: 'CỘNG SẢN NGUYÊN THỦY',
              opposingClasses: 'Chưa xuất hiện giai cấp đối kháng',
              text: 'Chưa có chế độ tư hữu phát triển và chưa có giai cấp theo nghĩa đầy đủ. Trình độ lực lượng sản xuất còn thô sơ, sản phẩm sản xuất ra chỉ đủ duy trì sự sống tối thiểu của cộng đồng.',
              detail: 'Do tư liệu sản xuất thuộc sở hữu chung của bộ tộc/thị tộc, chưa có sự tích lũy của cải dư thừa tương đối để một nhóm người chiếm đoạt làm tài sản riêng.',
              textbookPage: '184',
              label: '01',
            },
            {
              title: 'CHIẾM HỮU NÔ LỆ',
              opposingClasses: 'Chủ nô (Thống trị)  vs  Nô lệ (Bị trị)',
              text: 'Hình thái xã hội có giai cấp đầu tiên trong lịch sử loài người. Chủ nô nắm giữ toàn bộ tư liệu sản xuất và chiếm đoạt trực tiếp thân thể lẫn sức lao động của nô lệ.',
              detail: 'Nô lệ không được coi là chủ thể pháp lý mà bị đối xử như tư liệu sản xuất biết nói. Mâu thuẫn giữa chủ nô và nô lệ là mâu thuẫn đối kháng sâu sắc đầu tiên.',
              textbookPage: '182, 185',
              label: '02',
            },
            {
              title: 'PHONG KIẾN',
              opposingClasses: 'Địa chủ (Thống trị)  vs  Nông dân (Bị trị)',
              text: 'Quan hệ giai cấp vận động trên nền kinh tế nông nghiệp. Giai cấp địa chủ nắm giữ phần lớn ruộng đất – tư liệu sản xuất chủ yếu nhất của xã hội.',
              detail: 'Nông dân tá điền nhận ruộng đất canh tác và bị bóc lột thông qua địa tô (tô lao dịch, tô sản vật hoặc tô tiền) cùng các đặc quyền siêu kinh tế của chúa đất.',
              textbookPage: '182',
              label: '03',
            },
            {
              title: 'TƯ BẢN CHỦ NGHĨA',
              opposingClasses: 'Tư sản (Thống trị)  vs  Vô sản (Bị trị)',
              text: 'Quan hệ giai cấp vận động trên nền sản xuất đại công nghiệp. Giai cấp tư sản sở hữu nhà máy, máy móc và tư liệu sản xuất; giai cấp vô sản hoàn toàn tự do về thân thể nhưng không có tư liệu sản xuất.',
              detail: 'Giai cấp vô sản buộc phải bán sức lao động cho nhà tư bản và bị bóc lột giá trị thặng dư trong quá trình sản xuất hàng hóa.',
              textbookPage: '182, 186',
              label: '04',
            },
          ]}
        />

        {/* 02. CHAPTER 2: ĐẤU TRANH GIAI CẤP */}
        <ChapterDivider
          id="dau-tranh"
          number="02"
          title="ĐẤU TRANH GIAI CẤP"
          subtitle="Mâu thuẫn lợi ích cốt lõi và các hình thức đấu tranh lịch sử"
          image={artwork.struggle}
          theme="charcoal"
        />

        {/* 02.1 THREE FORMS OF STRUGGLE (TRIPTYCH) */}
        <TriptychSection
          heading={page17.title || 'BA HÌNH THỨC ĐẤU TRANH GIAI CẤP'}
          deck={page17.deck || 'Kinh tế, Chính trị và Tư tưởng trong cuộc đấu tranh của giai cấp vô sản.'}
          panels={
            page17.cards?.map((c, i) => ({
              num: `0${i + 1}`,
              title: c.title,
              text: c.text,
              detail: c.detail,
            })) || [
              { num: '01', title: 'ĐẤU TRANH KINH TẾ', text: 'Đòi tăng lương, giảm giờ làm, cải thiện điều kiện lao động.' },
              { num: '02', title: 'ĐẤU TRANH CHÍNH TRỊ', text: 'Lật đổ chính quyền của giai cấp thống trị, giành chính quyền về tay vô sản.' },
              { num: '03', title: 'ĐẤU TRANH TƯ TƯỞNG', text: 'Truyền bá hệ tư tưởng Mác – Lênin, bảo vệ bản chất cách mạng.' },
            ]
          }
          triptychImage={artwork.triptych}
        />

        {/* 03. CHAPTER 3: DÂN TỘC */}
        <ChapterDivider
          id="dan-toc"
          number="03"
          title="DÂN TỘC"
          subtitle="Sự hình thành và đặc trưng của cộng đồng dân tộc"
          image={artwork.nation}
          theme="olive"
        />

        {/* 03.1 NATION BROAD VS NARROW (SPLIT COMPARISON) */}
        <SplitComparison
          heading={page23.title || 'DÂN TỘC: HAI NGHĨA CỦA MỘT THUẬT NGỮ'}
          deck={page23.deck}
          leftSide={{
            tag: 'NGHĨA RỘNG',
            title: page23.points?.[0]?.title || 'QUỐC GIA – DÂN TỘC',
            text: page23.points?.[0]?.text || 'Chỉ cộng đồng người ổn định làm thành quốc gia.',
            detail: 'Ví dụ: Dân tộc Việt Nam, Dân tộc Pháp...',
          }}
          rightSide={{
            tag: 'NGHĨA HẸP',
            title: page23.points?.[1]?.title || 'CỘNG ĐỒNG TỘC NGƯỜI',
            text: page23.points?.[1]?.text || 'Yếu tố cấu thành nên quốc gia – dân tộc.',
            detail: page23.points?.[1]?.detail || 'Ví dụ: Kinh, Tày, Thái, Mường, Khmer...',
          }}
          note={page23.note}
        />

        {/* 03.2 COMMUNITY EVOLUTION (PANORAMIC TIMELINE) */}
        <HistoricalTimeline
          title={page25.title || 'CÁC HÌNH THÁI CỘNG ĐỒNG NGUYÊN THỦY ĐẾN DÂN TỘC'}
          deck={page25.deck || 'Sự tiến hóa lịch sử của cộng đồng người qua các thời đại.'}
          panoramicImage={artwork.community}
          stages={
            page25.steps?.map((s, i) => ({
              title: s.title,
              text: s.text,
              detail: s.detail,
              label: `0${i + 1}`,
            })) || [
              { title: 'THỊ TỘC', text: 'Cộng đồng dựa trên quan hệ huyết thống.' },
              { title: 'BỘ LẠC', text: 'Tập hợp nhiều thị tộc có liên hệ huyết thống.' },
              { title: 'BỘ TỘC', text: 'Hình thành khi liên kết huyết thống giảm dần, liên kết lãnh thổ xuất hiện.' },
              { title: 'DÂN TỘC', text: 'Cộng đồng người ổn định gắn với kinh tế, lãnh thổ, văn hóa và nhà nước.' },
            ]
          }
        />

        {/* 04. CHAPTER 4: GIAI CẤP × DÂN TỘC */}
        <ChapterDivider
          id="quan-he"
          number="04"
          title="GIAI CẤP × DÂN TỘC"
          subtitle="Quan hệ biện chứng giữa giai cấp, dân tộc và nhân loại"
          image={artwork.relation}
          theme="wine"
        />

        <SplitComparison
          heading={page28.title || 'GIAI CẤP VÀ DÂN TỘC KHÔNG ĐỒNG NHẤT'}
          deck={page28.deck || 'Mỗi phạm trù phản ánh một phương diện khác nhau của đời sống xã hội.'}
          leftSide={{
            tag: 'PHẠM TRÙ GIAI CẤP',
            title: 'QUAN HỆ SẢN XUẤT & KINH TẾ',
            text: 'Phản ánh mâu thuẫn đối kháng về kinh tế và địa vị xã hội giữa các tập đoàn người.',
          }}
          rightSide={{
            tag: 'PHẠM TRÙ DÂN TỘC',
            title: 'CỘNG ĐỒNG LỊCH SỬ & VĂN HÓA',
            text: 'Phản ánh sự gắn kết về lãnh thổ, ngôn ngữ, văn hóa và thể chế nhà nước thống nhất.',
          }}
          note="Giai cấp xuất hiện trước dân tộc. Một dân tộc bao gồm nhiều giai cấp; một giai cấp có thể tồn tại ở nhiều dân tộc."
        />

        {/* 05. CHAPTER 5: CASE STUDY LỐI NHỎ */}
        <ChapterDivider
          id="loi-nho"
          number="05"
          title="LỐI NHỎ"
          subtitle="Phân tích tình huống thực tiễn qua tác phẩm âm nhạc đương đại"
          image={artwork.loinho}
          theme="charcoal"
        />

        <CaseStudyLoiNho image={artwork.loinho} onOpenLightbox={handleOpenLightbox} />

        {/* 06. CHAPTER 6: QUIZ EXPERIENCE */}
        <ChapterDivider
          id="kiem-tra"
          number="06"
          title="KIỂM TRA"
          subtitle="Khảo sát và củng cố kiến thức bài học"
          image={artwork.factory}
          theme="dark"
        />

        <QuizExperience questions={quizQuestions} />

        {/* 07. CHAPTER 7: SUMMARY & ARCHIVE SOURCES */}
        <ChapterDivider
          id="tong-ket"
          number="07"
          title="TỔNG KẾT & NGUỒN"
          subtitle="Tổng kết và thư mục trích dẫn giáo trình chính thức"
          image={artwork.closing}
          theme="wine"
        />

        <ArchiveSources closingImage={artwork.closing} onOpenLightbox={handleOpenLightbox} />
      </main>

      {/* Lightbox Modal */}
      {lightboxState.open && (
        <ArtworkLightbox
          src={lightboxState.src}
          alt={lightboxState.alt}
          caption={lightboxState.caption}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  );
};

export default App;
