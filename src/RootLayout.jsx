import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import { ScrollRestoration } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout() {
  return (
    <div className="max-w-screen-xl mx-auto font-poppins">
        <ScrollRestoration/>
        <Navbar/>
        <Analytics/>
        <div className="px-4 lg:px-0 py-4">
        <Outlet/>
        </div>
    </div>
  )
}
