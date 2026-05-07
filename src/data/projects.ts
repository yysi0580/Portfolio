export type ProjectLink = {
  label: string;
  url: string;
  external?: boolean;
  download?: string;
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
      "주문, 배차, 결제, 정산, 관리자 운영까지 이어지는 비즈니스 흐름을 백엔드와 화면 연결 관점에서 정리한 대표 프로젝트입니다.",
    points: [
      "주문 상태, 배차 후보 탐색, 수락 경쟁, 배차 확정, 정산 승인까지 이어지는 흐름을 API와 상태 로직으로 정리했습니다.",
      "화주 앱, 차주 앱, 관리자 웹이 공유하는 요청값과 예외 케이스를 맞추며 연결 경험을 쌓았습니다.",
      "ERD, Swagger, API Docs, Postman, 시퀀스 자료를 함께 관리했습니다."
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA", "Oracle", "Swagger", "Postman"],
    links: [
      {
        label: "프로젝트 상세 보기",
        url: asset("projects/barotruck.html"),
        external: false
      },
      {
        label: "Barotruck Web",
        url: "https://truck.yangtheory.site/"
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
    accessCards: [
      {
        eyebrow: "Barotruck Web",
        title: "Barotruck 접속 주소",
        summary:
          "Barotruck 웹은 아래 주소로 바로 접속할 수 있습니다. 물류 서비스의 주문·배차·운영 흐름을 확인할 수 있습니다.",
        action: {
          label: "Barotruck 열기",
          url: "https://truck.yangtheory.site/"
        }
      },
      {
        eyebrow: "Android APK",
        title: "모바일 앱 다운로드",
        summary:
          "포트폴리오의 HTTPS 다운로드 경로로 APK를 받을 수 있게 연결했습니다.",
        action: {
          label: "APK 다운로드",
          url: asset("downloads/barotruck-app-release.apk"),
          download: "barotruck-app-release.apk"
        }
      }
    ]
  },
  {
    id: "adhd-todo",
    order: "02",
    title: "ADHD Todo",
    type: "AI Productivity Backend",
    summary:
      "ADHD 사용자의 계획 부담을 줄이기 위해 Brain Dump를 작은 행동 후보로 분해하고, 선택·미루기·더 작게 만들기 반응을 실행 흐름으로 연결한 투두앱입니다.",
    emphasis:
      "할 일을 정리하라고 요구하기보다, 사용자가 바로 고를 수 있는 작은 실행 후보를 제시하는 FastAPI 기반 프로젝트입니다.",
    points: [
      "Brain Dump 입력을 Suggestions, Feedback, Action, History, Routines 흐름으로 연결했습니다.",
      "사용자의 반응을 성공/실패 평가가 아니라 다음 제안을 조절하는 데이터로 사용했습니다.",
      "AI generator, rule-based fallback, 캐시, rate limit, 사용 로그로 운영 리스크를 낮췄습니다."
    ],
    stack: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "JWT", "OpenAI API", "SQLite/PostgreSQL", "Pytest"],
    links: [
      {
        label: "프로젝트 상세 보기",
        url: asset("projects/adhd-todo.html"),
        external: false
      },
      {
        label: "Todo Web",
        url: "https://yangtheory.site/"
      },
      {
        label: "Backend Repo",
        url: "https://github.com/yysi0580/adhd-todo-api"
      },
      {
        label: "API Docs",
        url: "https://yangtheory.site/api/docs"
      }
    ],
    accessCards: [
      {
        eyebrow: "Todo Web",
        title: "투두앱 접속 주소",
        summary:
          "Brain Dump와 suggestion, action, history 흐름을 확인할 수 있는 투두앱 웹 주소입니다.",
        action: {
          label: "투두앱 열기",
          url: "https://yangtheory.site/"
        }
      },
      {
        eyebrow: "Backend API",
        title: "API 문서 주소",
        summary:
          "FastAPI Swagger 문서에서 주요 API 구조를 확인할 수 있습니다.",
        action: {
          label: "API 문서 열기",
          url: "https://yangtheory.site/api/docs"
        }
      }
    ]
  },
  {
    id: "observerspring",
    order: "03",
    title: "ObserverSpring",
    type: "Backend Project",
    summary:
      "Minecraft 관찰/모니터링 플랫폼으로, 인증과 스냅샷·로그 수집 API, 플레이어 조회 기능을 구현한 백엔드 프로젝트입니다.",
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
    order: "04",
    title: "Florit",
    type: "Mobile Collaboration",
    summary:
      "AI 기반 꽃 추천과 주변 꽃집 탐색을 결합한 모바일 앱으로, 홈, 검색, 지도, 보관함 흐름을 정리한 프로젝트입니다.",
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
    ]
  },
  {
    id: "newsmoa",
    order: "05",
    title: "NewsMoa",
    type: "Frontend Practice",
    summary:
      "뉴스 OpenAPI 기반의 통합 조회 웹 서비스로, 비동기 데이터 처리와 상태별 UI 분리를 경험하며 API 연동 화면을 구성한 프로젝트입니다.",
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
