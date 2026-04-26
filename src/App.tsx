import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
// import Join from "./pages/Join"
import JoinForm from "./pages/JoinForm"
import TeamPage from "./pages/Team"
import PartnersPage from "./pages/Partners"
import TheCar from "./pages/TheCar"
import Contactos from "./pages/Contactos"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* homepage */}
        <Route path="/" element={<Home />} />

        {/* /join */}
        {/* <Route path="/join" element={<Join />} /> */}

        {/* /joinForm */}
        <Route path="/join" element={<JoinForm />} />

        {/* HACK apenas para expor o que ja temos e os placeholders para design e marketing trocarem */}
        <Route path="/demo-homepage" element={<Home />} />

        <Route path="/partners" element={<PartnersPage />} />

        <Route path="/team" element={<TeamPage />} />

        {/* the car */}
        <Route path="/carro" element={<TheCar />} />

        {/* default */}
        <Route path="*" element={<Navigate to="/" />} />

        {/* contactos */}
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
