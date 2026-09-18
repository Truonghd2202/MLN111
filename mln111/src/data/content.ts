import coverVisual from '../assets/stitch_class_and_nation_editorial_illustration/a_classical_museum_quality_engraving_illustration_of_a_fragmented_ancient_greek/screen.png';
import originVisual from '../assets/stitch_class_and_nation_editorial_illustration/an_academic_conceptual_educational_infographic_illustration_showing_movement/screen.png';
import historyVisual from '../assets/stitch_class_and_nation_editorial_illustration/a_panoramic_historical_academic_editorial_illustration_showing_the_historical/screen.png';
import nationVisual from '../assets/stitch_class_and_nation_editorial_illustration/academic_educational_comparison_editorial_illustration_depicting_two/screen.png';
import communityVisual from '../assets/stitch_class_and_nation_editorial_illustration/a_four_stage_panoramic_historical_anthropology_textbook_editorial_illustration/screen.png';
import relationVisual from '../assets/stitch_class_and_nation_editorial_illustration/a_sophisticated_circular_systems_academic_editorial_infographic_illustration/screen.png';
import loinhoVisual from '../assets/stitch_class_and_nation_editorial_illustration/a_documentary_inspired_academic_editorial_illustration_depicting_contrasting/screen.png';

export type Source = "textbook" | "extension" | "case-study";
export type PageKind =
  | "causal"
  | "branch"
  | "community"
  | "comparison"
  | "application"
  | "cover"
  | "hook"
  | "why"
  | "toc"
  | "concept"
  | "flow"
  | "timeline"
  | "cards"
  | "relation"
  | "case"
  | "quiz"
  | "summary"
  | "references";

export type ContentBlock = {
  label?: string;
  detail?: string;
  feature?: string;
  icon?: "family" | "groups" | "landmark" | "globe";
  title: string;
  text: string;
  source: Source;
  textbookPage?: string;
};
export type MagazinePage = {
  number: number;
  section: string;
  title: string;
  deck?: string;
  kind: PageKind;
  source: Source;
  textbookPage?: string;
  blocks?: ContentBlock[];
  points?: ContentBlock[];
  steps?: ContentBlock[];
  cards?: ContentBlock[];
  note?: string;
  relationLeft?: string;
  relationRight?: string;
  relationSymbol?: string;
  visual?: { src: string; alt: string; caption?: string; position?: "hero" | "side" | "full" };
};

