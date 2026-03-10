import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import UnderConstruction from "./pages/UnderConstruction"
import Join from "./pages/Join"
import TheCar from "./pages/TheCar"
import Contactos from "./pages/Contactos"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* homepage */}
        <Route path="/" element={<UnderConstruction />} />

        {/* /join */}
        <Route path="/join" element={<Join />} />

        {/* HACK apenas para expor o que ja temos e os placeholders para design e marketing trocarem */}
        <Route path="/demo-homepage" element={<Home />} />

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
