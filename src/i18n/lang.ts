import { createContext, useContext } from 'react'

export type Lang = 'ko' | 'en'

/** 한국어/영어 두 벌을 가진 값 */
export type L<T = string> = { ko: T; en: T }

export const LANGS: Lang[] = ['ko', 'en']

type LangState = { lang: Lang; setLang: (lang: Lang) => void }

export const LangContext = createContext<LangState>({ lang: 'ko', setLang: () => {} })

/** 현재 언어와, 두 벌짜리 값에서 현재 언어 값을 고르는 t() */
export function useLang() {
  const { lang, setLang } = useContext(LangContext)
  const t = <T,>(value: L<T>): T => value[lang]
  return { lang, setLang, t }
}

const STORAGE_KEY = 'site-lang'

/** 처음 언어: 주소의 ?lang= → 저장된 선택 → 한국어 */
export function initialLang(): Lang {
  if (typeof window === 'undefined') return 'ko'
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (fromUrl === 'ko' || fromUrl === 'en') return fromUrl
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'ko' || saved === 'en') return saved
  } catch {
    // 저장소를 쓸 수 없는 환경(사생활 보호 모드 등)
  }
  return 'ko'
}

export function saveLang(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // 저장 실패는 무시 (이번 방문 동안만 유지)
  }
}
