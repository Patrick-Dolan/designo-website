import { useState } from "react"
import { Link } from "react-router-dom"
import HamburgerIcon from "../../assets/shared/mobile/HamburgerIcon"
import CloseIcon from "../../assets/shared/mobile/CloseIcon"

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const openMobileNav = () => {
    setMobileNavOpen(true);
  }

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  }

  return (
    <>
      <nav className="fixed w-full bg-white z-30">
        <div className="flex justify-between items-center px-6 min-h-24">
          <Link to="/designo-website/" onClick={closeMobileNav}>
            <img src="/designo-website/shared/desktop/logo-dark.png" alt="Designo logo." className="w-nav-logo" />
          </Link>
          <button onClick={mobileNavOpen ? closeMobileNav : openMobileNav}>
            {mobileNavOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
        <ul className={`uppercase px-6 py-12 text-2xl space-y-8 leading-6 tracking-widest bg-black text-white ${mobileNavOpen ? "" : "hidden"}`}>
          <li><Link to="/designo-website/about" onClick={closeMobileNav}>Our company</Link></li>
          <li><Link to="/designo-website/locations" onClick={closeMobileNav}>Locations</Link></li>
          <li><Link to="/designo-website/contact" onClick={closeMobileNav}>Contact</Link></li>
        </ul>
      </nav>
      <div onClick={closeMobileNav} className={`fixed inset-0 bg-black opacity-50 z-20 ${mobileNavOpen ? "" : "hidden"}`}></div>
      {/* Following div is designed to push elements down below fixed nav height */}
      <div className="min-h-24"></div>
    </>
  )
}

export default Navbar