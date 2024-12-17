import { Outlet } from "react-router-dom"
import Navbar from "../share/Navbar"
import Footer from "../share/Footer"

function MainLayout() {
  return (
    <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default MainLayout