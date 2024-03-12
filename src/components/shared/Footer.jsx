import { Link } from "react-router-dom"
import Container from "./Container"

function Footer() {
  const handleLinkClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="flex flex-col justify-between items-center py-16">
          <Link to="/designo-website/" onClick={handleLinkClick}>
            <img src="/designo-website/shared/desktop/logo-light.png" alt="Designo logo." className="w-nav-logo" />
          </Link>
          <hr className="my-8 border border-white border-b-0 w-full opacity-10" />
          <ul className={`uppercase text-sm text-center space-y-8 leading-6 tracking-widest`}>
            <li><Link to="/designo-website/about" onClick={handleLinkClick}>Our company</Link></li>
            <li><Link to="/designo-website/locations" onClick={handleLinkClick}>Locations</Link></li>
            <li><Link to="/designo-website/contact" onClick={handleLinkClick}>Contact</Link></li>
          </ul>
          <p className="mt-10 text-center opacity-50">
            <span className="font-bold">Designo Central Office</span><br />
            3886 Wellington Street<br />
            Toronto, Ontario M9C 3J5
          </p>
          <p className="mt-10 text-center opacity-50">
            <span className="font-bold">Contact Us (Central Office)</span><br />
            P : +1 253-863-8967<br />
            M : contact@designo.co
          </p>
          <div className="flex mt-10">
            <img src="/designo-website/shared/desktop/icon-facebook.svg" alt="Facebook icon." className="w-6 h-6 mx-2" />
            <img src="/designo-website/shared/desktop/icon-youtube.svg" alt="YouTube icon." className="w-6 h-6 mx-2" />
            <img src="/designo-website/shared/desktop/icon-twitter.svg" alt="Twitter icon." className="w-6 h-6 mx-2" />
            <img src="/designo-website/shared/desktop/icon-pinterest.svg" alt="Pinterest icon." className="w-6 h-6 mx-2" />
            <img src="/designo-website/shared/desktop/icon-instagram.svg" alt="Instagram icon." className="w-6 h-6 mx-2" />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer