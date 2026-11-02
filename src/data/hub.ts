/**
 * 미래교육허브 페이지 데이터 — MakePlayAI(https://makeplayai.net/nn/) 소개 내용을 바탕으로 정리.
 */

export const makeplayUrl = 'https://makeplayai.net/nn/'

export const hubLinks = {
  service: `${makeplayUrl}intro/service`,
  faq: `${makeplayUrl}qa/faq`,
}

export const hubNotice = {
  status: '현재 시범운영 중',
  launch: '2026년 12월 정식운영 예정',
}

export type Tool = {
  key: string
  name: string
  role: string
  text: string
  /** 제품 화면이 있으면 사진, 없으면 책 아이콘 + topics 로 같은 크기의 그림 영역을 채운다 */
  image?: string
  topics?: string[]
}

export const tools: Tool[] = [
  {
    key: 'ai',
    name: 'MakePlayAI',
    role: '나만의 AI 모델 만들기',
    text: '직접 모으거나 준비한 데이터를 올려 AI 모델을 학습시킵니다. 코딩 없이 분류·예측 같은 모델을 만들고, 만든 모델은 MakePlaySW에서 바로 쓸 수 있습니다.',
    image: 'images/makeplay/AI-super-multiLayer.png',
  },
  {
    key: 'sw',
    name: 'MakePlaySW',
    role: '나만의 AI 서비스 만들기',
    text: '만든 모델을 연결해 실제로 동작하는 서비스를 구성합니다. 화면을 설계하고 로직을 연결한 뒤, 완성한 서비스를 커뮤니티에 공유할 수 있습니다.',
    image: 'images/makeplay/SW-uiEdit.png',
  },
  {
    key: 'learn',
    name: '학습 콘텐츠',
    role: 'AI·수학 기초 지식',
    text: 'AI 모델을 이해하고 활용하는 데 필요한 수학 개념과 AI 원리를 익힙니다. 이론을 먼저 보고 싶을 때나 실습 중 막힐 때 찾아보는 공간입니다.',
    topics: ['머신러닝', '분류 vs 회귀', '행렬과 벡터', '확률과 통계', '신경망 구조', '과적합과 일반화'],
  },
]

export const audiences = ['초등학생', '중학생', '고등학생', '대학생', '현장 교사', '교육 기관']

export const goals = [
  '자기주도 역량 향상',
  'AI 문제 해결 역량 개발',
  '윤리적 AI 활용 교육',
  '교육 격차 해소',
  '프로젝트 기반 실전 학습',
  '오픈소스 커뮤니티',
]

export const partners = ['고려대학교 사회통합AI교육 연구소', '(사) 미래융합교육연구소', '창의재단', '2026 AI 동행 지원단']

export type ShowcaseBrand = 'AI' | 'SW'

/** 돋보기 위치(이미지 기준 %)와 확대 배율 */
export type Loupe = { focusX: number; focusY: number; zoom: number }

export type ShowcaseShot = { src: string; alt: string; loupe: Loupe }

/** 미래교육허브 상단 화면 캐러셀 — MakePlayAI 홈의 순서·돋보기 위치를 따른다 */
const aiShots: ShowcaseShot[] = [
  { src: 'images/makeplay/AI-super-dataProcessing.png', alt: '데이터 전처리 화면', loupe: { focusX: 11, focusY: 23, zoom: 2 } },
  { src: 'images/makeplay/AI-super-decisionTree.png', alt: '의사결정나무 화면', loupe: { focusX: 40, focusY: 25, zoom: 3 } },
  { src: 'images/makeplay/AI-super-catDogImage.png', alt: '이미지 학습 화면', loupe: { focusX: 10, focusY: 34, zoom: 1.8 } },
  { src: 'images/makeplay/AI-super-multiLayer.png', alt: '다층 신경망 화면', loupe: { focusX: 45, focusY: 19, zoom: 2.25 } },
  { src: 'images/makeplay/AI-super-nnSet.png', alt: '신경망 설정 화면', loupe: { focusX: 35, focusY: 48, zoom: 2.5 } },
  { src: 'images/makeplay/AI-super-regression.png', alt: '회귀 학습 화면', loupe: { focusX: 35, focusY: 75, zoom: 2.5 } },
  { src: 'images/makeplay/AI-super-singleLayer.png', alt: '단층 신경망 화면', loupe: { focusX: 65, focusY: 30, zoom: 2.25 } },
  { src: 'images/makeplay/AI-unsuper-dbscan.png', alt: 'DBSCAN 군집화 화면', loupe: { focusX: 60, focusY: 20, zoom: 2.2 } },
  { src: 'images/makeplay/AI-unsuper-kmeans.png', alt: 'K-means 군집화 화면', loupe: { focusX: 85, focusY: 35, zoom: 2.3 } },
  { src: 'images/makeplay/AI-unsuper-kmeansSet.png', alt: 'K-means 설정 화면', loupe: { focusX: 50, focusY: 50, zoom: 2.15 } },
]

const swShots: ShowcaseShot[] = [
  { src: 'images/makeplay/SW-aiModelEdit.png', alt: 'AI 모델 편집 화면', loupe: { focusX: 30, focusY: 65, zoom: 2.15 } },
  { src: 'images/makeplay/SW-codeBlockEdit.png', alt: '코드 블록 편집 화면', loupe: { focusX: 25, focusY: 50, zoom: 2.15 } },
  { src: 'images/makeplay/SW-dbEdit.png', alt: 'DB 편집 화면', loupe: { focusX: 25, focusY: 35, zoom: 2.15 } },
  { src: 'images/makeplay/SW-mainConstruction.png', alt: '메인 구성 화면', loupe: { focusX: 65, focusY: 45, zoom: 2.15 } },
  { src: 'images/makeplay/SW-uiEdit.png', alt: 'UI 편집 화면', loupe: { focusX: 16, focusY: 35, zoom: 2.15 } },
  { src: 'images/makeplay/SW-simulationWork.png', alt: '시뮬레이션 작업 화면', loupe: { focusX: 10, focusY: 80, zoom: 2.15 } },
]

/** 한 슬라이드에 화면 2장씩 위아래로 */
function pairUp(shots: ShowcaseShot[], brand: ShowcaseBrand) {
  const slides: { brand: ShowcaseBrand; shots: ShowcaseShot[] }[] = []
  for (let i = 0; i < shots.length; i += 2) slides.push({ brand, shots: shots.slice(i, i + 2) })
  return slides
}

export const showcaseSlides = [...pairUp(aiShots, 'AI'), ...pairUp(swShots, 'SW')]
