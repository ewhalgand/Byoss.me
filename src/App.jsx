import { Routes, Route } from "react-router-dom";
import { Navbar } from "./app/Components";
import { Home } from "./app/Pages";

function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>
  )
}

export default App