export const site = {
  name: '미래융합교육 연구소',
  nameEn: 'Future&Consilience Education Institution',
  tagline: '스스로 문제를 정의하고 융합적으로 해결할 수 있도록 연결을 지원하는 교육',
  email: 'info@hints.or.kr',
  address: '서울시 성북구 북악산로 31길 22 HomeN 201호',
  copyright: '© Copyright 2016 by Future&Consilience Education Instituion',
  homepage: 'https://www.hints.or.kr/',
}

export const navItems = [
  { to: '/', label: 'HOME' },
  { to: '/about', label: '소개' },
  { to: '/research', label: '연구 분야' },
  { to: '/hub', label: '미래교육허브' },
  { to: '/news', label: 'EVENTS & NEWS' },
  { to: '/contact', label: 'CONTACT 및 기부금' },
]

/** public/ 아래 정적 파일 경로 (배포 base 경로를 반영) */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
