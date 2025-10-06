import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return (
        <div>
            <header>
                <NavBar />
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default DefaultLayout