/**
 * 미래교육허브 페이지 데이터 — MakePlayAI(https://makeplayai.net/nn/) 소개 내용을 바탕으로 정리.
 */

import type { L } from '../i18n/lang'

export const makeplayUrl = 'https://makeplayai.net/nn/'

export const hubLinks = {
  service: `${makeplayUrl}intro/service`,
  faq: `${makeplayUrl}qa/faq`,
}

export const hubNotice = {
  status: { ko: '현재 시범운영 중', en: 'Currently in pilot operation' } as L,
  launch: { ko: '2026년 12월 정식운영 예정', en: 'official launch planned for December 2026' } as L,
}

export type Tool = {
  key: string
  /** MakePlayAI / MakePlaySW 는 로고 색 표기를 위해 두 언어 모두 같은 이름 */
  name: L
  role: L
  text: L
  /** 제품 화면이 있으면 사진, 없으면 책 아이콘 + topics 로 같은 크기의 그림 영역을 채운다 */
  image?: string
  topics?: L<string[]>
}

export const tools: Tool[] = [
  {
    key: 'ai',
    name: { ko: 'MakePlayAI', en: 'MakePlayAI' },
    role: { ko: '나만의 AI 모델 만들기', en: 'Build your own AI model' },
    text: {
      ko: '직접 모으거나 준비한 데이터를 올려 AI 모델을 학습시킵니다. 코딩 없이 분류·예측 같은 모델을 만들고, 만든 모델은 MakePlaySW에서 바로 쓸 수 있습니다.',
      en: 'Upload data you collected or prepared and train an AI model. Build classification and prediction models without coding, then use them right away in MakePlaySW.',
    },
    image: 'images/makeplay/AI-super-multiLayer.png',
  },
  {
    key: 'sw',
    name: { ko: 'MakePlaySW', en: 'MakePlaySW' },
    role: { ko: '나만의 AI 서비스 만들기', en: 'Build your own AI service' },
    text: {
      ko: '만든 모델을 연결해 실제로 동작하는 서비스를 구성합니다. 화면을 설계하고 로직을 연결한 뒤, 완성한 서비스를 커뮤니티에 공유할 수 있습니다.',
      en: 'Connect your models to build services that actually work. Design the screens, wire up the logic, and share the finished service with the community.',
    },
    image: 'images/makeplay/SW-uiEdit.png',
  },
  {
    key: 'learn',
    name: { ko: '학습 콘텐츠', en: 'Learning Content' },
    role: { ko: 'AI·수학 기초 지식', en: 'AI & math fundamentals' },
    text: {
      ko: 'AI 모델을 이해하고 활용하는 데 필요한 수학 개념과 AI 원리를 익힙니다. 이론을 먼저 보고 싶을 때나 실습 중 막힐 때 찾아보는 공간입니다.',
      en: 'Learn the math concepts and AI principles you need to understand and use AI models — a place to study the theory first or look things up when you get stuck.',
    },
    topics: {
      ko: ['머신러닝', '분류 vs 회귀', '행렬과 벡터', '확률과 통계', '신경망 구조', '과적합과 일반화'],
      en: ['Machine learning', 'Classification vs. regression', 'Matrices & vectors', 'Probability & statistics', 'Neural networks', 'Overfitting & generalization'],
    },
  },
]

export const audiences: L[] = [
  { ko: '초등학생', en: 'Elementary students' },
  { ko: '중학생', en: 'Middle schoolers' },
  { ko: '고등학생', en: 'High schoolers' },
  { ko: '대학생', en: 'University students' },
  { ko: '현장 교사', en: 'Teachers' },
  { ko: '교육 기관', en: 'Educational institutions' },
]

export const goals: L[] = [
  { ko: '자기주도 역량 향상', en: 'Self-directed learning' },
  { ko: 'AI 문제 해결 역량 개발', en: 'AI problem-solving skills' },
  { ko: '윤리적 AI 활용 교육', en: 'Ethical use of AI' },
  { ko: '교육 격차 해소', en: 'Closing the education gap' },
  { ko: '프로젝트 기반 실전 학습', en: 'Hands-on project-based learning' },
  { ko: '오픈소스 커뮤니티', en: 'Open-source community' },
]

export const partners: L[] = [
  { ko: '고려대학교 사회통합AI교육 연구소', en: 'Korea University Social Integration AI Education Institute' },
  { ko: '(사) 미래융합교육연구소', en: 'Future & Consilience Education Institution' },
  { ko: '창의재단', en: 'Korea Foundation for the Advancement of Science and Creativity (KOFAC)' },
  { ko: '2026 AI 동행 지원단', en: '2026 AI Companion Support Group' },
]

export type ShowcaseBrand = 'AI' | 'SW'

/** 돋보기 위치(이미지 기준 %)와 확대 배율 */
export type Loupe = { focusX: number; focusY: number; zoom: number }

export type ShowcaseShot = { src: string; alt: L; loupe: Loupe }

