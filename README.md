# 미래융합교육 연구소 웹사이트 (NextEducation)

Wix로 운영하던 [미래융합교육 연구소](https://dykwonsw.wixsite.com/mysite) 사이트를 React(Vite + TypeScript)로 옮긴 프로젝트입니다.

## 실행

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ 에 정적 파일 생성
```

## 페이지 구성

| 경로 | 페이지 | 원본(Wix) |
| --- | --- | --- |
| `/` | HOME (소개 문구 + Latest News) | `/mysite` |
| `/about` | 소개 (이사장 인사말, History) | `/mysite/blank` |
| `/research` | 연구 분야 | `/mysite/blank-1` |
| `/hub` | 미래교육허브 — MakePlayAI 내용으로 교체 | `/mysite/blank-6` |
| `/news`, `/news/:slug` | EVENTS & NEWS 목록 / 상세 | `/mysite/blog`, `/mysite/post/...` |
| `/contact` | CONTACT 및 기부금 | `/mysite/contact` |

Wix가 기본 제공하던 배경 영상·스톡 이미지는 옮기지 않고 그라디언트 배너(`src/components/PageHero.tsx`)로 대체했습니다.

디자인 기록(색·글자 스타일·도형 컴포넌트·홈 Welcome 애니메이션 명세)은 [Figma](https://www.figma.com/design/amTDDZ15Ll4eACMdY4dp7U)에 있습니다.

## 폴더 구조

```
src/
  components/   Header, Footer, PageHero, PostCard, Markdown ...
  pages/        페이지별 컴포넌트
  data/         사이트 정보·연혁·연구분야 등 정적 데이터
  content/news/ EVENTS & NEWS 게시물 (마크다운)
  lib/news.ts   게시물 로더 (DB 없이 마크다운 파일을 빌드 시점에 읽음)
public/images/  로고, 사진, 게시물 이미지
```

## 한국어 / 영어

헤더 오른쪽 `KO | EN` 버튼으로 사이트 언어를 바꿉니다. 선택은 브라우저에 저장되고, `?lang=en` 주소로 영어 화면을 바로 열 수 있습니다.

- 사이트 문구(메뉴, 페이지 내용, 버튼, 이미지 설명 등)는 `{ ko: '...', en: '...' }` 형태로 함께 적습니다.
  짧은 공통 문구는 `src/i18n/ui.ts`, 페이지별 내용은 `src/data/*.ts`에 있습니다.
- 게시물(EVENTS & NEWS)은 사이트 번역과 따로 관리합니다. 영어판이 필요한 게시물만 아래 "영어판 게시물"처럼 파일을 추가하고,
  영어판이 없는 게시물은 영어 화면에서도 한국어 원문을 보여 주며 `Korean` 표시가 붙습니다.

## EVENTS & NEWS 게시물 추가

DB를 쓰지 않고 `src/content/news/` 아래에 마크다운 파일을 추가하면 목록과 상세 페이지에 자동으로 반영됩니다.
파일 이름이 URL이 됩니다 (`2026-open-day.md` → `/news/2026-open-day`).

```markdown
---
title: 2026 MakePlayAI 정식 오픈 안내
date: 2026-12-01
category: notice        # news | event | notice
order: 1                # 같은 날짜 안에서 정렬 순서 (선택)
cover: /images/news/2026-open.png   # 목록 썸네일 (선택)
summary: 목록에 보일 요약 (선택, 없으면 본문 앞부분)
---

본문은 마크다운으로 작성합니다.

![이미지 설명](/images/news/2026-open.png)
```

이미지는 `public/images/news/`에 넣고 `/images/news/파일명`으로 참조합니다.

### 영어판 게시물

한국어 파일과 같은 이름에 `.en`을 붙여 추가합니다 (`2026-open-day.md` → `2026-open-day.en.md`).
날짜·순서·분류는 한국어 파일을 따르므로 영어 파일에는 제목과 본문만 있으면 됩니다. 이미지를 바꾸고 싶을 때만 `cover`를 적습니다.

```markdown
---
title: Notice on the official launch of MakePlayAI in 2026
---

English body in markdown.
```
게시판 운영 방식(관리자 화면, 외부 CMS 등)은 피드백을 받아 확정할 예정이며, 현재 구조는 마크다운 파일 기반을 전제로 합니다.

## 문의 폼

백엔드가 없으므로 `제출` 시 메일 앱이 열려 `info@hints.or.kr`로 보내도록 되어 있습니다 (`src/pages/Contact.tsx`).
