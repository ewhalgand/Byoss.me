import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./app/Components";
import { Home, UserForm, SuccessCreate } from "./app/Pages";

function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<UserForm />} />
      <Route path="/create/success" element={<SuccessCreate />} />
    </Routes>
    <Footer />
  </>
  )
}

export default App