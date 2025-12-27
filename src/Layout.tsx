import { Outlet } from "react-router-dom"
import Footer from "./Components/Sections/Footer"
import Header from "./Components/Sections/Header"
import Events from "./Components/Events"

const Layout = () => {
  return (
    <>
      <Events />
      <Header />
      <main>
          <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout