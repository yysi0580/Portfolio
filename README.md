# Portfolio

React + Vite + TypeScript 기반의 정적 포트폴리오입니다.  
기존 HTML/CSS 포트폴리오의 디자인 톤은 유지하면서, 데이터 구조화와 컴포넌트 분리, GitHub Pages 배포 안정성을 강화했습니다.

## 프로젝트 소개

- 백엔드/풀스택 신입 개발자 포지션에 맞춘 단일 페이지 포트폴리오입니다.
- 핵심 메시지는 "비즈니스 흐름을 이해하고 API와 상태 로직을 구현할 수 있는 개발자"입니다.
- 대표 프로젝트인 `Barotruck`와 `ADHD Todo`를 중심으로 도메인 상태 흐름, 인증/권한, AI 기능 안전장치, production 배포 경험이 빠르게 읽히도록 구성했습니다.

## 기술 스택

- React
- Vite
- TypeScript
- CSS

## 주요 섹션 설명

- `Hero`: 포지션, 핵심 기술, 백엔드 중심 메시지 요약
- `About`: 개발 스타일과 백엔드/운영 기능 중심 소개
- `Selected Projects`: `src/data/projects.ts` 기반 프로젝트 카드 렌더링
- `Capability`: 상태 로직, 인증/권한, AI 안전장치, 운영 기능, 협업 역량 정리
- `Contact`: 메일과 GitHub 링크

## 프로젝트 구조

```text
src/
  App.tsx
  main.tsx
  styles.css
  components/
    AboutSection.tsx
    CapabilitySection.tsx
    ContactSection.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
    ProjectCard.tsx
    ProjectSection.tsx
  data/
    projects.ts
public/
  assets/
  downloads/
  projects/
```

## 로컬 실행 방법

```bash
npm install
npm run dev
```

Vite 개발 서버는 `vite.config.ts`의 `base: "/Portfolio/"` 설정 때문에 보통 `/Portfolio/` 경로로 열립니다.

## 빌드 방법

```bash
npm run build
npm run preview
```

`npm run preview`에서도 `/Portfolio/` 경로 기준으로 정적 자산이 정상 로드되는지 확인해야 합니다.

## GitHub Pages 배포 시 주의사항

- `vite.config.ts`에 `base: "/Portfolio/"`가 반드시 유지되어야 합니다.
- 정적 자산은 `public/assets`, `public/downloads` 아래에 두고, 앱에서는 `import.meta.env.BASE_URL` 기준 경로를 사용합니다.
- GitHub Actions 워크플로는 `npm ci` 후 `npm run build`를 실행하고 `dist/`를 Pages 아티팩트로 업로드합니다.
- 저장소 이름이 바뀌면 `base` 경로와 관련 링크를 함께 수정해야 합니다.

## 데이터 관리 포인트

- 프로젝트 데이터는 `src/data/projects.ts`에 모아 두었습니다.
- 이미지 경로는 GitHub Pages에서 깨지지 않도록 `import.meta.env.BASE_URL`을 사용합니다.
- 기존 GitHub 저장소 링크, 관리자 웹 링크, APK 다운로드 링크는 유지했습니다.
- 배포 주소가 바뀌면 `src/data/projects.ts`의 `accessCards`와 `links`를 함께 수정합니다.
- `ADHD Todo`는 `https://yangtheory.site`, `Barotruck` 관리자 웹은 `https://truck.yangtheory.site` 기준으로 연결되어 있습니다.
