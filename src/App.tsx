import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Join from "./pages/Join"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* homepage */}
        <Route path="/" element={<Home />} />

        {/* /join */}
        <Route path="/join" element={<Join />} />

        {/* default */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
