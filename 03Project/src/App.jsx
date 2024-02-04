import { Outlet } from "react-router-dom"
import Footer from "./componets/Footer/Footer"
import Header from "./componets/Header/Header"

function App() {
  return (
  <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
  )
}

export default App
