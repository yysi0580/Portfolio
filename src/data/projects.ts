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
          "NCP 서버에 배포한 Barotruck 웹입니다. 물류 서비스의 주문·배차·정산·운영 흐름을 확인할 수 있습니다.",
        credentials: [
          { label: "Email", value: "test4@4.4" },
          { label: "Password", value: "11111111" }
        ],
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
    type: "FastAPI + AI Fullstack",
    summary:
      "정리되지 않은 Brain Dump를 2~5개의 작은 행동 후보로 분해하고, 사용자가 하나를 선택하면 Action으로 수렴시키는 ADHD 타깃 Todo 서비스입니다.",
    emphasis:
      "일반 체크리스트가 아니라 결정 부담을 줄이는 서비스 흐름을 목표로, FastAPI 백엔드와 React 프론트, OpenAI 기반 suggestion generator, NCP production 배포까지 직접 구성했습니다.",
    points: [
      "Brain Dump, Suggestion, Feedback, Action, History를 분리해 여러 후보 제시 후 하나의 실행 단위로 수렴하는 API 흐름을 설계했습니다.",
      "JWT access/refresh 인증, user_id 기반 ownership 검증, nickname/account 기능, Routines CRUD와 routine action 시작 흐름을 구현했습니다.",
      "OpenAI Responses API와 Structured Outputs를 붙이되, rate limit, budget guardrail, usage log, cache, rule-based fallback으로 비용과 장애를 통제했습니다.",
      "React + TypeScript 프론트에서 ProtectedRoute, 실제 API 복원 흐름, production mock 차단, Settings AI usage 표시까지 연결했습니다.",
      "NCP Ubuntu 서버에 PostgreSQL, systemd, nginx reverse proxy, HTTPS certbot 구조로 production 배포를 완료했습니다."
    ],
    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Alembic",
      "OpenAI Responses API",
      "React",
      "TypeScript",
      "Nginx",
      "NCP"
    ],
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
        label: "API Docs",
        url: "https://yangtheory.site/api/v1/docs"
      },
      {
        label: "Backend Repo",
        url: "https://github.com/yysi0580/adhd-todo-api"
      },
      {
        label: "Frontend Repo",
        url: "https://github.com/AdhdTodo/WebFront"
      }
    ],
    flowSummary:
      "할 일을 직접 관리하게 만드는 대신, 입력을 작게 나누고 반응 신호를 다음 제안 크기 조절에 쓰는 흐름으로 설계했습니다.",
    flows: [
      {
        title: "Brain Dump 분해",
        description:
          "한 줄 또는 장문 입력을 받아 규칙 기반/AI 기반 generator가 2~5개의 micro-step suggestion으로 분해합니다."
      },
      {
        title: "Feedback 중심 선택",
        description:
          "사용자는 do, pass, snooze, make_smaller, capture_only 반응만 남기고, do 반응은 백엔드에서 Action 생성을 트리거합니다."
      },
      {
        title: "Action 수렴",
        description:
          "선택된 suggestion은 active Action이 되고, complete 또는 abort로만 종료되도록 상태 전이를 제한했습니다."
      },
      {
        title: "AI 안전장치",
        description:
          "OpenAI 호출 실패, invalid output, rate/budget 초과 상황에서 서비스가 죽지 않도록 rule-based fallback으로 이어지게 했습니다."
      },
      {
        title: "운영 배포",
        description:
          "PostgreSQL 운영 DB, Alembic migration, systemd, nginx, HTTPS, GitHub Actions CI까지 MVP 운영 기준으로 정리했습니다."
      }
    ],
    documentSummary:
      "ADHD Todo는 서비스 기획 의도를 코드 구조와 운영 안정성으로 연결한 프로젝트입니다.",
    documents: [
      {
        title: "계층 분리 구조",
        description:
          "endpoint, service, repository, schema, model을 기능별로 나누어 코드가 커져도 수정 위치가 보이도록 구성했습니다."
      },
      {
        title: "인증과 데이터 소유권",
        description:
          "JWT 인증 이후 session, suggestion, action, feedback, routine 접근을 current user 기준으로 검증했습니다."
      },
      {
        title: "AI / Fallback 설계",
        description:
          "Structured Outputs 스키마 검증과 fallback, usage log, cost guard를 함께 두어 AI 실패가 사용자 흐름을 막지 않게 했습니다."
      },
      {
        title: "프론트 API 복원 흐름",
        description:
          "sessionId와 actionId URL 직접 진입, 새로고침 복원, 401 refresh, error/empty/loading 상태를 정리했습니다."
      },
      {
        title: "NCP production 배포",
        description:
          "포트 노출형 개발 서버가 아니라 nginx reverse proxy와 HTTPS 도메인 구조로 실제 접속 가능한 상태를 만들었습니다."
      }
    ],
    accessCards: [
      {
        eyebrow: "Live Service",
        title: "ADHD Todo 웹 서비스",
        summary:
          "Brain Dump 입력부터 suggestion 선택, action 실행, history 확인까지 실제 배포 환경에서 확인할 수 있습니다.",
        action: {
          label: "서비스 열기",
          url: "https://yangtheory.site"
        }
      },
      {
        eyebrow: "API",
        title: "FastAPI Swagger 문서",
        summary:
          "인증, Brain Dump, Suggestion, Feedback, Action, Routine, AI status API를 Swagger에서 확인할 수 있습니다.",
        action: {
          label: "API Docs 열기",
          url: "https://yangtheory.site/api/v1/docs"
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