/** 미래교육허브 상단 화면 캐러셀 — MakePlayAI 홈의 순서·돋보기 위치를 따른다 */
const aiShots: ShowcaseShot[] = [
  { src: 'images/makeplay/AI-super-dataProcessing.png', alt: { ko: '데이터 전처리 화면', en: 'Data preprocessing screen' }, loupe: { focusX: 11, focusY: 23, zoom: 2 } },
  { src: 'images/makeplay/AI-super-decisionTree.png', alt: { ko: '의사결정나무 화면', en: 'Decision tree screen' }, loupe: { focusX: 40, focusY: 25, zoom: 3 } },
  { src: 'images/makeplay/AI-super-catDogImage.png', alt: { ko: '이미지 학습 화면', en: 'Image training screen' }, loupe: { focusX: 10, focusY: 34, zoom: 1.8 } },
  { src: 'images/makeplay/AI-super-multiLayer.png', alt: { ko: '다층 신경망 화면', en: 'Multi-layer neural network screen' }, loupe: { focusX: 45, focusY: 19, zoom: 2.25 } },
  { src: 'images/makeplay/AI-super-nnSet.png', alt: { ko: '신경망 설정 화면', en: 'Neural network settings screen' }, loupe: { focusX: 35, focusY: 48, zoom: 2.5 } },
  { src: 'images/makeplay/AI-super-regression.png', alt: { ko: '회귀 학습 화면', en: 'Regression training screen' }, loupe: { focusX: 35, focusY: 75, zoom: 2.5 } },
  { src: 'images/makeplay/AI-super-singleLayer.png', alt: { ko: '단층 신경망 화면', en: 'Single-layer neural network screen' }, loupe: { focusX: 65, focusY: 30, zoom: 2.25 } },
  { src: 'images/makeplay/AI-unsuper-dbscan.png', alt: { ko: 'DBSCAN 군집화 화면', en: 'DBSCAN clustering screen' }, loupe: { focusX: 60, focusY: 20, zoom: 2.2 } },
  { src: 'images/makeplay/AI-unsuper-kmeans.png', alt: { ko: 'K-means 군집화 화면', en: 'K-means clustering screen' }, loupe: { focusX: 85, focusY: 35, zoom: 2.3 } },
  { src: 'images/makeplay/AI-unsuper-kmeansSet.png', alt: { ko: 'K-means 설정 화면', en: 'K-means settings screen' }, loupe: { focusX: 50, focusY: 50, zoom: 2.15 } },
]

const swShots: ShowcaseShot[] = [
  { src: 'images/makeplay/SW-aiModelEdit.png', alt: { ko: 'AI 모델 편집 화면', en: 'AI model editing screen' }, loupe: { focusX: 30, focusY: 65, zoom: 2.15 } },
  { src: 'images/makeplay/SW-codeBlockEdit.png', alt: { ko: '코드 블록 편집 화면', en: 'Code block editing screen' }, loupe: { focusX: 25, focusY: 50, zoom: 2.15 } },
  { src: 'images/makeplay/SW-dbEdit.png', alt: { ko: 'DB 편집 화면', en: 'Database editing screen' }, loupe: { focusX: 25, focusY: 35, zoom: 2.15 } },
  { src: 'images/makeplay/SW-mainConstruction.png', alt: { ko: '메인 구성 화면', en: 'Main layout screen' }, loupe: { focusX: 65, focusY: 45, zoom: 2.15 } },
  { src: 'images/makeplay/SW-uiEdit.png', alt: { ko: 'UI 편집 화면', en: 'UI editing screen' }, loupe: { focusX: 16, focusY: 35, zoom: 2.15 } },
  { src: 'images/makeplay/SW-simulationWork.png', alt: { ko: '시뮬레이션 작업 화면', en: 'Simulation screen' }, loupe: { focusX: 10, focusY: 80, zoom: 2.15 } },
]

/** 한 슬라이드에 화면 2장씩 위아래로 */
function pairUp(shots: ShowcaseShot[], brand: ShowcaseBrand) {
  const slides: { brand: ShowcaseBrand; shots: ShowcaseShot[] }[] = []
  for (let i = 0; i < shots.length; i += 2) slides.push({ brand, shots: shots.slice(i, i + 2) })
  return slides
}

export const showcaseSlides = [...pairUp(aiShots, 'AI'), ...pairUp(swShots, 'SW')]

export const hubText = {
  heroTitle: { ko: '미래교육허브', en: 'Next Education Hub' } as L,
  heroSubtitle: {
    ko: 'AI를 직접 만들고, SW로 즐기면서 배우는 개방형 AI 교육 플랫폼',
    en: 'An open AI education platform where you build AI yourself and learn by playing with SW',
  } as L,
  headline: { ko: ['AI를 직접 만들고', 'SW로 즐기면서 배우다'], en: ['Build AI yourself,', 'learn by playing with SW'] } as L<string[]>,
  goToMakePlay: { ko: 'MakePlayAI 바로가기 ↗', en: 'Go to MakePlayAI ↗' } as L,
  serviceOverview: { ko: '서비스 소개', en: 'Service overview' } as L,
  whatTitle: { ko: '무엇을 할 수 있나요?', en: 'What can you do?' } as L,
  whatLead: {
    ko: '공적 영역에서 누구나 쓸 수 있는 AI 학습·서비스 생성 도구와 기본 학습 콘텐츠를 함께 제공합니다.',
    en: 'Free tools for learning AI and building AI services, plus foundational learning content, open to everyone.',
  } as L,
  screen: { ko: '화면', en: 'screen' } as L,
  audienceTitle: { ko: '누구나 참여할 수 있어요', en: 'Open to everyone' } as L,
  audienceNote: { ko: '연령과 배경에 관계없이 무료로 열려 있는 플랫폼입니다.', en: 'A free platform open to all ages and backgrounds.' } as L,
  goalsTitle: { ko: '핵심 목표', en: 'Core goals' } as L,
  partnersTitle: { ko: '함께하는 기관', en: 'Partners' } as L,
  ctaTitle: { ko: '지금 MakePlayAI에서 나만의 AI를 만들어 보세요', en: 'Build your own AI on MakePlayAI today' } as L,
  faq: { ko: '자주하는 질문', en: 'FAQ' } as L,
  start: { ko: 'MakePlayAI 시작하기 ↗', en: 'Start MakePlayAI ↗' } as L,
}
