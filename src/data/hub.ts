/**
 * 미래교육허브 페이지 데이터 — MakePlayAI(https://makeplayai.net/nn/) 소개 내용을 바탕으로 정리.
 */

export const makeplayUrl = 'https://makeplayai.net/nn/'

export const hubLinks = {
  service: `${makeplayUrl}intro/service`,
  background: `${makeplayUrl}philosophy/background`,
  methods: `${makeplayUrl}philosophy/methods`,
  tryAI: `${makeplayUrl}try/makeplayai`,
  trySW: `${makeplayUrl}try/makeplaysw`,
  knowledge: `${makeplayUrl}learn/knowledge`,
  faq: `${makeplayUrl}qa/faq`,
}

export const hubNotice = {
  status: '현재 시범운영 중',
  launch: '2026년 12월 정식운영 예정',
}

export const tools = [
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
    text: '머신러닝, 분류와 회귀, 행렬과 벡터, 확률과 통계, 신경망 구조, 과적합과 일반화처럼 AI를 이해하는 데 필요한 개념을 익힙니다.',
  },
  {
    key: 'tutor',
    name: 'AI 튜터',
    role: '언제든 묻는 대화형 도우미',
    text: '모델 학습이나 서비스 구현 중 막히는 부분을 바로 질문할 수 있습니다. 개념 설명부터 오류 해결까지 학습 흐름을 끊지 않고 도움을 받습니다.',
  },
]

export const problems = [
  {
    title: '벌어지는 AI 활용 격차',
    text: '디지털 역량을 넘어 AI를 활용하는 능력의 차이가 빠르게 커지고 있고, 접근 기회의 차이가 곧 역량의 차이가 되고 있습니다.',
  },
  {
    title: '수동적인 AI 의존 학습',
    text: 'AI가 내놓은 해결 방법을 그대로 따라 하거나 답을 복사하는 학습으로는 문제를 스스로 해결하는 힘을 기르기 어렵습니다.',
  },
  {
    title: '주체적·윤리적 활용 역량의 부재',
    text: 'AI를 쓰는 데 그치지 않고, 결과를 비판적으로 검토하며 AI를 통제하고 다루는 역량이 필요합니다.',
  },
]

export const competencies = [
  { title: '자기주도 역량', text: '관심 분야를 스스로 탐색하고 문제를 정의하는 힘' },
  { title: 'AI 주체적 활용', text: 'AI를 따라 하는 대신 도구로 설계하는 역량' },
  { title: '윤리적 AI 통제', text: 'AI의 결과를 비판적으로 검토하고 바르게 쓰는 판단력' },
  { title: '창의적 문제 해결', text: 'AI와 함께 새로운 방식으로 문제에 접근하는 사고력' },
]

export const methodSteps = [
  {
    no: '01',
    title: 'AI 문제 해결 과정',
    text: 'AI가 생성과 판단까지 맡게 되면서, 사람은 기획·설계·통제를 담당하게 되었습니다. 메타 사고와 가치 중심적인 수행이 사람의 역할입니다.',
  },
  {
    no: '02',
    title: '절차적 사고',
    text: 'AI에게 목표만 주고 답을 받는 대신, 내가 확인할 수 있는 단위로 절차를 나누어 그대로 수행하게 합니다. 그래야 AI를 관리할 수 있고 결과도 설명할 수 있습니다.',
  },
  {
    no: '03',
    title: '데이터 기반 평가',
    text: '각 절차의 입력과 출력을 데이터로 확인하고, 다음 단계로 넘어갈지 고칠지를 판단합니다.',
  },
]

export const projectFlow = [
  { title: '이해', text: '개념과 원리를 단계적으로 학습' },
  { title: '체험', text: '실제 도구로 직접 수행' },
  { title: '수행', text: '수준에 맞는 수행형 활동을 연속으로' },
  { title: '결과물', text: '나만의 AI 서비스 완성' },
]

export type Experience = {
  tool: 'MakePlayAI' | 'MakePlaySW'
  type: string
  title: string
  text: string
  steps?: string[]
}

export const experiences: Experience[] = [
  {
    tool: 'MakePlayAI',
    type: '지도 학습 · 이미지',
    title: '고양이/강아지 사진 분류',
    text: '클래스별로 사진을 올려 학습시키고 새 사진으로 예측해 봅니다.',
    steps: ['데이터셋 불러오기', '학습', '모델 테스트'],
  },
  {
    tool: 'MakePlayAI',
    type: '지도 학습 · 웹캠',
    title: '손 모양(가위바위보) 분류',
    text: '웹캠으로 손 제스처를 촬영해 데이터를 만들고 실시간으로 분류 결과를 확인합니다.',
    steps: ['클래스 추가', '웹캠 촬영', '학습', '실시간 예측'],
  },
  {
    tool: 'MakePlayAI',
    type: '지도 학습 · 단층 신경망',
    title: '키·몸무게로 남녀 분류',
    text: '두 가지 속성으로 경계선을 찾는 단층 신경망을 학습하고 정확도를 높여 봅니다.',
    steps: ['데이터셋 불러오기', '학습', '정확도 확인·재학습', '모델 테스트'],
  },
  {
    tool: 'MakePlayAI',
    type: '지도 학습 · 다층 신경망',
    title: '동물 3종 분류',
    text: '은닉층이 여러 개인 신경망으로 고양이·오리·토끼를 구분하며 파라미터를 조정합니다.',
    steps: ['데이터셋 불러오기', '학습', '정확도 확인·재학습', '모델 테스트'],
  },
  {
    tool: 'MakePlayAI',
    type: '비지도 학습 · K-means',
    title: '동물 사진 군집화',
    text: '정답 없이 비슷한 사진끼리 K개의 묶음으로 나누고, 새 사진이 어느 묶음인지 확인합니다.',
    steps: ['데이터셋 불러오기', '학습', '군집 결과 확인·재학습', '모델 테스트'],
  },
  {
    tool: 'MakePlayAI',
    type: '비지도 학습 · K-means',
    title: '동물 특성표 군집화',
    text: '표 형태의 동물 특성 데이터를 K값을 바꿔 가며 군집화합니다.',
    steps: ['데이터셋 불러오기', '학습', '군집 결과 확인·재학습', '모델 테스트'],
  },
  {
    tool: 'MakePlaySW',
    type: 'AI 모델 연결',
    title: '채팅 앱 만들기',
    text: '텍스트 임베딩 모델을 연결해 대화형 채팅 앱 화면을 구성합니다.',
  },
  {
    tool: 'MakePlaySW',
    type: 'DB 연결',
    title: '회원가입/로그인 만들기',
    text: '회원가입·로그인 화면을 만들고 DB와 연결해 인증 흐름을 완성합니다.',
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
