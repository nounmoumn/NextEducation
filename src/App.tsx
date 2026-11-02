import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import { PageTransitionContext, prefersReducedMotion } from './components/pageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Hub from './pages/Hub'
import News from './pages/News'
import NewsPost from './pages/NewsPost'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()
  // 화면에 보이는 페이지. 전환 중에는 실제 주소보다 한 발 늦게 바뀐다.
  const [shown, setShown] = useState(location)
  const [entering, setEntering] = useState(false)
  const leaving = location.pathname !== shown.pathname && !prefersReducedMotion()
  const displayed = leaving ? shown : location

  const onLeft = () => {
    window.scrollTo(0, 0)
    setShown(location)
    setEntering(true)
  }

  return (
    <PageTransitionContext.Provider value={{ leaving, entering, onLeft }}>
      <Routes location={displayed}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="research" element={<Research />} />
          <Route path="hub" element={<Hub />} />
          <Route path="news" element={<News />} />
          <Route path="news/:slug" element={<NewsPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </PageTransitionContext.Provider>
  )
}