export const pages: MagazinePage[] = [
  {
    "number": 1,
    "section": "MỞ ĐẦU",
    "title": "GIAI CẤP & DÂN TỘC",
    "deck": "Triết học Mác – Lênin",
    "kind": "cover",
    "source": "textbook",
    "textbookPage": "179–206",
    "visual": {
      "src": coverVisual,
      "alt": "Minh họa cấu trúc xã hội",
      "position": "hero",
      "caption": ""
    }
  },
  {
    "number": 2,
    "section": "MỞ ĐẦU",
    "title": "Tại sao có người bước vào đời bằng đại lộ, còn người khác lại bắt đầu bằng một lối nhỏ?",
    "deck": "Một câu hỏi đời sống để mở ra cách nhìn về những điều kiện xã hội đứng phía sau một điểm xuất phát.",
    "kind": "hook",
    "source": "case-study"
  },
  {
    "number": 3,
    "section": "MỞ ĐẦU",
    "title": "Vì sao phải nghiên cứu?",
    "deck": "Chủ nghĩa duy vật lịch sử hướng ta từ những biểu hiện bề mặt đến các quan hệ xã hội tạo ra chúng.",
    "kind": "why",
    "source": "textbook",
    "textbookPage": "180–201",
    "blocks": [
      {
        "title": "Giai cấp",
        "text": "Giúp nhận diện vị trí khác nhau của các tập đoàn người trong hệ thống sản xuất xã hội.",
        "textbookPage": "180–183",
        "source": "textbook",
        "detail": "Điểm quan trọng là giai cấp được xác định trong quan hệ với người khác và trong một phương thức sản xuất cụ thể. Vì vậy, không thể tách khái niệm này khỏi lịch sử, khỏi cách xã hội tổ chức sản xuất và phân phối của cải."
      },
      {
        "title": "Đấu tranh giai cấp",
        "text": "Giúp lý giải sự vận động của các mâu thuẫn lợi ích trong xã hội có giai cấp.",
        "textbookPage": "186–190",
        "source": "textbook",
        "detail": "Đấu tranh là quá trình các giai cấp sử dụng những phương thức khác nhau để bảo vệ lợi ích, thay đổi hoặc duy trì quan hệ xã hội. Nó có thể diễn ra công khai hoặc dưới những hình thức gián tiếp."
      },
      {
        "title": "Dân tộc",
        "text": "Giúp xem xét cộng đồng người ổn định được hình thành và phát triển trong lịch sử.",
        "textbookPage": "200–201",
        "source": "textbook",
        "detail": "Dân tộc được nhận diện không chỉ bằng một yếu tố đơn lẻ. Sự ổn định của cộng đồng hình thành từ sự kết hợp giữa lãnh thổ, kinh tế, ngôn ngữ, văn hóa, tâm lý và lịch sử chung."
      }
    ]
  },
  {
    "number": 4,
    "section": "MỞ ĐẦU",
    "title": "Mục lục",
    "deck": "Từ khái niệm đến phân tích và vận dụng.",
    "kind": "toc",
    "source": "textbook",
    "textbookPage": "179–206"
  },
  {
    "number": 5,
    "section": "GIAI CẤP",
    "title": "Giai cấp là gì?",
    "deck": "Không bắt đầu từ mức sống. Hãy bắt đầu từ vị trí trong hệ thống sản xuất.",
    "kind": "concept",
    "source": "textbook",
    "textbookPage": "180–183",
    "blocks": [
      {
        "title": "Khái niệm",
        "text": "Giai cấp là những tập đoàn người lớn khác nhau về địa vị của họ trong một hệ thống sản xuất xã hội nhất định, khác nhau về quan hệ của họ đối với tư liệu sản xuất, về vai trò trong tổ chức lao động xã hội và về cách thức, quy mô hưởng thụ của cải xã hội.",
        "textbookPage": "181–183",
        "source": "textbook"
      },
      {
        "title": "Điểm tựa của khái niệm",
        "text": "Địa vị kinh tế – xã hội được xem xét trong quan hệ với phương thức sản xuất cụ thể, không tách rời lịch sử.",
        "textbookPage": "181–182",
        "source": "textbook",
        "detail": "Cùng một nghề nghiệp hoặc cùng một mức thu nhập chưa nói hết địa vị của một người. Cần đặt họ vào toàn bộ quan hệ sản xuất: họ sở hữu gì, kiểm soát gì, lao động như thế nào và hưởng thụ thành quả ra sao."
      },
      {
        "title": "Định nghĩa của V. I. Lênin (lược thuật)",
        "text": "Những tập đoàn người khác nhau về địa vị trong hệ thống sản xuất, quan hệ với tư liệu sản xuất, tổ chức lao động và cách hưởng thụ của cải; tập đoàn này có thể chiếm đoạt lao động của tập đoàn khác do địa vị khác nhau trong một chế độ kinh tế – xã hội.",
        "textbookPage": "181",
        "source": "textbook"
      }
    ]
  },
  {
    "number": 6,
    "section": "GIAI CẤP",
    "title": "Bốn dấu hiệu nhận diện",
    "deck": "Một khái niệm có cấu trúc, không phải một nhãn dán theo cảm tính.",
    "kind": "cards",
    "source": "textbook",
    "textbookPage": "181–182",
    "cards": [
      {
        "title": "Tư liệu sản xuất",
        "text": "Quan hệ sở hữu và quan hệ sử dụng đối với những điều kiện vật chất của sản xuất.",
        "textbookPage": "181–182",
        "source": "textbook",
        "label": "01",
        "detail": "Tư liệu sản xuất gồm những điều kiện vật chất cần cho quá trình sản xuất. Khi phân tích giai cấp, câu hỏi về sở hữu và quyền kiểm soát những điều kiện ấy giúp làm rõ ai có khả năng chi phối quá trình sản xuất."
      },
      {
        "title": "Tổ chức lao động",
        "text": "Vai trò của tập đoàn người trong tổ chức và điều hành quá trình lao động xã hội.",
        "textbookPage": "181–182",
        "source": "textbook",
        "label": "02",
        "detail": "Phân công lao động không chỉ nói ai làm công việc gì, mà còn cho thấy ai tổ chức, điều khiển và ai trực tiếp thực hiện lao động. Đây là một dấu hiệu giúp nhìn thấy quan hệ quyền lực phía sau hoạt động sản xuất."
      },
      {
        "title": "Cách thức hưởng thụ",
        "text": "Vị trí trong sản xuất gắn với cách thức và quy mô chiếm hữu, phân phối của cải.",
        "textbookPage": "181–182",
        "source": "textbook",
        "label": "03",
        "detail": "Của cải xã hội không được phân phối ngẫu nhiên. Cách một tập đoàn người nhận phần của cải và nguồn lực phụ thuộc vào địa vị của họ trong quá trình sản xuất và vào quan hệ mà họ tham gia."
      },
      {
        "title": "Địa vị kinh tế – xã hội",
        "text": "Tổng hợp các quan hệ trên trong một hệ thống sản xuất nhất định.",
        "textbookPage": "181–182",
        "source": "textbook",
        "label": "04",
        "detail": "Đây là kết quả tổng hợp, không phải một đặc điểm riêng lẻ. Muốn nhận diện một giai cấp cần xem xét các quan hệ này đồng thời, trong cùng một hoàn cảnh lịch sử."
      }
    ]
  },
  {
    "number": 7,
    "section": "GIAI CẤP",
    "title": "Tư liệu sản xuất: mối quan hệ quyết định",
    "deck": "Cùng làm việc trong một nền kinh tế không có nghĩa là cùng một địa vị giai cấp.",
    "kind": "relation",
    "source": "textbook",
    "textbookPage": "182",
    "points": [
      {
        "title": "Sở hữu",
        "text": "Ai chiếm hữu những tư liệu sản xuất chủ yếu và bằng quan hệ nào?",
        "textbookPage": "182",
        "source": "textbook",
        "detail": "Sở hữu ở đây cần được hiểu trong quan hệ xã hội, không chỉ là việc một cá nhân có một đồ vật. Vấn đề lý luận là quyền chiếm hữu, sử dụng và định đoạt những tư liệu sản xuất có vai trò trong nền sản xuất xã hội."
      },
      {
        "title": "Tổ chức",
        "text": "Ai tổ chức, điều khiển hoặc thực hiện lao động trong quá trình sản xuất?",
        "textbookPage": "182",
        "source": "textbook",
        "detail": "Câu hỏi về tổ chức giúp phân biệt vị trí của những người điều hành quá trình sản xuất với vị trí của những người trực tiếp bán sức lao động. Hai vị trí có thể liên quan nhưng không đồng nhất."
      },
      {
        "title": "Phân phối",
        "text": "Quan hệ sản xuất quy định cách thức và quy mô hưởng thụ sản phẩm xã hội.",
        "textbookPage": "182",
        "source": "textbook",
        "detail": "Phân phối là mắt xích nối sản xuất với đời sống. Khi quan hệ sản xuất thay đổi, cách phân phối sản phẩm, thu nhập và cơ hội tiếp cận các điều kiện xã hội cũng thay đổi theo."
      }
    ],
    "relationLeft": "TƯ LIỆU SẢN XUẤT",
    "relationRight": "ĐỊA VỊ GIAI CẤP"
  },
  {
    "number": 8,
    "section": "GIAI CẤP",
    "title": "Địa vị kinh tế – xã hội",
    "deck": "Đọc một vị trí trong chỉnh thể, không cô lập một đặc điểm.",
    "kind": "flow",
    "source": "textbook",
    "textbookPage": "181–182",
    "steps": [
      {
        "title": "Vị trí trong hệ thống sản xuất",
        "text": "Xác định điểm đứng của tập đoàn người trong phương thức sản xuất.",
        "textbookPage": "181–182",
        "source": "textbook",
        "detail": "Không nên nhìn một cá nhân tách khỏi hệ thống. Cùng một hành động lao động có thể mang ý nghĩa khác nhau tùy người đó làm việc trong quan hệ sở hữu, quản lý và phân phối nào."
      },
      {
        "title": "Quan hệ với tư liệu sản xuất",
        "text": "Làm rõ quan hệ sở hữu, chi phối hoặc bị chi phối.",
        "textbookPage": "181–182",
        "source": "textbook",
        "detail": "Đây là bước kiểm tra trung tâm của phân tích giai cấp. Nó buộc người học chuyển từ câu hỏi “người này giàu hay nghèo?” sang câu hỏi “người này đứng ở đâu trong quan hệ sản xuất?”."
      },
      {
        "title": "Vai trò trong tổ chức lao động",
        "text": "Đặt hoạt động của họ trong sự phân công lao động xã hội.",
        "textbookPage": "181–182",
        "source": "textbook",
        "detail": "Vai trò tổ chức lao động cho thấy quyền quyết định, quyền điều phối và mức độ phụ thuộc của các nhóm người trong quá trình sản xuất. Nó bổ sung cho việc phân tích sở hữu."
      },
      {
        "title": "Cách thức hưởng thụ của cải",
        "text": "Nhìn vào quan hệ phân phối gắn với địa vị sản xuất.",
        "textbookPage": "181–182",
        "source": "textbook",
        "detail": "Không chỉ cần hỏi một người nhận được bao nhiêu, mà còn phải hỏi họ nhận được thông qua quan hệ nào. Cùng một kết quả thu nhập có thể xuất phát từ những vị trí xã hội khác nhau."
      },
      {
        "title": "Địa vị kinh tế – xã hội",
        "text": "Kết quả tổng hợp dùng để nhận diện giai cấp trong lịch sử cụ thể.",
        "textbookPage": "181–182",
        "source": "textbook",
        "detail": "Đây là kết quả tổng hợp, không phải một đặc điểm riêng lẻ. Muốn nhận diện một giai cấp cần xem xét các quan hệ này đồng thời, trong cùng một hoàn cảnh lịch sử."
      }
    ]
  },
  {
    "number": 9,
    "section": "GIAI CẤP",
    "title": "Giai cấp là một phạm trù lịch sử",
    "deck": "Nó xuất hiện, phát triển và mất đi cùng những điều kiện lịch sử nhất định.",
    "kind": "timeline",
    "source": "textbook",
    "textbookPage": "182–185",
    "steps": [
      {
        "title": "Cộng sản nguyên thủy",
        "text": "Chưa có chế độ tư hữu phát triển và chưa có giai cấp theo nghĩa đầy đủ.",
        "textbookPage": "184",
        "source": "textbook",
        "detail": "Ở giai đoạn này, trình độ lực lượng sản xuất thấp và tài sản sản xuất chủ yếu mang tính cộng đồng. Chưa có cơ sở để hình thành những giai cấp đối kháng ổn định như trong các xã hội về sau."
      },
      {
        "title": "Chiếm hữu nô lệ",
        "text": "Sự phân hóa giai cấp gắn với chế độ chiếm hữu nô lệ.",
        "textbookPage": "182, 185",
        "source": "textbook",
        "detail": "Khi tư hữu và sự phân hóa phát triển, xã hội xuất hiện những tập đoàn người có địa vị đối lập. Hình thái chiếm hữu nô lệ cho thấy giai cấp gắn với một kiểu quan hệ sản xuất cụ thể."
      },
      {
        "title": "Phong kiến",
        "text": "Quan hệ giai cấp biểu hiện trong kết cấu xã hội phong kiến.",
        "textbookPage": "182",
        "source": "textbook",
        "detail": "Trong xã hội phong kiến, quan hệ địa tô và quyền sở hữu ruộng đất giữ vai trò quan trọng trong việc quy định địa vị của các giai cấp. Kết cấu xã hội vì thế không thể giải thích chỉ bằng mức giàu nghèo."
      },
      {
        "title": "Tư bản chủ nghĩa",
        "text": "Quan hệ giữa các giai cấp vận động trên nền sản xuất tư bản chủ nghĩa.",
        "textbookPage": "182",
        "source": "textbook",
        "detail": "Quan hệ giữa người sở hữu tư liệu sản xuất và người lao động làm thuê là một trục quan trọng của kết cấu giai cấp tư bản chủ nghĩa. Quan hệ ấy vận động cùng sự phát triển của nền sản xuất."
      }
    ],
    "visual": {
      "src": historyVisual,
      "alt": "Bốn hình thức xã hội được đặt theo trình tự lịch sử",
      "position": "side",
      "caption": "Sơ đồ minh họa do nhóm biên soạn; nội dung và nguồn được ghi bằng chữ bên cạnh."
    }
  },
  {
    "number": 10,
    "section": "GIAI CẤP",
    "title": "Nguồn gốc của giai cấp",
    "deck": "Từ năng lực sản xuất đến phân hóa xã hội.",
    "kind": "causal",
    "source": "textbook",
    "textbookPage": "184–185",
    "steps": [
      {
        "title": "Lực lượng sản xuất phát triển",
        "text": "Năng lực sản xuất xã hội đạt bước phát triển mới.",
        "textbookPage": "184–185",
        "source": "textbook",
        "label": "NGUYÊN NHÂN SÂU XA"
      },
      {
        "title": "Phân công lao động xã hội",
        "text": "Các hoạt động và vị trí trong sản xuất phân hóa rõ hơn.",
        "textbookPage": "184–185",
        "source": "textbook"
      },
      {
        "title": "Sản phẩm dư thừa",
        "text": "Năng suất lao động tạo ra khả năng xuất hiện sản phẩm dư thừa.",
        "textbookPage": "184–185",
        "source": "textbook"
      },
      {
        "title": "Tư hữu về tư liệu sản xuất",
        "text": "Chế độ tư hữu xuất hiện và trở thành nguyên nhân trực tiếp của phân hóa.",
        "textbookPage": "184–185",
        "source": "textbook",
        "label": "NGUYÊN NHÂN TRỰC TIẾP"
      },
      {
        "title": "Phân hóa xã hội",
        "text": "Xã hội tách thành những tập đoàn người có địa vị và lợi ích khác nhau.",
        "textbookPage": "184–185",
        "source": "textbook"
      },
      {
        "title": "Giai cấp xuất hiện",
        "text": "Giai cấp hình thành như một hiện tượng lịch sử.",
        "textbookPage": "184–185",
        "source": "textbook"
      }
    ],
    "note": "Sơ đồ khái quát để học tập; các quá trình tác động qua lại, không phải một chuỗi lịch sử máy móc.",
    "visual": {
      "src": originVisual,
      "alt": "Chuỗi sáu bước từ phát triển sản xuất tới sự xuất hiện giai cấp",
      "position": "side",
      "caption": "Sơ đồ minh họa do nhóm biên soạn; nội dung và nguồn được ghi bằng chữ bên cạnh."
    }
  },
  {
    "number": 11,
    "section": "GIAI CẤP",
    "title": "Nguyên nhân sâu xa và trực tiếp",
    "deck": "Hai tầng giải thích không thể thay thế cho nhau.",
    "kind": "cards",
    "source": "textbook",
    "textbookPage": "185",
    "cards": [
      {
        "title": "Nguyên nhân sâu xa",
        "text": "Sự phát triển của lực lượng sản xuất làm biến đổi phương thức tổ chức đời sống xã hội.",
        "textbookPage": "185",
        "source": "textbook",
        "label": "SÂU XA"
      },
      {
        "title": "Nguyên nhân trực tiếp",
        "text": "Sự xuất hiện chế độ tư hữu về tư liệu sản xuất dẫn đến phân hóa các tập đoàn người.",
        "textbookPage": "185",
        "source": "textbook",
        "label": "TRỰC TIẾP"
      }
    ]
  },
  {
    "number": 12,
    "section": "GIAI CẤP",
    "title": "Kết cấu xã hội – giai cấp",
    "deck": "Một tổng thể gồm các giai cấp, tầng lớp và quan hệ giữa chúng trong một giai đoạn lịch sử.",
    "kind": "concept",
    "source": "textbook",
    "textbookPage": "185–186",
    "blocks": [
      {
        "title": "Giai cấp cơ bản",
        "text": "Những giai cấp gắn với phương thức sản xuất thống trị và quyết định diện mạo xã hội.",
        "textbookPage": "185–186",
        "source": "textbook",
        "detail": "Giai cấp cơ bản thường gắn trực tiếp với phương thức sản xuất đang giữ vai trò thống trị. Quan hệ giữa các giai cấp cơ bản giúp giải thích mâu thuẫn chủ yếu của một xã hội."
      },
      {
        "title": "Giai cấp không cơ bản",
        "text": "Những giai cấp tồn tại trong kết cấu xã hội nhưng không giữ vị trí quyết định của phương thức sản xuất thống trị.",
        "textbookPage": "185–186",
        "source": "textbook",
        "detail": "Sự tồn tại của giai cấp không cơ bản cho thấy một xã hội có thể chứa nhiều lớp quan hệ chồng lên nhau. Không nên bỏ qua các nhóm này khi mô tả kết cấu xã hội cụ thể."
      },
      {
        "title": "Tầng lớp xã hội",
        "text": "Những nhóm xã hội được nhận diện theo vị trí, vai trò và điều kiện xã hội cụ thể.",
        "textbookPage": "185–186",
        "source": "textbook",
        "detail": "Tầng lớp là một bộ phận của kết cấu xã hội được nhận diện bằng vị trí, vai trò hoặc điều kiện xã hội. Tầng lớp có thể nằm giữa, liên kết hoặc tác động tới các giai cấp cơ bản."
      },
      {
        "title": "Quan hệ giữa các bộ phận",
        "text": "Kết cấu chỉ được hiểu đầy đủ khi đặt các bộ phận trong quan hệ với nhau.",
        "textbookPage": "185–186",
        "source": "textbook",
        "detail": "Kết cấu xã hội không phải bảng liệt kê đứng yên. Các bộ phận tác động, liên minh, trung gian hoặc đối lập với nhau và làm cho đời sống xã hội luôn vận động."
      },
      {
        "title": "Sự vận động",
        "text": "Kết cấu xã hội – giai cấp không đứng yên; nó biến đổi khi phương thức sản xuất, quan hệ sản xuất và các phương thức sản xuất thay thế nhau.",
        "textbookPage": "185–186",
        "source": "textbook"
      }
    ]
  },
  {
    "number": 13,
    "section": "GIAI CẤP",
    "title": "Giai cấp thống trị và giai cấp bị trị",
    "deck": "Địa vị đối với tư liệu sản xuất tạo ra những vị trí đối lập trong xã hội có giai cấp.",
    "kind": "concept",
    "source": "textbook",
    "textbookPage": "181–183",
    "blocks": [
      {
        "title": "Giai cấp thống trị",
        "text": "Giai cấp nắm giữ tư liệu sản xuất chủ yếu, có địa vị kinh tế – xã hội chi phối và có khả năng giữ vai trò thống trị trong tổ chức, quản lý sản xuất cũng như phân phối sản phẩm.",
        "textbookPage": "181–183",
        "source": "textbook"
      },
      {
        "title": "Giai cấp bị trị",
        "text": "Giai cấp không hoặc ít có quyền sở hữu đối với tư liệu sản xuất chủ yếu, phải phụ thuộc vào giai cấp nắm giữ tư liệu sản xuất và thường bị chi phối trong quá trình sản xuất, phân phối.",
        "textbookPage": "181–183",
        "source": "textbook"
      },
      {
        "title": "Các xã hội lịch sử",
        "text": "Chiếm hữu nô lệ: chủ nô – nô lệ; phong kiến: địa chủ – nông dân; tư bản chủ nghĩa: tư sản – vô sản. Khi phương thức sản xuất thay đổi, vị trí của các giai cấp cũng thay đổi.",
        "textbookPage": "181–183",
        "source": "textbook"
      }
    ]
  },
  {
    "number": 14,
    "section": "ĐẤU TRANH GIAI CẤP",
    "title": "Đấu tranh giai cấp là gì?",
    "deck": "Khi các giai cấp có lợi ích cơ bản đối lập, mâu thuẫn biểu hiện thành đấu tranh.",
    "kind": "concept",
    "source": "textbook",
    "textbookPage": "187–188",
    "blocks": [
      {
        "title": "Khái niệm",
        "text": "Đấu tranh giai cấp là cuộc đấu tranh của các giai cấp có lợi ích cơ bản đối lập nhau trong xã hội có giai cấp.",
        "textbookPage": "187–188",
        "source": "textbook"
      },
      {
        "title": "Nền tảng",
        "text": "Nguồn gốc của nó nằm trong sự đối lập về lợi ích do địa vị khác nhau trong quan hệ sản xuất.",
        "textbookPage": "187–188",
        "source": "textbook",
        "detail": "Khi một bên muốn duy trì quan hệ đem lại lợi ích cho mình còn bên kia muốn thay đổi quan hệ ấy, mâu thuẫn có thể chuyển thành đấu tranh. Hình thức biểu hiện phụ thuộc vào điều kiện lịch sử."
      }
    ]
  },
  {
    "number": 15,
    "section": "ĐẤU TRANH GIAI CẤP",
    "title": "Từ địa vị đến mâu thuẫn",
    "deck": "Sơ đồ hóa cách một khác biệt kinh tế trở thành một quan hệ xã hội vận động.",
    "kind": "flow",
    "source": "textbook",
    "textbookPage": "182–188",
    "steps": [
      {
        "title": "Địa vị kinh tế khác nhau",
        "text": "Các giai cấp đứng ở vị trí khác nhau trong hệ thống sản xuất.",
        "textbookPage": "182",
        "source": "textbook",
        "detail": "Địa vị khác nhau là điểm xuất phát khách quan. Nó tạo ra những khả năng, giới hạn và lợi ích không giống nhau trong quá trình tổ chức đời sống xã hội."
      },
      {
        "title": "Lợi ích khác nhau",
        "text": "Địa vị khác nhau làm nảy sinh những lợi ích khác nhau.",
        "textbookPage": "183",
        "source": "textbook",
        "detail": "Lợi ích không chỉ là mong muốn chủ quan. Nó gắn với vị trí mà các tập đoàn người đang giữ và với những điều kiện vật chất giúp họ duy trì hoặc thay đổi vị trí đó."
      },
      {
        "title": "Lợi ích đối lập",
        "text": "Trong quan hệ đối kháng, lợi ích của các giai cấp có thể đối lập nhau.",
        "textbookPage": "187",
        "source": "textbook",
        "detail": "Lợi ích trở thành đối lập khi việc bảo vệ lợi ích của một giai cấp mâu thuẫn với việc bảo vệ lợi ích cơ bản của giai cấp khác trong cùng quan hệ xã hội."
      },
      {
        "title": "Mâu thuẫn giai cấp",
        "text": "Mâu thuẫn xã hội biểu hiện thành mâu thuẫn giữa các giai cấp.",
        "textbookPage": "187–188",
        "source": "textbook",
        "detail": "Mâu thuẫn giai cấp là mâu thuẫn xã hội có cơ sở trong quan hệ sản xuất. Nhận diện cơ sở ấy giúp tránh biến phân tích thành sự quy kết đạo đức đơn giản."
      },
      {
        "title": "Đấu tranh giai cấp",
        "text": "Mâu thuẫn được giải quyết thông qua đấu tranh.",
        "textbookPage": "187–188",
        "source": "textbook",
        "detail": "Đấu tranh là quá trình các giai cấp sử dụng những phương thức khác nhau để bảo vệ lợi ích, thay đổi hoặc duy trì quan hệ xã hội. Nó có thể diễn ra công khai hoặc dưới những hình thức gián tiếp."
      }
    ]
  },
  {
    "number": 16,
    "section": "ĐẤU TRANH GIAI CẤP",
    "title": "Mâu thuẫn lợi ích",
    "deck": "Không phải mọi khác biệt xã hội đều tự động là đấu tranh giai cấp.",
    "kind": "relation",
    "source": "textbook",
    "textbookPage": "182–188",
    "points": [
      {
        "title": "Lợi ích kinh tế",
        "text": "Là cơ sở trực tiếp và sâu sắc của những xung đột giai cấp trong xã hội có giai cấp.",
        "textbookPage": "182–183",
        "source": "textbook",
        "detail": "Hình thức kinh tế thường xuất hiện trong những yêu cầu trực tiếp về điều kiện lao động, tiền công, phân phối và quyền lợi vật chất. Nó là nền tảng gần của các hình thức đấu tranh khác."
      },
      {
        "title": "Lợi ích chính trị",
        "text": "Gắn với quyền lực nhà nước và khả năng chi phối các quan hệ xã hội.",
        "textbookPage": "183, 188",
        "source": "textbook",
        "detail": "Khi mâu thuẫn liên quan đến quyền lực nhà nước và khả năng quyết định hướng phát triển xã hội, đấu tranh mang nội dung chính trị. Kinh tế và chính trị vì thế không tách rời nhau."
      },
      {
        "title": "Lợi ích tư tưởng",
        "text": "Liên quan đến việc bảo vệ hoặc phê phán những quan niệm xã hội khác nhau.",
        "textbookPage": "188",
        "source": "textbook",
        "detail": "Đấu tranh tư tưởng diễn ra trong lĩnh vực quan niệm về xã hội, con người và con đường phát triển. Nó góp phần làm cho lợi ích của các giai cấp được nhận thức, bảo vệ hoặc phê phán."
      }
    ],
    "relationLeft": "ĐỊA VỊ KINH TẾ",
    "relationRight": "LỢI ÍCH GIAI CẤP"
  },
  {
    "number": 17,
    "section": "ĐẤU TRANH GIAI CẤP",
    "title": "Ba hình thức đấu tranh",
    "deck": "Kinh tế, chính trị và tư tưởng gắn bó trong một chỉnh thể.",
    "kind": "cards",
    "source": "textbook",
    "textbookPage": "191–193",
    "cards": [
      {
        "title": "Kinh tế",
        "text": "Đấu tranh nhằm bảo vệ lợi ích kinh tế trực tiếp và cải thiện điều kiện sống, lao động.",
        "textbookPage": "191–192",
        "source": "textbook",
        "label": "01",
        "detail": "Đây là hình thức trực tiếp nhất vì gắn với lợi ích vật chất trước mắt. Tuy nhiên, nếu chỉ dừng ở yêu cầu kinh tế thì chưa bao quát toàn bộ mục tiêu chính trị và tư tưởng của cuộc đấu tranh."
      },
      {
        "title": "Chính trị",
        "text": "Đấu tranh hướng tới quyền lực chính trị, tổ chức và định hướng xã hội.",
        "textbookPage": "192",
        "source": "textbook",
        "label": "02",
        "detail": "Đấu tranh chính trị có thể làm thay đổi tương quan lực lượng và quyền quyết định trong xã hội. Nó thường kế thừa những mâu thuẫn kinh tế đã phát triển đến một mức độ nhất định."
      },
      {
        "title": "Tư tưởng",
        "text": "Đấu tranh trên lĩnh vực ý thức hệ, quan niệm và định hướng nhận thức xã hội.",
        "textbookPage": "192–193",
        "source": "textbook",
        "label": "03",
        "detail": "Đấu tranh tư tưởng tác động vào cách xã hội hiểu về lợi ích, quyền lực và trật tự đang tồn tại. Vì vậy nó vừa phản ánh vừa tác động trở lại các quan hệ vật chất."
      }
    ]
  },
  {
    "number": 18,
    "section": "ĐẤU TRANH GIAI CẤP",
    "title": "Vai trò của đấu tranh giai cấp",
    "deck": "Đấu tranh giai cấp là một trong những động lực phát triển của xã hội có giai cấp đối kháng.",
    "kind": "concept",
    "source": "textbook",
    "textbookPage": "189–190",
    "blocks": [
      {
        "title": "Động lực lịch sử",
        "text": "Đấu tranh giai cấp thúc đẩy sự vận động và biến đổi của các quan hệ xã hội trong những điều kiện nhất định.",
        "textbookPage": "189–190",
        "source": "textbook",
        "detail": "Vai trò này không có nghĩa mọi biến đổi đều chỉ do đấu tranh giai cấp. Cần đặt đấu tranh trong quan hệ với lực lượng sản xuất, điều kiện kinh tế và toàn bộ hoàn cảnh lịch sử."
      },
      {
        "title": "Cải biến quan hệ xã hội",
        "text": "Thông qua đấu tranh, những quan hệ và thiết chế không còn phù hợp có thể bị thay đổi.",
        "textbookPage": "189–190",
        "source": "textbook",
        "detail": "Khi tương quan lực lượng thay đổi, những thiết chế và quan hệ cũ có thể bị thách thức. Sự cải biến cụ thể phụ thuộc vào mục tiêu, lực lượng và điều kiện của từng thời kỳ."
      },
      {
        "title": "Điều kiện cụ thể",
        "text": "Vai trò và hình thức biểu hiện phải được xem xét trong từng giai đoạn lịch sử cụ thể.",
        "textbookPage": "190",
        "source": "textbook",
        "detail": "Một luận điểm chỉ có ý nghĩa khi đặt vào thời gian, không gian và phương thức sản xuất cụ thể. Đây là nguyên tắc giúp vận dụng lý luận một cách lịch sử – cụ thể."
      },
      {
        "title": "Liên minh giai cấp",
        "text": "Các giai cấp có thể liên kết trên cơ sở thống nhất lợi ích. Sự thống nhất về lợi ích cơ bản tạo nên liên minh chiến lược, còn lợi ích trước mắt có thể tạo nên liên minh sách lược, tạm thời.",
        "textbookPage": "189",
        "source": "textbook"
      }
    ]
  },
  {
    "number": 19,
    "section": "ĐẤU TRANH GIAI CẤP",
    "title": "Đấu tranh của giai cấp vô sản",
    "deck": "Một nội dung được trình bày trong mối quan hệ với sứ mệnh lịch sử của giai cấp vô sản.",
    "kind": "timeline",
    "source": "textbook",
    "textbookPage": "191–193",
    "steps": [
      {
        "title": "Đấu tranh kinh tế",
        "text": "Bảo vệ lợi ích trước mắt của người lao động trong quan hệ sản xuất.",
        "textbookPage": "191–192",
        "source": "textbook",
        "detail": "Trong cuộc đấu tranh của giai cấp vô sản, yêu cầu kinh tế bảo vệ lợi ích trước mắt của người lao động đồng thời tạo kinh nghiệm tổ chức và ý thức đoàn kết."
      },
      {
        "title": "Đấu tranh chính trị",
        "text": "Hướng tới mục tiêu chính trị và quyền lực của giai cấp.",
        "textbookPage": "192",
        "source": "textbook",
        "detail": "Đấu tranh chính trị đưa những yêu cầu riêng lẻ vào vấn đề quyền lực và định hướng xã hội. Nội dung của nó thay đổi trước và sau khi giành chính quyền."
      },
      {
        "title": "Đấu tranh tư tưởng",
        "text": "Đấu tranh chống hệ tư tưởng đối lập, xây dựng nhận thức phù hợp với mục tiêu của mình.",
        "textbookPage": "192–193",
        "source": "textbook",
        "detail": "Đấu tranh tư tưởng giúp người lao động nhận thức vị trí và lợi ích của mình, đồng thời phê phán những quan niệm bảo vệ quan hệ áp bức."
      }
    ]
  },
  {
    "number": 20,
    "section": "ĐẤU TRANH GIAI CẤP",
    "title": "Trước và sau khi giành chính quyền",
    "deck": "Hình thức và nội dung đấu tranh biến đổi theo điều kiện lịch sử.",
    "kind": "relation",
    "source": "textbook",
    "textbookPage": "191–195",
    "points": [
      {
        "title": "Trước khi giành chính quyền",
        "text": "Các hình thức đấu tranh kinh tế, chính trị, tư tưởng hướng tới thay đổi quan hệ quyền lực đang tồn tại.",
        "textbookPage": "191–193",
        "source": "textbook",
        "detail": "Các hình thức kinh tế, chính trị và tư tưởng có thể đan xen, nhưng mục tiêu và cách thức vận động chịu sự chi phối của tương quan lực lượng trong xã hội lúc đó."
      },
      {
        "title": "Sau khi giành chính quyền",
        "text": "Đấu tranh tiếp tục trong điều kiện mới vì giai cấp cũ còn tiềm lực, cơ sở kinh tế của bóc lột chưa lập tức mất đi, sản xuất nhỏ và kinh tế nhiều thành phần còn tồn tại, cùng với tàn dư tư tưởng và tâm lý của xã hội cũ.",
        "textbookPage": "193",
        "source": "textbook",
        "detail": "Việc giành chính quyền không làm mọi mâu thuẫn biến mất. Đấu tranh tiếp tục trong điều kiện mới, với nhiệm vụ, đối tượng và phương thức có thể thay đổi."
      },
      {
        "title": "Hai nhiệm vụ chiến lược",
        "text": "Bảo vệ thành quả cách mạng đã giành được và cải tạo xã hội cũ, xây dựng xã hội mới là hai nhiệm vụ gắn bó chặt chẽ trong thời kỳ quá độ.",
        "textbookPage": "194",
        "source": "textbook"
      },
      {
        "title": "Các hình thức đấu tranh",
        "text": "Trong thời kỳ quá độ, đấu tranh có thể diễn ra dưới nhiều hình thức: có đổ máu và không đổ máu, bạo lực và hòa bình, quân sự và kinh tế, giáo dục và hành chính; việc lựa chọn phụ thuộc điều kiện từng nước và từng giai đoạn.",
        "textbookPage": "195",
        "source": "textbook"
      }
    ],
    "relationLeft": "TRƯỚC CHÍNH QUYỀN",
    "relationRight": "SAU CHÍNH QUYỀN"
  },
  {
    "number": 21,
    "section": "DÂN TỘC",
    "title": "Dân tộc là gì?",
    "deck": "Một cộng đồng người ổn định, hình thành và phát triển trong lịch sử.",
    "kind": "concept",
    "source": "textbook",
    "textbookPage": "200–201",
    "blocks": [
      {
        "title": "Khái niệm",
        "text": "Dân tộc là một cộng đồng người ổn định được hình thành trong lịch sử trên cơ sở một lãnh thổ thống nhất, một ngôn ngữ thống nhất, một nền kinh tế thống nhất, một nền văn hóa và tâm lý, tính cách bền vững, với một nhà nước và pháp luật thống nhất.",
        "textbookPage": "200–201",
        "source": "textbook"
      },
      {
        "title": "Hai nghĩa của dân tộc",
        "text": "Theo nghĩa rộng, dân tộc là quốc gia – dân tộc. Theo nghĩa hẹp, dân tộc là cộng đồng tộc người. Cộng đồng tộc người là một yếu tố cấu thành quốc gia – dân tộc.",
        "textbookPage": "200–201",
        "source": "textbook"
      },
      {
        "title": "Tính lịch sử",
        "text": "Dân tộc không phải một cộng đồng tự nhiên bất biến mà được hình thành và phát triển trong những điều kiện lịch sử cụ thể.",
        "textbookPage": "200–201",
        "source": "textbook",
        "detail": "Nhìn dân tộc như một quá trình lịch sử giúp giải thích vì sao cộng đồng có thể thay đổi, mở rộng quan hệ và hình thành những ý thức cộng đồng mới."
      }
    ]
  },
  {
    "number": 22,
    "section": "DÂN TỘC",
    "title": "Các đặc trưng của cộng đồng dân tộc",
    "deck": "Năm yếu tố liên kết thành một cộng đồng lịch sử.",
    "kind": "cards",
    "source": "textbook",
    "textbookPage": "201–204",
    "cards": [
      {
        "title": "Lãnh thổ",
        "text": "Một không gian sinh tồn tương đối ổn định của cộng đồng.",
        "textbookPage": "201–202",
        "source": "textbook",
        "label": "01",
        "detail": "Lãnh thổ tạo ra không gian sinh tồn, giao lưu và tổ chức đời sống chung. Đây là điều kiện vật chất quan trọng để các quan hệ kinh tế và văn hóa được duy trì."
      },
      {
        "title": "Đời sống kinh tế",
        "text": "Nền kinh tế trở thành một hệ thống thống nhất của quốc gia; các quan hệ kinh tế, đặc biệt là quan hệ thị trường, làm tăng tính thống nhất, ổn định và bền vững của cộng đồng.",
        "textbookPage": "202–203",
        "source": "textbook",
        "label": "02",
        "detail": "Các quan hệ kinh tế chung tạo ra sự phụ thuộc và liên kết giữa những người trong cộng đồng. Chúng giúp cộng đồng vượt khỏi các liên hệ huyết thống nhỏ hẹp."
      },
      {
        "title": "Ngôn ngữ",
        "text": "Phương tiện giao tiếp và lưu giữ kinh nghiệm cộng đồng.",
        "textbookPage": "202",
        "source": "textbook",
        "label": "03",
        "detail": "Ngôn ngữ cho phép truyền đạt kinh nghiệm, lưu giữ ký ức và tổ chức giao tiếp trong cộng đồng. Nó gắn với văn hóa nhưng không thể được xem là yếu tố duy nhất."
      },
      {
        "title": "Văn hóa và tâm lý",
        "text": "Nền văn hóa dân tộc vừa thống nhất vừa đa dạng, thể hiện qua phong tục, tập quán, tín ngưỡng và đời sống tinh thần. Tâm lý, tính cách dân tộc được hình thành qua lịch sử lâu dài.",
        "textbookPage": "203–204",
        "source": "textbook",
        "label": "04",
        "detail": "Văn hóa và tâm lý cộng đồng được bồi đắp qua lịch sử chung, phong tục, lối sống và những biểu tượng mà các thành viên cùng chia sẻ."
      },
      {
        "title": "Nhà nước và pháp luật thống nhất",
        "text": "Đây là đặc trưng của dân tộc – quốc gia. Nhà nước, pháp luật và các thiết chế chính trị thống nhất góp phần xóa bỏ sự phân tán về kinh tế, chính trị và củng cố cộng đồng.",
        "textbookPage": "204",
        "source": "textbook",
        "label": "05"
      }
    ]
  },
  {
    "number": 23,
    "section": "DÂN TỘC",
    "title": "Dân tộc: hai nghĩa của một thuật ngữ",
    "deck": "Hai cách dùng thuật ngữ cần được đặt trong đúng ngữ cảnh của bài học.",
    "kind": "branch",
    "source": "textbook",
    "textbookPage": "201",
    "points": [
      {
        "title": "DÂN TỘC THEO NGHĨA RỘNG",
        "text": "Quốc gia – dân tộc. Ví dụ: dân tộc Việt Nam.",
        "source": "textbook",
        "textbookPage": "201"
      },
      {
        "title": "DÂN TỘC THEO NGHĨA HẸP",
        "text": "Cộng đồng tộc người, là yếu tố cấu thành quốc gia – dân tộc.",
        "source": "textbook",
        "textbookPage": "201",
        "detail": "Ví dụ minh họa: Kinh, Tày, Thái, Mường, Khmer…"
      }
    ],
    "note": "Hai nghĩa không đồng nhất: một quốc gia – dân tộc có thể gồm nhiều cộng đồng tộc người.",
    "visual": {
      "src": nationVisual,
      "alt": "Một khái niệm phân nhánh thành quốc gia – dân tộc và cộng đồng tộc người",
      "position": "side",
      "caption": "Sơ đồ minh họa do nhóm biên soạn; nội dung và nguồn được ghi bằng chữ bên cạnh."
    }
  },
  {
    "number": 24,
    "section": "DÂN TỘC",
    "title": "Quá trình hình thành dân tộc",
    "deck": "Các hình thức cộng đồng người vận động cùng sự phát triển của đời sống xã hội.",
    "kind": "community",
    "source": "textbook",
    "textbookPage": "198–201",
    "steps": [
      {
        "title": "Thị tộc",
        "text": "Cộng đồng dựa trên quan hệ huyết thống.",
        "source": "textbook",
        "textbookPage": "199",
        "feature": "Cùng tổ tiên; bình đẳng về quyền lợi và nghĩa vụ.",
        "icon": "family"
      },
      {
        "title": "Bộ lạc",
        "text": "Liên kết nhiều thị tộc.",
        "source": "textbook",
        "textbookPage": "199–200",
        "feature": "Quan hệ huyết thống hoặc hôn nhân; công hữu đất đai.",
        "icon": "groups"
      },
      {
        "title": "Bộ tộc",
        "text": "Liên kết các bộ lạc trên một lãnh thổ khi xã hội đã phân chia giai cấp.",
        "source": "textbook",
        "textbookPage": "200",
        "feature": "Liên hệ kinh tế, lãnh thổ vượt khỏi huyết thống.",
        "icon": "landmark"
      },
      {
        "title": "Dân tộc",
        "text": "Cộng đồng người ổn định hình thành trong lịch sử.",
        "source": "textbook",
        "textbookPage": "200–201",
        "feature": "Thống nhất về lãnh thổ, kinh tế, ngôn ngữ, văn hóa, nhà nước và pháp luật.",
        "icon": "globe"
      }
    ],
    "note": "Các hình thức phát triển trong điều kiện lịch sử cụ thể; không phải mọi cộng đồng đều đi qua một lộ trình giống nhau.",
    "visual": {
      "src": communityVisual,
      "alt": "Các cộng đồng mở rộng từ thị tộc đến dân tộc",
      "position": "side",
      "caption": "Sơ đồ minh họa do nhóm biên soạn; nội dung và nguồn được ghi bằng chữ bên cạnh."
    }
  },
  {
    "number": 25,
    "section": "DÂN TỘC",
    "title": "Từ thị tộc đến dân tộc",
    "deck": "Không phải một đường thẳng đơn giản, mà là quá trình phát triển của các hình thức cộng đồng.",
    "kind": "flow",
    "source": "textbook",
    "textbookPage": "198–201",
    "steps": [
      {
        "title": "Thị tộc",
        "text": "Quan hệ huyết thống, lao động chung, ngôn ngữ và phong tục chung.",
        "textbookPage": "199",
        "source": "textbook",
        "detail": "Quan hệ huyết thống và lao động chung tạo nên nền tảng liên kết của thị tộc. Quy mô và tổ chức của nó còn khác xa cộng đồng dân tộc về sau."
      },
      {
        "title": "Bộ lạc",
        "text": "Gồm nhiều thị tộc, có liên kết và tổ chức xã hội ổn định hơn.",
        "textbookPage": "199–200",
        "source": "textbook",
        "detail": "Bộ lạc tập hợp nhiều thị tộc và tạo ra mức độ liên kết rộng hơn. Sự phát triển này phản ánh nhu cầu tổ chức đời sống xã hội ngày càng phức tạp."
      },
      {
        "title": "Bộ tộc",
        "text": "Nhiều bộ lạc liên kết trên cơ sở kinh tế, lãnh thổ và văn hóa trong xã hội đã có phân chia giai cấp.",
        "textbookPage": "200",
        "source": "textbook"
      },
      {
        "title": "Cộng đồng dân tộc",
        "text": "Mở rộng trên nền tảng lãnh thổ, ngôn ngữ, kinh tế, văn hóa, tâm lý, tính cách, nhà nước và pháp luật thống nhất.",
        "textbookPage": "200–201",
        "source": "textbook",
        "detail": "Dân tộc hình thành trên nền tảng rộng hơn huyết thống, trong đó lãnh thổ, kinh tế, ngôn ngữ và lịch sử chung giữ vai trò liên kết quan trọng."
      }
    ]
  },
  {
    "number": 26,
    "section": "DÂN TỘC",
    "title": "Các xu hướng phát triển của dân tộc",
    "deck": "Hai xu hướng vận động vừa có tính độc lập, vừa tác động qua lại.",
    "kind": "cards",
    "source": "extension",
    "cards": [
      {
        "title": "Xu hướng tách ra",
        "text": "Ý thức về quyền tự chủ và quyền tự quyết của các cộng đồng dân tộc tăng lên trong điều kiện lịch sử nhất định.",
        "source": "extension",
        "label": "01",
        "detail": "Xu hướng này thể hiện nhu cầu khẳng định bản sắc, quyền bình đẳng và quyền tự quyết của các cộng đồng dân tộc trong những điều kiện nhất định."
      },
      {
        "title": "Xu hướng liên hiệp",
        "text": "Các dân tộc tăng cường liên hệ, hợp tác và xích lại gần nhau trên cơ sở lợi ích chung.",
        "source": "extension",
        "label": "02",
        "detail": "Xu hướng liên hiệp phản ánh nhu cầu hợp tác, giao lưu và xích lại gần nhau giữa các dân tộc trước những vấn đề và lợi ích chung."
      }
    ],
    "note": "Nội dung mở rộng ngoài phần được đối chiếu ở trang in 179–206; không dẫn trang 205–206 cho luận điểm này."
  },
  {
    "number": 27,
    "section": "DÂN TỘC",
    "title": "Cương lĩnh dân tộc",
    "deck": "Ba nội dung cơ bản phải được đọc trong quan hệ thống nhất.",
    "kind": "cards",
    "source": "extension",
    "cards": [
      {
        "title": "Bình đẳng",
        "text": "Các dân tộc đều có quyền bình đẳng; chống mọi đặc quyền, kỳ thị và áp bức dân tộc.",
        "source": "extension",
        "label": "01",
        "detail": "Bình đẳng dân tộc không chỉ là tuyên bố pháp lý mà còn đòi hỏi chống áp bức, kỳ thị và đặc quyền dân tộc. Các dân tộc phải được tôn trọng về quyền và nghĩa vụ."
      },
      {
        "title": "Tự quyết",
        "text": "Các dân tộc có quyền tự quyết định vận mệnh của mình trong những điều kiện lịch sử cụ thể.",
        "source": "extension",
        "label": "02",
        "detail": "Tự quyết gắn với quyền của mỗi dân tộc tự lựa chọn con đường phát triển và giải quyết công việc của mình. Việc vận dụng phải gắn với hoàn cảnh lịch sử và lợi ích chung của người lao động."
      },
      {
        "title": "Liên hiệp công nhân các dân tộc",
        "text": "Đoàn kết người lao động các dân tộc trong cuộc đấu tranh chống áp bức và vì lợi ích chung.",
        "source": "extension",
        "label": "03",
        "detail": "Nội dung này nhấn mạnh sự đoàn kết của người lao động vượt qua ranh giới dân tộc, nhằm chống áp bức và tạo cơ sở cho quan hệ bình đẳng giữa các cộng đồng."
      }
    ],
    "note": "Nội dung mở rộng ngoài phần được đối chiếu ở trang in 179–206; không dẫn trang 205–206 cho luận điểm này."
  },
  {
    "number": 28,
    "section": "GIAI CẤP – DÂN TỘC – NHÂN LOẠI",
    "title": "Quan hệ giai cấp – dân tộc",
    "deck": "Hai phạm trù chỉ các quan hệ xã hội khác nhau; không được đồng nhất.",
    "kind": "causal",
    "source": "textbook",
    "textbookPage": "206",
    "steps": [
      {
        "title": "Phương thức sản xuất",
        "text": "Cơ sở xét đến cùng của sự hình thành và phát triển các hình thức cộng đồng.",
        "source": "textbook",
        "textbookPage": "206"
      },
      {
        "title": "Quan hệ giai cấp",
        "text": "Trong xã hội có giai cấp, quan hệ giai cấp tác động đến sự phát triển dân tộc.",
        "source": "textbook",
        "textbookPage": "206"
      },
      {
        "title": "Khuynh hướng / tính chất dân tộc",
        "text": "Cần đặt trong điều kiện lịch sử và vai trò của các giai cấp cụ thể.",
        "source": "textbook",
        "textbookPage": "206"
      }
    ],
    "blocks": [
      {
        "title": "Khác nhau về lịch sử",
        "text": "Giai cấp xuất hiện trước dân tộc. Trong một dân tộc có nhiều giai cấp; một giai cấp có thể tồn tại trong nhiều dân tộc.",
        "source": "textbook",
        "textbookPage": "206"
      }
    ],
    "visual": {
      "src": relationVisual,
      "alt": "Quan hệ từ phương thức sản xuất tới giai cấp và dân tộc",
      "position": "side",
      "caption": "Sơ đồ minh họa do nhóm biên soạn; nội dung và nguồn được ghi bằng chữ bên cạnh."
    }
  },
  {
    "number": 29,
    "section": "GIAI CẤP – DÂN TỘC – NHÂN LOẠI",
    "title": "Giai cấp và dân tộc không đồng nhất",
    "deck": "So sánh khái niệm theo đối tượng và cơ sở hình thành.",
    "kind": "comparison",
    "source": "textbook",
    "textbookPage": "183, 201, 206",
    "points": [
      {
        "title": "GIAI CẤP",
        "text": "Phạm trù kinh tế – xã hội.\nGắn với vị trí trong hệ thống sản xuất.\nMột giai cấp có thể tồn tại trong nhiều dân tộc.",
        "source": "textbook",
        "textbookPage": "183, 206"
      },
      {
        "title": "DÂN TỘC",
        "text": "Cộng đồng người hình thành trong lịch sử.\nCó lãnh thổ, kinh tế, ngôn ngữ, văn hóa…\nTrong một dân tộc có thể tồn tại nhiều giai cấp.",
        "source": "textbook",
        "textbookPage": "201, 206"
      }
    ]
  },
  {
    "number": 30,
    "section": "GIAI CẤP – DÂN TỘC – NHÂN LOẠI",
    "title": "Giai cấp, dân tộc và nhân loại",
    "deck": "Đọc tiếp ngoài phạm vi chính 179–206.",
    "kind": "concept",
    "source": "extension",
    "textbookPage": "207–209",
    "blocks": [
      {
        "title": "Dân tộc tác động trở lại giai cấp",
        "text": "Sự hình thành dân tộc tạo không gian cho sự phát triển giai cấp. Trong điều kiện bị áp bức dân tộc, giải phóng dân tộc là điều kiện, tiền đề cho giải phóng giai cấp.",
        "source": "extension",
        "textbookPage": "207–208"
      },
      {
        "title": "Nhân loại",
        "text": "Toàn thể cộng đồng người sống trên Trái Đất; các cá nhân và cộng đồng có những liên hệ, lợi ích chung.",
        "source": "extension",
        "textbookPage": "209"
      },
      {
        "title": "Thống nhất và khác biệt",
        "text": "Không đồng nhất toàn thể nhân loại với một giai cấp hay một dân tộc riêng biệt. Đây là phần tổng hợp khái niệm để thảo luận.",
        "source": "extension",
        "textbookPage": "209"
      }
    ],
    "note": "Gợi ý vận dụng (mở rộng): phân biệt lợi ích giai cấp, lợi ích dân tộc và những vấn đề chung của con người."
  },
  {
    "number": 31,
    "section": "GIAI CẤP ↔ DÂN TỘC",
    "title": "Đấu tranh giai cấp ở Việt Nam hiện nay",
    "deck": "Nội dung đấu tranh trong thời kỳ quá độ gắn với xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc xã hội chủ nghĩa.",
    "kind": "concept",
    "source": "textbook",
    "textbookPage": "195–198",
    "blocks": [
      {
        "title": "Đặc điểm xuất phát",
        "text": "Việt Nam đi lên chủ nghĩa xã hội từ một xã hội thuộc địa, nửa phong kiến, lực lượng sản xuất còn thấp, nền sản xuất nhỏ còn phổ biến và bỏ qua chế độ tư bản chủ nghĩa.",
        "textbookPage": "195",
        "source": "textbook"
      },
      {
        "title": "Khó khăn và thách thức",
        "text": "Đấu tranh diễn ra trước các thế lực chống phá, âm mưu diễn biến hòa bình, tàn dư tư tưởng và tâm lý xã hội cũ, tập quán lạc hậu, mặt trái của kinh tế thị trường và bối cảnh quốc tế phức tạp.",
        "textbookPage": "195–197",
        "source": "textbook"
      },
      {
        "title": "Nội dung chủ yếu",
        "text": "Thực hiện mục tiêu độc lập dân tộc và chủ nghĩa xã hội; công nghiệp hóa, hiện đại hóa; thực hiện công bằng xã hội; chống áp bức, bất công; làm thất bại âm mưu chống phá và bảo vệ độc lập dân tộc.",
        "textbookPage": "197",
        "source": "textbook"
      },
      {
        "title": "Hai nhiệm vụ chiến lược ở Việt Nam",
        "text": "Xây dựng chủ nghĩa xã hội là nhiệm vụ trung tâm, xuyên suốt; bảo vệ Tổ quốc xã hội chủ nghĩa là nhiệm vụ trọng yếu. Xây dựng tạo cơ sở vật chất để bảo vệ, còn bảo vệ tạo môi trường cho xây dựng.",
        "textbookPage": "197",
        "source": "textbook"
      }
    ]
  },
  {
    "number": 32,
    "section": "CASE STUDY",
    "title": "“Lối nhỏ” · Đen Vâu",
    "deck": "Từ câu hỏi của giảng viên đến một bài đọc xã hội học bằng lăng kính giai cấp.",
    "kind": "case",
    "source": "case-study",
    "blocks": [
      {
        "title": "Đoạn trích được giao",
        "text": "“Em vào đời bằng đại lộ còn anh vào đời bằng lối nhỏ … Em vào đời từ cao tầng còn anh vào đời từ mái lá … Vài người thường ăn hải sản rồi lại chê bai mùi cá …”",
        "source": "case-study",
        "label": "CASE STUDY"
      },
      {
        "title": "Câu hỏi",
        "text": "Vậy theo bạn điều gì đã quy định trong xã hội có sự khác biệt nhau đến vậy? Và nguyên nhân của điều đó là gì?",
        "source": "case-study",
        "label": "CASE STUDY"
      }
    ],
    "visual": {
      "src": loinhoVisual,
      "alt": "Minh họa hai con đường với điểm xuất phát khác nhau",
      "position": "hero",
      "caption": "Hình minh họa thay thế, không phải ảnh tư liệu hay ảnh nghệ sĩ."
    }
  },
  {
    "number": 33,
    "section": "CASE STUDY",
    "title": "A. Điều gì trực tiếp giải thích khác biệt?",
    "deck": "Khung vận dụng vào “Lối nhỏ”; không suy ra giai cấp của một người chỉ từ lời ca.",
    "kind": "application",
    "source": "case-study",
    "steps": [
      {
        "title": "Quan hệ với tư liệu sản xuất + Vai trò trong tổ chức lao động + Cách thức hưởng thụ của cải",
        "text": "Ba quan hệ cần phân tích đồng thời.",
        "source": "case-study",
        "textbookPage": "181–182"
      },
      {
        "title": "Địa vị kinh tế – xã hội",
        "text": "Vị trí trong hệ thống sản xuất, không chỉ là mức thu nhập.",
        "source": "case-study",
        "textbookPage": "181–183"
      },
      {
        "title": "Điều kiện sống và cơ hội xã hội khác nhau",
        "text": "Khung lý giải điểm xuất phát; cần dữ kiện thực tế để kết luận về cá nhân.",
        "source": "case-study",
        "textbookPage": "181–183"
      }
    ]
  },
  {
    "number": 34,
    "section": "CASE STUDY",
    "title": "B. Nguyên nhân lịch sử sâu xa là gì?",
    "deck": "Liên hệ nguồn gốc giai cấp với câu hỏi của đề bài.",
    "kind": "causal",
    "source": "case-study",
    "steps": [
      {
        "title": "Lực lượng sản xuất phát triển",
        "text": "Năng lực sản xuất xã hội đạt bước phát triển mới.",
        "textbookPage": "184–185",
        "source": "case-study",
        "label": "NGUYÊN NHÂN SÂU XA"
      },
      {
        "title": "Phân công lao động xã hội",
        "text": "Các hoạt động và vị trí trong sản xuất phân hóa rõ hơn.",
        "textbookPage": "184–185",
        "source": "case-study"
      },
      {
        "title": "Sản phẩm dư thừa",
        "text": "Năng suất lao động tạo ra khả năng xuất hiện sản phẩm dư thừa.",
        "textbookPage": "184–185",
        "source": "case-study"
      },
      {
        "title": "Tư hữu về tư liệu sản xuất",
        "text": "Chế độ tư hữu xuất hiện và trở thành nguyên nhân trực tiếp của phân hóa.",
        "textbookPage": "184–185",
        "source": "case-study",
        "label": "NGUYÊN NHÂN TRỰC TIẾP"
      },
      {
        "title": "Phân hóa xã hội",
        "text": "Xã hội tách thành những tập đoàn người có địa vị và lợi ích khác nhau.",
        "textbookPage": "184–185",
        "source": "case-study"
      },
      {
        "title": "Giai cấp xuất hiện",
        "text": "Giai cấp hình thành như một hiện tượng lịch sử.",
        "textbookPage": "184–185",
        "source": "case-study"
      }
    ],
    "note": "Đây là khung vận dụng lý luận (tr. 184–185), không phải khẳng định mọi khác biệt cá nhân đều do một nguyên nhân duy nhất."
  },
  {
    "number": 35,
    "section": "CASE STUDY",
    "title": "Trả lời câu hỏi của đề bài",
    "deck": "Sự khác biệt về điểm xuất phát được quy định bởi những điều kiện kinh tế – xã hội và địa vị trong hệ thống sản xuất.",
    "kind": "concept",
    "source": "case-study",
    "blocks": [
      {
        "title": "Câu trả lời ngắn",
        "text": "Theo lý luận giai cấp và đấu tranh giai cấp, sự khác biệt giữa “đại lộ” và “lối nhỏ”, giữa “cao tầng” và “mái lá” không chỉ do lựa chọn hay năng lực cá nhân. Cần nhìn nó trong những điều kiện kinh tế – xã hội cụ thể.",
        "source": "case-study",
        "label": "CASE STUDY"
      },
      {
        "title": "Cơ sở lý luận",
        "text": "Phương thức sản xuất và các quan hệ kinh tế – vật chất quy định địa vị kinh tế – xã hội của các tập đoàn người. Quan hệ với tư liệu sản xuất, vai trò trong tổ chức lao động và cách thức hưởng thụ của cải tạo ra những điểm xuất phát khác nhau.",
        "source": "case-study",
        "label": "CASE STUDY"
      },
      {
        "title": "Áp dụng vào “Lối nhỏ”",
        "text": "“Đại lộ”, “cao tầng”, “lối nhỏ” và “mái lá” có thể được đọc như những hình ảnh về sự khác biệt trong điều kiện sống, khả năng tiếp cận nguồn lực và cơ hội xã hội. Đây là kết quả cần được truy ngược về các quan hệ kinh tế – xã hội đã tạo ra nó.",
        "source": "case-study",
        "label": "CASE STUDY"
      },
      {
        "title": "Kết luận thuyết trình",
        "text": "Phân biệt quan hệ trực tiếp quy định địa vị với nguyên nhân lịch sử của sự xuất hiện giai cấp.",
        "source": "case-study",
        "label": "CASE STUDY",
        "detail": "Muốn giải thích sự khác biệt xã hội một cách đầy đủ, không nên chỉ đánh giá cá nhân giàu hay nghèo, giỏi hay kém. Cần xem xét họ đứng ở đâu trong hệ thống sản xuất, quan hệ với tư liệu sản xuất ra sao và được phân phối, hưởng thụ của cải như thế nào."
      }
    ]
  },
  {
    "number": 36,
    "section": "CASE STUDY",
    "title": "Không nên kết luận như thế nào?",
    "deck": "Case study giúp vận dụng khái niệm, không cho phép thay thế khái niệm bằng khẩu hiệu.",
    "kind": "concept",
    "source": "extension",
    "blocks": [
      {
        "title": "Giàu ≠ tự động là tư sản",
        "text": "Giàu không đồng nghĩa tự động với việc thuộc một giai cấp xác định; cần phân tích quan hệ với tư liệu sản xuất và địa vị kinh tế – xã hội.",
        "source": "extension",
        "label": "KIẾN THỨC MỞ RỘNG"
      },
      {
        "title": "Nghèo ≠ tự động là vô sản",
        "text": "Nghèo không đồng nghĩa tự động với việc thuộc một giai cấp xác định; mức sống không phải toàn bộ tiêu chí.",
        "source": "extension",
        "label": "KIẾN THỨC MỞ RỘNG"
      },
      {
        "title": "Câu hỏi đúng hơn",
        "text": "Người đó đứng ở đâu trong hệ thống sản xuất, quan hệ với tư liệu sản xuất ra sao và lợi ích gắn với vị trí ấy thế nào?",
        "source": "extension",
        "label": "KIẾN THỨC MỞ RỘNG"
      }
    ]
  },
  {
    "number": 37,
    "section": "QUIZ",
    "title": "Kiểm tra nhanh",
    "deck": "Tám câu hỏi phân biệt khái niệm và vận dụng tình huống; có giải thích và nguồn.",
    "kind": "quiz",
    "source": "textbook",
    "textbookPage": "179–206"
  },
  {
    "number": 38,
    "section": "TỔNG KẾT",
    "title": "Những điểm cần nhớ",
    "deck": "Đọc xã hội từ điều kiện tạo ra kết quả.",
    "kind": "summary",
    "source": "textbook",
    "textbookPage": "181–206",
    "steps": [
      {
        "title": "Giai cấp",
        "text": "Nhận diện địa vị trong hệ thống sản xuất.",
        "textbookPage": "181–183",
        "source": "textbook",
        "detail": "Điểm quan trọng là giai cấp được xác định trong quan hệ với người khác và trong một phương thức sản xuất cụ thể. Vì vậy, không thể tách khái niệm này khỏi lịch sử, khỏi cách xã hội tổ chức sản xuất và phân phối của cải."
      },
      {
        "title": "Đấu tranh giai cấp",
        "text": "Hiểu sự vận động của các lợi ích đối lập.",
        "textbookPage": "187–190",
        "source": "textbook",
        "detail": "Đấu tranh là quá trình các giai cấp sử dụng những phương thức khác nhau để bảo vệ lợi ích, thay đổi hoặc duy trì quan hệ xã hội. Nó có thể diễn ra công khai hoặc dưới những hình thức gián tiếp."
      },
      {
        "title": "Dân tộc",
        "text": "Hiểu cộng đồng người ổn định hình thành trong lịch sử.",
        "textbookPage": "201–204",
        "source": "textbook",
        "detail": "Dân tộc được nhận diện không chỉ bằng một yếu tố đơn lẻ. Sự ổn định của cộng đồng hình thành từ sự kết hợp giữa lãnh thổ, kinh tế, ngôn ngữ, văn hóa, tâm lý và lịch sử chung."
      },
      {
        "title": "Quan hệ giai cấp – dân tộc",
        "text": "Đặt hai vấn đề trong quan hệ tác động qua lại.",
        "textbookPage": "206",
        "source": "textbook"
      }
    ]
  },
  {
    "number": 39,
    "section": "NGUỒN",
    "title": "Nguồn tham khảo",
    "deck": "Minh bạch nguồn là một phần của lập luận học thuật.",
    "kind": "references",
    "source": "textbook",
    "textbookPage": "179–206",
    "blocks": [
      {
        "title": "Nguồn chính",
        "text": "Giáo trình Triết học Mác – Lênin, Bộ Giáo dục và Đào tạo, 2019; bản scan kèm dự án. Phạm vi chính: trang in 179–206. Số trang in lớn hơn chỉ số trang PDF một đơn vị. Nội dung được lược thuật, không phải trích nguyên văn.",
        "textbookPage": "179–206",
        "source": "textbook"
      },
      {
        "title": "Đề bài giảng viên",
        "text": "Ảnh yêu cầu học tập: tiết 22–23 về giai cấp và đấu tranh giai cấp; tiết 24 về dân tộc; case “Lối nhỏ” – Đen Vâu.",
        "source": "case-study",
        "label": "CASE STUDY"
      },
      {
        "title": "Nguồn bổ sung",
        "text": "Các ví dụ minh họa và phần liên hệ được đánh dấu [KIẾN THỨC MỞ RỘNG], không trình bày như nội dung chính thức của giáo trình.",
        "source": "extension",
        "label": "KIẾN THỨC MỞ RỘNG"
      },
      {
        "title": "Đọc tiếp ngoài phạm vi",
        "text": "Quan hệ dân tộc tác động trở lại giai cấp: trang in 207–208. Quan hệ giai cấp, dân tộc với nhân loại: trang in 209. Các trang bổ sung được đánh dấu Kiến thức mở rộng và vẫn ghi dẫn chiếu.",
        "source": "extension"
      }
    ]
  }
];

