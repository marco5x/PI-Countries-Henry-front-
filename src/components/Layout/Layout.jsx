import { Outlet } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import { NavBar } from "../NavBar/NavBar"

export const Layout = () => {
    return(
        <div>
            <NavBar/>
            <Outlet />
            <Footer />
        </div>
    )
}