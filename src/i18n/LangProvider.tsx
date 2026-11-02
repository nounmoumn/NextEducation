import { useEffect, useState, type ReactNode } from 'react'
import { LangContext, initialLang, saveLang, type Lang } from './lang'
import { ui } from './ui'

export default function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = (next: Lang) => {
    setLangState(next)
    saveLang(next)
  }

  // 문서 언어와 탭 제목을 현재 언어에 맞춘다
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = ui.siteTitle[lang]
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}
