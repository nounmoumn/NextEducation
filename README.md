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
게시판 운영 방식(관리자 화면, 외부 CMS 등)은 피드백을 받아 확정할 예정이며, 현재 구조는 마크다운 파일 기반을 전제로 합니다.

## 문의 폼

백엔드가 없으므로 `제출` 시 메일 앱이 열려 `info@hints.or.kr`로 보내도록 되어 있습니다 (`src/pages/Contact.tsx`).
