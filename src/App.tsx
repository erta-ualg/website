import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import Home from "./pages/Home"
// import Join from "./pages/Join"
import JoinForm from "./pages/JoinForm"
import TeamPage from "./pages/Team"
import PartnersPage from "./pages/Partners"
// import TheCar from "./pages/TheCar"
import Contactos from "./pages/Contactos"
import NotFound from "./pages/NotFound"
import UnderConstruction from "./pages/UnderConstruction"

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
        {/* homepage */}
        <Route path="/" element={<Home />} />

        <Route path="/join" element={<JoinForm />} />

        <Route path="/partners" element={<PartnersPage />} />

        <Route path="/team" element={<TeamPage />} />

        <Route path="/carro" element={<UnderConstruction />} />

        <Route path="/contactos" element={<Contactos />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
