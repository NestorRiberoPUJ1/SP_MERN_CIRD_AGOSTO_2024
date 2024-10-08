import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import UserPage from "./pages/UserPage"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={RegisterPage} />
          <Route path="/users" Component={UserPage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
