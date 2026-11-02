/** 화면 곳곳의 짧은 문구(메뉴·버튼·안내 등) 한국어/영어 */
export const ui = {
  siteTitle: { ko: '미래융합교육 연구소', en: 'Future & Consilience Education Institution' },
  skipToMain: { ko: '메인 콘텐츠로 건너뛰기', en: 'Skip to main content' },
  home: { ko: '홈', en: 'home' },
  openMenu: { ko: '메뉴 열기', en: 'Open menu' },
  mainMenu: { ko: '주 메뉴', en: 'Main menu' },
  language: { ko: '언어 선택', en: 'Language' },
  viewAll: { ko: '전체 보기', en: 'View all' },

  // 사진 슬라이더
  photoSlideshow: { ko: '사진 슬라이드쇼', en: 'Photo slideshow' },
  prevPhoto: { ko: '이전 사진', en: 'Previous photo' },
  nextPhoto: { ko: '다음 사진', en: 'Next photo' },
  nthPhoto: { ko: (n: number) => `${n}번째 사진`, en: (n: number) => `Photo ${n}` },

  // 미래교육허브 캐러셀
  prevScreen: { ko: '이전 화면', en: 'Previous screen' },
  nextScreen: { ko: '다음 화면', en: 'Next screen' },
  goToBrand: { ko: (b: string) => `MakePlay${b} 슬라이드로 이동`, en: (b: string) => `Go to MakePlay${b} slides` },
  nthSlide: { ko: (n: number) => `${n}번째 슬라이드`, en: (n: number) => `Slide ${n}` },

  // 뉴스
  allPosts: { ko: 'All Posts', en: 'All Posts' },
  newsIntro: { ko: '미래융합교육 연구소의 새로운 소식이 업데이트 됩니다.', en: 'The latest news from the Future & Consilience Education Institution.' },
  search: { ko: '검색', en: 'Search' },
  searchPosts: { ko: '게시물 검색', en: 'Search posts' },
  noPosts: { ko: '해당하는 게시물이 없습니다.', en: 'No matching posts.' },
  recentPosts: { ko: '최근 게시물', en: 'Recent posts' },
  readingTime: { ko: (m: number) => `${m}분 분량`, en: (m: number) => `${m} min read` },
  koreanOnly: { ko: '한국어', en: 'Korean' },
  koreanOnlyNotice: {
    ko: '',
    en: 'This post is available in Korean only. The original Korean text is shown below.',
  },

  // 404
  notFoundTitle: { ko: '페이지를 찾을 수 없습니다', en: 'Page not found' },
  notFoundText: { ko: '주소가 바뀌었거나 삭제된 페이지입니다.', en: 'The page may have moved or been deleted.' },
  goHome: { ko: '홈으로', en: 'Go home' },
}
