import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./app/Components";
import { Home, UserForm, SuccessCreate, Login } from "./app/Pages";

function App() {

  useEffect(() => {
    const uuid = new URLSearchParams(window.location.search).get('uuid')
    const redirect = new URLSearchParams(window.location.search).get('redirect')
    if (uuid){
      window.localStorage.setItem("uuid",uuid)
      if (redirect == "True"){
        window.location = "/create"
      }
      else{
        window.location = "/"
      } 
    }
  })

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