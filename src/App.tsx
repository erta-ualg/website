import { lazy, Suspense, useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])

  return null
}

const Home = lazy(() => import("./pages/Home"))
const JoinForm = lazy(() => import("./pages/JoinForm"))
const TeamPage = lazy(() => import("./pages/Team"))
const PartnersPage = lazy(() => import("./pages/Partners"))
const Results = lazy(() => import("./pages/Results"))
const TheCar = lazy(() => import("./pages/TheCar"))
const Contactos = lazy(() => import("./pages/Contactos"))
const NotFound = lazy(() => import("./pages/NotFound"))

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-text">
      <span className="section-eyebrow" role="status">ERTA</span>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          {/* homepage */}
          <Route path="/" element={<Home />} />

          <Route path="/join" element={<JoinForm />} />

          <Route path="/partners" element={<PartnersPage />} />

          <Route path="/results" element={<Results />} />

          <Route path="/team" element={<TeamPage />} />

          <Route path="/carro" element={<TheCar />} />

          <Route path="/contactos" element={<Contactos />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
