import type { L } from '../i18n/lang'

/**
 * 소개 페이지 이사장 사진 슬라이드 (원본 Wix 슬라이드쇼 순서·표시 방식 그대로)
 * fit: 'cover' = 칸을 채움(position 기준으로 자름), 'original' = 원래 크기로 가운데 (원본 3번 사진)
 */
export const directorPhotos: { src: string; alt: L; fit?: 'cover' | 'original'; position?: string }[] = [
  {
    src: 'images/site/director-1.jpg',
    alt: { ko: '이사장 권대용 — 강연 중인 모습', en: 'Chairman Dae-Yong Kwon giving a talk' },
    position: 'center',
  },
  {
    src: 'images/site/director-2.png',
    alt: { ko: '이사장 권대용 — 인물 사진', en: 'Portrait of Chairman Dae-Yong Kwon' },
    position: 'left center',
  },
  {
    src: 'images/site/director-3.jpg',
    alt: { ko: '이사장 권대용 — 연구실에서', en: 'Chairman Dae-Yong Kwon at the lab' },
    fit: 'original',
  },
  {
    src: 'images/site/director-4.png',
    alt: { ko: '이사장 권대용 — 강의 중인 모습', en: 'Chairman Dae-Yong Kwon giving a lecture' },
    position: 'center top',
  },
]

export const greeting = {
  role: { ko: '이사장', en: 'Chairman' } as L,
  name: { ko: '권대용', en: 'Dae-Yong Kwon' } as L,
  hello: {
    ko: ['안녕하세요~!', '미래융합교육 연구소 이사장 권대용 입니다.'],
    en: ['Hello!', 'I am Dae-Yong Kwon, Chairman of the Future & Consilience Education Institution.'],
  } as L<string[]>,
  paragraphs: [
    {
      ko: '미래에는 사람들이 무엇을 즐기며 어떤 스타일로 살아갈지 예측하기 힘들지만 사회의 일원으로써 어떤 역량이 필요할지는 환경에 변화를 보면 자연스럽게 예측할 수 있습니다.',
      en: 'It is hard to predict what people will enjoy or how they will live in the future, but by looking at how our environment is changing, we can naturally anticipate the competencies they will need as members of society.',
    },
    {
      ko: '앞으로는 모든 분야가 컴퓨팅 환경과 융합하여 현재보다 매우 정교화 되고 지능화 될 것이며 우리가 현재까지 살아오면서 중요하게 평가 했던 기억, 계산과 같은 인지 능력들이 컴퓨팅 파워에 때문에 지금의 아이들이 살아갈 환경에서는 그리 중요하지 않게 인식 될 것입니다. 이러한 환경 변화에서 가장 크게 변화를 요구 받는 부분이 교육 분야 입니다.',
      en: 'Every field will merge with computing environments and become far more sophisticated and intelligent. Because of computing power, cognitive abilities we have long valued, such as memorization and calculation, will matter much less in the world today’s children will live in. Of all areas, education is the one most strongly called upon to change.',
    },
    {
      ko: '미래 융합 연구소는 현재의 교육 행정 중심 그리고 결과 평가 기반으로 교육 모델의 한계점을 넘어 지능정보 사회로 가기 위한 지속 가능한 교육 모델과 시스템 그리고 구체적인 콘텐츠를 연구 개발하고 있으며 이를 보급 확산 하고자 합니다.',
      en: 'Moving beyond the limits of today’s administration-centered, outcome-assessment-based model of education, our Institute researches and develops sustainable education models, systems, and concrete content for the intelligent information society, and works to share and spread them.',
    },
    {
      ko: '산업 시대와 지능정보 시대가 교차하고 있는 지금 미래융합교육 연구소가 연구 개발 하고 있는 실체적인 미래 교육에 관심을 가져 주셨으면 합니다.',
      en: 'At this moment, when the industrial age and the intelligent information age intersect, we hope you will take an interest in the tangible future education our Institute is researching and developing.',
    },
  ] as L[],
}

export const history: { date: string; text: L }[] = [
  { date: '2015.09', text: { ko: '미래융합교육연구소 설립', en: 'Founded the Future & Consilience Education Institution' } },
  {
    date: '2016.01',
    text: {
      ko: '서울시교육청 특수분야연수기관 지정(융합 영재교육 직무연수)',
      en: 'Designated a special-field training institution by the Seoul Metropolitan Office of Education (in-service training in convergence gifted education)',
    },
  },
  { date: '2016.01', text: { ko: '융합(HINTS) 영재 교육과정 보급 학교 MOU 채결', en: 'Signed MOUs with schools adopting the HINTS convergence gifted curriculum' } },
  { date: '2016.01', text: { ko: '융합(HINTS) 영재 교육과정 교사연수 실시', en: 'Held teacher training on the HINTS convergence gifted curriculum' } },
  { date: '2016.05', text: { ko: '인지 및 심리검사 연수 실시', en: 'Held training on cognitive and psychological assessment' } },
  { date: '2016.09', text: { ko: '서울 성북구 이전', en: 'Relocated to Seongbuk-gu, Seoul' } },
  { date: '2017.03', text: { ko: '고려대 영재원 융합 분과 콘텐츠 보급', en: 'Provided content to the convergence division of the Korea University Gifted Education Center' } },
  {
    date: '2017.05',
    text: {
      ko: '삼성전자 사회 봉사단 주니어 소프트웨어 아카데미 교육모델 지원',
      en: 'Supported the education model of the Samsung Electronics Volunteer Corps Junior Software Academy',
    },
  },
  { date: '2017.10', text: { ko: 'SW 영재 학급 산출물 대회 지원', en: 'Supported the SW gifted class project competition' } },
  { date: '2018.01', text: { ko: 'SW 영재 학급 콘텐츠 지원', en: 'Provided content for SW gifted classes' } },
  { date: '2018.02', text: { ko: '고려대 영재원 인문 분과 콘텐츠 보급', en: 'Provided content to the humanities division of the Korea University Gifted Education Center' } },
  { date: '2018.03', text: { ko: '융합 영재교육과정(HINTS) 공개 코스 진행', en: 'Ran an open course of the HINTS convergence gifted curriculum' } },
  {
    date: '2018.03',
    text: {
      ko: '삼성전자 사회 봉사단 주니어 소프트웨어 아카데미 교육 콘텐츠 지원',
      en: 'Provided educational content to the Samsung Electronics Volunteer Corps Junior Software Academy',
    },
  },
]
