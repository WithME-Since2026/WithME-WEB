# WithME-WEB

WithME 참여자용 웹 레포지터리

참여자는 앱 설치 없이, 운영자가 공유한 링크에서 모임 정보를 확인하고 참석 여부를 응답합니다.

## 기술 스택

- React 19 + TypeScript + Vite
- React Router, TanStack Query, axios, Zustand
- 스타일: CSS Modules (+ `src/common/styles/tokens.css`의 CSS 변수)

## 시작하기

```bash
npm install
cp .env.example .env
npm run dev
```

| 명령어              | 설명                                   |
| ------------------- | -------------------------------------- |
| `npm run dev`       | 개발 서버 실행 (http://localhost:5173) |
| `npm run build`     | 타입 체크 후 배포용 빌드 (`dist/`)     |
| `npm run lint`      | ESLint 검사                            |
| `npm run format`    | Prettier 자동 정렬                     |
| `npm run typecheck` | TypeScript 타입 체크                   |

### 환경 변수

| 이름                    | 설명                                                        |
| ----------------------- | ----------------------------------------------------------- |
| `VITE_API_URL`          | API 서버 주소. 로컬 개발에서는 비워둡니다.                  |
| `VITE_API_PROXY_TARGET` | 로컬 개발 시 `/api` 요청을 전달할 백엔드 주소 (CORS 회피용) |

## 프로젝트 구조

```
src
 ㄴ app
   ㄴ providers
   ㄴ routes
 ㄴ common
   ㄴ api / components / constants / hooks / styles / types / utils / storage
 ㄴ domain
   ㄴ {도메인}
     ㄴ api / components / hooks / pages / store / types
 ㄴ assets
   ㄴ images / icons / fonts
```

화면(Page)은 `domain/{도메인}/pages`에 만들고 `app/routes/AppRouter.tsx`에 route로 등록합니다.
호출 흐름은 WithME-FE와 같습니다: Page → Hook → API → apiClient

## License

This project is licensed under the Apache License 2.0 with the Commons Clause License Condition v1.0.
