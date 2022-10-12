import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./app/Components";
import { Home, UserForm, SuccessCreate } from "./app/Pages";
import Login from "./app/Pages/login/Login";

function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<UserForm />} />
      <Route path="/create/success" element={<SuccessCreate />} />
    </Routes>
    <Footer />
  </>
  )
}

export default App