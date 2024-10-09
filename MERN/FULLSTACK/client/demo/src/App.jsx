import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import UserPage from "./pages/UserPage"
import UserDetailPage from "./pages/UserDetailPage"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={RegisterPage} />
          <Route path="/users" Component={UserPage} />
          <Route path="/users/:id" Component={UserDetailPage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
