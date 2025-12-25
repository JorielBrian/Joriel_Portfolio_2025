import { Outlet } from "react-router-dom"
import Footer from "./Components/Sections/Footer"
import Header from "./Components/Sections/Header"

const Layout = () => {
  return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout