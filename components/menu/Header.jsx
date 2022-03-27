import dynamic from "next/dynamic"
import { useState } from "react"
import Logo from "../Logo"

const NavLink = dynamic(()=>import(/*webpackChunkName:"navlink"*/ './NavLink'))
const Hamburger = dynamic(()=>import(/*webpackChunkName: "hamburger"*/ './Hamburger'))


function Header() {

  const [show, setShow] = useState(false)


  return (
    <header className={`h-36 flex md:flex-row flex-col md:items-center w-full bg-red-400 md:justify-between overflow-hidden ${show && 'h-screen'} transition-all duration-200 ease-in-out`}>
        <div className="flex justify-between items-center">
            <Logo />
            <Hamburger clicked={()=>setShow(!show)}/>
        </div>

        <ul className="flex md:flex-row flex-col md:items-center md:mr-8 md:space-x-5 md:space-y-0 space-y-3 mt-5 md:mt-0 ml-4 md:ml-0">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/">Courses</NavLink>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/">Register</NavLink>
        </ul>
    </header>
  )
}

export default Header