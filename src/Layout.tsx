import { Outlet } from "react-router-dom"
import Navigation from "./Components/Sections/Navigation"
import Footer from "./Components/Sections/Footer"

const Layout = () => {
  return (
    <>
        <Navigation />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout