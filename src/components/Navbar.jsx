import { useState } from "react"
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import CartDrawer from "./CartDrawer";
export default function Navbar() {

    const location = useLocation()

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


    return (
        <header className="bg-white">
            <div className="px-4 sm:px-6 lg:px-8 relative">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block" to={'/'}>
                            <span className="sr-only">Home</span>
                            <img src="/assets/logo.png" alt="" className="h-10 rounded-full" />
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6">
                                <li>
                                    <Link to={'/products'} className={`transition text-base hover:text-gray-500/75 ${location.pathname ==='/products' ? 'font-semibold text-black' : 'text-gray-500 '}`} href="#"> Products </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                      <CartDrawer/>

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={handleNav}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`absolute ${nav ? ' top-0' : '-top-[200px]'} bg-white w-full left-0 py-4 px-4 transition-all ease-in shadow`}>
                    <div className="flex justify-between">
                    <Link className="block" to={'/'} onClick={handleNav}>
                    <img src="/assets/logo.png" alt="" className="h-10 rounded-full" />
                    </Link>
                    <IoClose onClick={handleNav} size={24} className=" cursor-pointer"/>
                    </div>
                        <div className="flex flex-col text-center space-y-4">
                        <Link onClick={handleNav} to={'/products'} className={`transition hover:text-gray-500/75 ${location.pathname ==='/products' ? 'font-semibold text-black' : 'text-gray-500 '}`} > Products </Link>
                        <Link onClick={handleNav} to={'/cart'} className={`transition hover:text-gray-500/75 ${location.pathname ==='/cart' ? 'font-semibold text-black' : 'text-gray-500 '}`} > Cart </Link>

                        </div>
                </div>
            </div>
        </header>

    )
}