export const tocItems = pages.filter(page => [4,5,14,21,28,30,32,35,37,38,39].includes(page.number)).map(page => ({page:page.number,label:page.title,section:page.section}));

export type QuizQuestion = { question: string; options: string[]; answer: number; explanation: string; textbookPage: string; source: Source; };
export const quizQuestions: QuizQuestion[] = [
  {
    "question": "Hai người có thu nhập tương đương: một người sở hữu xưởng, một người làm thuê. Cần xem xét gì để phân tích địa vị giai cấp?",
    "options": [
      "Chỉ so sánh tổng thu nhập trong năm",
      "Quan hệ với tư liệu sản xuất, tổ chức lao động và hưởng thụ của cải",
      "Chỉ so sánh trình độ học vấn",
      "Xếp cùng giai cấp vì mức sống tương đương"
    ],
    "answer": 1,
    "explanation": "Thu nhập không thay thế việc phân tích địa vị và các quan hệ trong hệ thống sản xuất.",
    "textbookPage": "181–183",
    "source": "extension"
  },
  {
    "question": "Cặp nào phân biệt đúng nguyên nhân sâu xa và trực tiếp của sự xuất hiện giai cấp?",
    "options": [
      "Sâu xa: tư hữu; trực tiếp: lực lượng sản xuất",
      "Sâu xa: phân hóa thu nhập; trực tiếp: nhà nước",
      "Sâu xa: lực lượng sản xuất phát triển; trực tiếp: tư hữu về tư liệu sản xuất",
      "Sâu xa: đấu tranh chính trị; trực tiếp: phân công nghề nghiệp"
    ],
    "answer": 2,
    "explanation": "Sự phát triển lực lượng sản xuất tạo tiền đề; chế độ tư hữu là nguyên nhân trực tiếp.",
    "textbookPage": "184–185",
    "source": "textbook"
  },
  {
    "question": "Phân công lao động và sản phẩm dư thừa liên quan thế nào đến nguồn gốc giai cấp?",
    "options": [
      "Là những điều kiện trong quá trình phát triển sản xuất và phân hóa xã hội",
      "Mỗi nghề nghiệp tự động tạo ra một giai cấp",
      "Chỉ xuất hiện sau khi nhà nước ra đời",
      "Làm quan hệ sở hữu không còn ý nghĩa"
    ],
    "answer": 0,
    "explanation": "Các quá trình này liên hệ với nhau; không được đồng nhất phân công nghề nghiệp với phân chia giai cấp.",
    "textbookPage": "184–185",
    "source": "textbook"
  },
  {
    "question": "Công nhân cùng yêu cầu tăng lương và giảm giờ làm. Yêu cầu trực tiếp thuộc hình thức nào?",
    "options": [
      "Đấu tranh tư tưởng vì thay đổi quan niệm",
      "Đấu tranh chính trị vì mọi yêu cầu đều nhằm giành chính quyền",
      "Đấu tranh dân tộc vì diễn ra trong một nước",
      "Đấu tranh kinh tế vì bảo vệ lợi ích lao động trước mắt"
    ],
    "answer": 3,
    "explanation": "Tiền lương, thời gian lao động và điều kiện sống là nội dung trực tiếp của đấu tranh kinh tế.",
    "textbookPage": "191–192",
    "source": "extension"
  },
  {
    "question": "Nhận định nào phù hợp với vai trò của đấu tranh giai cấp?",
    "options": [
      "Là nguyên nhân duy nhất của mọi biến đổi xã hội",
      "Là động lực trực tiếp, quan trọng trong xã hội có giai cấp, nhưng không phải động lực duy nhất",
      "Có vai trò như nhau trong mọi giai đoạn",
      "Thay thế hoàn toàn vai trò của lực lượng sản xuất"
    ],
    "answer": 1,
    "explanation": "Giáo trình nhấn mạnh vai trò trực tiếp, quan trọng và yêu cầu xét điều kiện lịch sử cụ thể.",
    "textbookPage": "189–190",
    "source": "textbook"
  },
  {
    "question": "“Dân tộc Việt Nam” và “dân tộc Tày” sử dụng thuật ngữ theo nghĩa nào?",
    "options": [
      "Cả hai đều chỉ một giai cấp",
      "Việt Nam là tộc người; Tày là quốc gia",
      "Việt Nam là quốc gia – dân tộc; Tày là cộng đồng tộc người",
      "Cả hai đều đồng nghĩa với nhà nước"
    ],
    "answer": 2,
    "explanation": "Nghĩa rộng chỉ quốc gia – dân tộc; nghĩa hẹp chỉ cộng đồng tộc người.",
    "textbookPage": "201",
    "source": "textbook"
  },
  {
    "question": "Vì sao không thể đồng nhất giai cấp và dân tộc?",
    "options": [
      "Một dân tộc có nhiều giai cấp; một giai cấp có thể tồn tại trong nhiều dân tộc",
      "Hai khái niệm không có bất kỳ quan hệ nào",
      "Mỗi dân tộc chỉ bao gồm một giai cấp",
      "Dân tộc luôn xuất hiện trước giai cấp"
    ],
    "answer": 0,
    "explanation": "Hai phạm trù chỉ những quan hệ xã hội khác nhau; giai cấp xuất hiện trước dân tộc.",
    "textbookPage": "206",
    "source": "textbook"
  },
  {
    "question": "Vận dụng vào “Lối nhỏ”, câu trả lời nào có cơ sở hơn?",
    "options": [
      "Sống ở cao tầng đủ để xác định là tư sản",
      "Sống trong mái lá đủ để xác định là vô sản",
      "Điểm xuất phát chỉ phản ánh ý chí cá nhân",
      "Phân tích quan hệ sản xuất, địa vị kinh tế – xã hội và khả năng tiếp cận nguồn lực"
    ],
    "answer": 3,
    "explanation": "Hình ảnh lời ca gợi vấn đề; cần dữ kiện về quan hệ sản xuất để phân tích địa vị, không gán giai cấp từ mức sống.",
    "textbookPage": "181–185",
    "source": "case-study"
  }
];
export const sourceLegend = { textbook: "GIÁO TRÌNH", extension: "KIẾN THỨC MỞ RỘNG", "case-study": "CASE STUDY" } as const;
