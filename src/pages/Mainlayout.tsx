import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const Mainlayout = () => {
  return (
    <div className="bg-zinc-900 overflow-x-hidden">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Mainlayout