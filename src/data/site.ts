import type { L } from '../i18n/lang'

export const site = {
  name: { ko: '미래융합교육 연구소', en: 'Future & Consilience Education Institution' } as L,
  tagline: {
    ko: '스스로 문제를 정의하고 융합적으로 해결할 수 있도록 연결을 지원하는 교육',
    en: 'Education that connects learners so they can define problems themselves and solve them through convergence',
  } as L,
  email: 'info@hints.or.kr',
  address: {
    ko: '서울시 성북구 북악산로 31길 22 HomeN 201호',
    en: '#201 HomeN, 22 Bugaksan-ro 31-gil, Seongbuk-gu, Seoul, Korea',
  } as L,
  copyright: '© Copyright 2016 by Future&Consilience Education Instituion',
  homepage: 'https://www.hints.or.kr/',
}

export const navItems: { to: string; label: L }[] = [
  { to: '/', label: { ko: 'HOME', en: 'HOME' } },
  { to: '/about', label: { ko: '소개', en: 'ABOUT' } },
  { to: '/research', label: { ko: '연구 분야', en: 'RESEARCH' } },
  { to: '/hub', label: { ko: '미래교육허브', en: 'EDUCATION HUB' } },
  { to: '/news', label: { ko: 'EVENTS & NEWS', en: 'EVENTS & NEWS' } },
  { to: '/contact', label: { ko: 'CONTACT 및 기부금', en: 'CONTACT & DONATE' } },
]

/** public/ 아래 정적 파일 경로 (배포 base 경로를 반영) */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
