import { useState } from "react"
import { Link } from "react-router-dom"
import HamburgerIcon from "../../assets/shared/mobile/HamburgerIcon"
import CloseIcon from "../../assets/shared/mobile/CloseIcon"


function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setMobileNavOpen(prev => !prev);
  }

  return (
    <>
      <nav className="fixed w-full bg-white z-30">
        <div className="flex justify-between items-center px-6 min-h-24">
          <img src="/designo-website/shared/desktop/logo-dark.png" alt="" className="w-nav-logo" />
          <button onClick={toggleMobileNav}>
            {mobileNavOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
        <ul className={`uppercase px-6 py-12 text-2xl leading-normal space-y-7 bg-black text-white ${mobileNavOpen ? "" : "hidden"}`}>
          <li><Link to="/designo-website/about" onClick={toggleMobileNav}>Our company</Link></li>
          <li><Link to="/designo-website/locations" onClick={toggleMobileNav}>Locations</Link></li>
          <li><Link to="/designo-website/contact" onClick={toggleMobileNav}>Contact</Link></li>
        </ul>
      </nav>
      <div className={`fixed inset-0 bg-black opacity-50 z-20 ${mobileNavOpen ? "" : "hidden"}`}></div>
      {/* Following div is designed to push elements down below fixed nav height */}
      <div className="min-h-24"></div>
    </>
  )
}

export default Navbar