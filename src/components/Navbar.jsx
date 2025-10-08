
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <>
        

<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/logo.jpg" className="h-19 size-20" alt="Logo" />
      {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">King</span> */}
    </a>

    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="btn-primary">Order Now</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
    </div>

    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:mt-0 md:space-x-8">
        <li>
          <Link to="/" className="nav-link nav-link-active" aria-current="page">Home</Link>
        </li>
        <li>
          <a href="#" className="nav-link">About</a>
        </li>
        <li>
          <a href="#" className="nav-link">Services</a>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>



    </>
  )
}
 