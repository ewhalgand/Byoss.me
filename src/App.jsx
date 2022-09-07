import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

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