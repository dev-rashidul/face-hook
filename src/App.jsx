import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import RegistrationPage from "./pages/RegistrationPage"

function App() {

  return (
    <>
      <Routes>
        <Route element={<HomePage/>} path="/" exact/>
        <Route element={<LoginPage/>} path="/login"/>
        <Route element={<RegistrationPage/>} path="/register"/>
        <Route element={<ProfilePage/>} path="/profile"/>
      </Routes>
    </>
  )
}

export default App
