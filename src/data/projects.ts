export type ProjectLink = {
  label: string;
  url: string;
  external?: boolean;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  variant?: "wide" | "diagram" | "phone";
};

export type ProjectFlow = {
  title: string;
  description: string;
};

export type ProjectDocument = {
  title: string;
  description: string;
};

export type ProjectAccessCredential = {
  label: string;
  value: string;
};

export type ProjectAccessCard = {
  eyebrow: string;
  title: string;
  summary: string;
  action: ProjectLink;
  credentials?: ProjectAccessCredential[];
};

export type Project = {
  id: string;
  order: string;
  title: string;
  type: string;
  summary: string;
  emphasis?: string;
  points: string[];
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
  flowSummary?: string;
  flows?: ProjectFlow[];
  documentSummary?: string;
  documents?: ProjectDocument[];
  galleryLabel?: string;
  gallerySummary?: string;
  galleryHint?: string;
  galleryNote?: string;
  images?: ProjectImage[];
  accessCards?: ProjectAccessCard[];
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const projects: Project[] = [
  {
    id: "barotruck",
    order: "01",
    title: "Barotruck",
    type: "Flagship Backend",
    featured: true,
    summary:
      "화주 앱, 차주 앱, 관리자 웹이 하나의 물류 도메인을 공유하는 통합 프로젝트로, 주문 생성부터 배차, 결제, 정산, 운영까지 이어지는 상태 로직을 설계하고 구현했습니다.",
    emphasis:
      "Barotruck는 Spring Boot 백엔드, JWT 인증/권한, Oracle/JPA 모델링, 관리자 운영 기능, 프론트·모바일 연동 경험이 가장 밀도 높게 들어 있는 프로젝트입니다.",
    points: [
      "주문 상태, 배차 후보 탐색, 수락 경쟁, 배차 확정, 정산 승인까지 이어지는 비즈니스 흐름을 API와 상태 로직으로 정리했습니다.",
      "화주 앱, 차주 앱, 관리자 웹이 공유하는 요청값과 예외 케이스를 맞추며 프론트·모바일과 백엔드 연결 경험을 쌓았습니다.",
      "ERD, Swagger, API Docs, Postman, 시퀀스 자료를 함께 보며 구현뿐 아니라 협업용 문서 자산까지 관리했습니다."
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "JPA",
      "Oracle",
      "Swagger",
      "Postman"
    ],
    links: [
      {
        label: "프로젝트 상세 보기",
        url: asset("projects/barotruck.html"),
        external: false
      },
      {
        label: "Backend Repo",
        url: "https://github.com/TjoeunLast/Backend"
      },
      {
        label: "Frontend Repo",
        url: "https://github.com/TjoeunLast/FrontNew"
      },
      {
        label: "Admin Repo",
        url: "https://github.com/TjoeunLast/Admin_FrontEnd"
      }
    ],
    flowSummary:
      "단순 화면 구현이 아니라, 주문과 배차가 결제·정산·운영까지 어떻게 이어지는지 도메인 흐름 단위로 설명할 수 있도록 정리했습니다.",
    flows: [
      {
        title: "주문 상태 흐름",
        description:
          "화주가 상·하차지, 차종, 옵션을 입력하면 검증을 거쳐 운송 요청 상태가 생성되고 다음 단계로 전이됩니다."
      },
      {
        title: "배차 흐름",
        description:
          "조건에 맞는 차주 후보를 탐색하고 제안을 전송한 뒤, 수락 경쟁과 만료·취소 분기를 고려해 최종 배차를 확정합니다."
      },
      {
        title: "결제 흐름",
        description:
          "화주 청구와 운송 완료 이후의 결제 상태를 분리해 관리하고, 후속 정산 단계로 이어질 수 있게 설계했습니다."
      },
      {
        title: "정산 흐름",
        description:
          "차주 지급, 미수금, 정산 승인·보류 상태를 관리자 화면과 연결해 운영 가능한 형태로 구현했습니다."
      },
      {
        title: "관리자 운영 기능",
        description:
          "회원 승인, 신고/제재, 매출·정산 조회처럼 서비스 운영에 필요한 기능을 사용자 앱과 별도 책임으로 다뤘습니다."
      }
    ],
    documentSummary:
      "면접관이 기술 역량을 빠르게 읽을 수 있도록, Barotruck에서 직접 설명할 핵심 구현 포인트를 따로 묶었습니다.",
    documents: [
      {
        title: "Spring Boot 백엔드 구현",
        description:
          "주문, 배차, 정산, 운영 도메인을 서비스와 API 계층으로 나누어 구현했습니다."
      },
      {
        title: "JWT 인증과 권한 제어",
        description:
          "사용자 유형별 접근 권한을 구분해 앱 사용자와 관리자 기능의 책임을 분리했습니다."
      },
      {
        title: "API 설계와 협업 문서",
        description:
          "Swagger, API Docs, Postman을 기준으로 프론트·모바일과 요청/응답 계약을 맞췄습니다."
      },
      {
        title: "Oracle / JPA / ERD",
        description:
          "도메인 관계를 ERD로 정리하고, Oracle과 JPA 중심으로 엔티티 구조를 모델링했습니다."
      },
      {
        title: "프론트·모바일 연동",
        description:
          "화주 앱, 차주 앱, 관리자 웹에서 필요한 요청값과 예외 케이스를 실제 연결 이슈 기준으로 조율했습니다."
      }
    ],
    galleryLabel: "Project Materials",
    gallerySummary:
      "설계 자산, 관리자 운영 화면, 화주·차주 앱 화면을 함께 두어 하나의 서비스가 여러 역할로 분리되는 구조를 바로 읽을 수 있게 했습니다.",
    galleryHint: "ERD 1장 · 시퀀스 2장 · 관리자 화면 1장 · 앱 화면 2장",
    galleryNote:
      "썸네일은 빠르게 훑어볼 수 있는 크기로 두고, 클릭하면 새 창에서 원본 이미지를 확인할 수 있습니다.",
    images: [
      {
        src: asset("assets/projects/barotruck/barotruck-erd.png"),
        alt: "Barotruck ERD",
        caption: "주문, 사용자, 정산, 리뷰, 신고 관계를 한 번에 볼 수 있는 ERD",
        variant: "diagram"
      },
      {
        src: asset("assets/projects/barotruck/barotruck-sequence-delivery.svg"),
        alt: "Barotruck 배송 시퀀스",
        caption: "요청 생성부터 후보 탐색, 배차 확정까지 이어지는 배송 시퀀스",
        variant: "diagram"
      },
      {
        src: asset("assets/projects/barotruck/barotruck-sequence-settlement.svg"),
        alt: "Barotruck 정산 시퀀스",
        caption: "정산 승인과 보류가 관리자 운영 화면으로 이어지는 시퀀스",
        variant: "diagram"
      },
      {
        src: asset("assets/projects/barotruck/barotruck-admin-settlement.png"),
        alt: "Barotruck 관리자 정산 화면",
        caption: "화주 청구와 차주 지급, 미수금 상태를 다루는 관리자 정산 화면",
        variant: "wide"
      },
      {
        src: asset("assets/projects/barotruck/barotruck-shipper-register.png"),
        alt: "Barotruck 화주 화물 등록 화면",
        caption: "화주가 운송 조건과 배차 옵션을 입력하는 주문 생성 화면",
        variant: "phone"
      },
      {
        src: asset("assets/projects/barotruck/barotruck-driver-settlement.png"),
        alt: "Barotruck 차주 정산 화면",
        caption: "차주가 운송 매출과 입금 상태를 확인하는 정산 화면",
        variant: "phone"
      }
    ],
    accessCards: [
      {
        eyebrow: "Admin Front",
        title: "관리자 웹 접속 주소",
        summary:
          "Barotruck 관리자 웹은 아래 주소로 바로 접속할 수 있습니다. 정산과 매출, 승인 관련 운영 흐름을 확인할 수 있습니다.",
        credentials: [
          { label: "Email", value: "test4@4.4" },
          { label: "Password", value: "11111111" }
        ],
        action: {
          label: "관리자 웹 열기",
          url: "http://yangtheory.site:8082"
        }
      },
      {
        eyebrow: "Android APK",
        title: "모바일 앱 다운로드",
        summary:
          "기존 GitHub 다운로드 링크를 유지해 APK를 바로 받을 수 있게 했습니다. 면접 시 사용자 흐름 설명용 자료로 활용할 수 있습니다.",
        action: {
          label: "APK 다운로드",
          url: "https://github.com/yysi0580/Portfolio/raw/main/downloads/barotruck-app-release.apk"
        }
      }
    ]
  },
  {
    id: "observerspring",
    order: "02",
    title: "ObserverSpring",
    type: "Backend Project",
    summary:
      "Minecraft 관찰/모니터링 플랫폼으로, JWT 인증과 스냅샷·로그 수집 API, 플레이어 조회 기능을 구현하며 백엔드 구조 설계와 데이터 저장 모델링에 집중한 프로젝트입니다.",
    emphasis:
      "Oracle CLOB JSON 저장 구조와 Spring Boot 4 + Java 21 기반 API 설계 경험을 보여주는 백엔드 프로젝트입니다.",
    points: [
      "Spring Boot 4와 Java 21 기준으로 인증, 데이터 수집, 조회 API 구조를 설계했습니다.",
      "11 x 11 x 3 레이어 데이터를 Oracle CLOB JSON 형태로 저장하는 모델을 구성했습니다.",
      "정적 리소스 연결과 SPA 포워딩까지 다루며 백엔드와 프론트 배포 연결 경험을 쌓았습니다."
    ],
    stack: ["Spring Boot", "Java 21", "JWT", "Oracle", "REST API"],
    links: [
      {
        label: "Repository",
        url: "https://github.com/ObserverPLUGIN/observerspring"
      }
    ]
  },
  {
    id: "florit",
    order: "03",
    title: "Florit",
    type: "Mobile Collaboration",
    summary:
      "AI 기반 꽃 추천과 주변 꽃집 탐색을 결합한 모바일 앱으로, 홈, 검색, 지도, 보관함 흐름을 중심으로 사용자 여정과 화면-API 연결 포인트를 정리한 프로젝트입니다.",
    points: [
      "추천 홈, 검색, 지도, 보관함까지 이어지는 핵심 화면 흐름을 모바일 사용성 관점에서 구성했습니다.",
      "추천과 탐색, 저장 경험이 끊기지 않도록 UX 동선을 맞추고 화면 간 역할을 분리했습니다.",
      "모바일 화면에서 필요한 데이터와 상호작용을 정리하며 협업 기반 연결 경험을 쌓았습니다."
    ],
    stack: ["Flutter", "Mobile UI", "UX Flow", "Map", "Discovery"],
    links: [
      {
        label: "프로젝트 상세 보기",
        url: asset("projects/florit.html"),
        external: false
      },
      {
        label: "Frontend Repo",
        url: "https://github.com/tjoeunProject2/frontend"
      }
    ],
    galleryLabel: "Screen Flow",
    gallerySummary:
      "핵심 모바일 화면만 추려 두어, Florit이 어떤 사용자 경험을 만들려 했는지 빠르게 읽을 수 있게 구성했습니다.",
    galleryHint: "홈 · 검색 · 지도 · 보관함",
    galleryNote:
      "세로 화면은 기본 상태에서 접어두고, 펼치면 썸네일로 훑어볼 수 있게 정리했습니다.",
    images: [
      {
        src: asset("assets/projects/florit/florit-home.png"),
        alt: "Florit 홈 화면",
        caption: "추천 카드와 계절/기념일 탐색을 앞세운 홈 화면",
        variant: "phone"
      },
      {
        src: asset("assets/projects/florit/florit-search.png"),
        alt: "Florit 검색 화면",
        caption: "검색어, 최근 검색, 분위기별 탐색을 묶은 검색 화면",
        variant: "phone"
      },
      {
        src: asset("assets/projects/florit/florit-map.png"),
        alt: "Florit 지도 화면",
        caption: "지도와 하단 카드 정보로 주변 꽃집을 보여주는 화면",
        variant: "phone"
      },
      {
        src: asset("assets/projects/florit/florit-archive.png"),
        alt: "Florit 보관함 화면",
        caption: "저장한 꽃과 관심 콘텐츠를 다시 확인하는 보관함 화면",
        variant: "phone"
      }
    ]
  },
  {
    id: "newsmoa",
    order: "04",
    title: "NewsMoa",
    type: "Frontend Practice",
    summary:
      "뉴스 OpenAPI 기반의 통합 조회 웹 서비스로, 비동기 데이터 처리와 상태별 UI 분리를 경험하며 API 연동 화면을 안정적으로 구성한 프로젝트입니다.",
    points: [
      "뉴스 목록, 상세, 카테고리 탐색 화면을 구성했습니다.",
      "로딩, 오류, 데이터 없음 상태를 분리해 사용자에게 명확하게 반응하는 UI를 만들었습니다.",
      "API 응답을 화면 흐름과 연결하는 기본기를 쌓은 프로젝트입니다."
    ],
    stack: ["React", "JavaScript", "OpenAPI", "Async UI"],
    links: [
      {
        label: "Frontend Repo",
        url: "https://github.com/skarnddydwls/project"
      }
    ]
  }
];
