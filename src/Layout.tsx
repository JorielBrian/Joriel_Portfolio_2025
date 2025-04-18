import { Outlet } from "react-router-dom"
import Navigation from "./Components/Navigation"
import Footer from "./Components/Footer"

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