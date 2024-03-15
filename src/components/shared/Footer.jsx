import { Link, useLocation } from "react-router-dom"
import PropTypes from "prop-types"
import Container from "./Container"
import FooterContactCard from "./FooterContactCard"

function Footer({ contactCard = true }) {
  const handleLinkClick = () => {
    window.scrollTo(0, 0)
  }

  const location = useLocation()
  if (location.pathname === "/designo-website/contact") {
    contactCard = false;
  }

  return (
    <>
      {contactCard && <FooterContactCard  />}
      <footer className={`bg-black text-white ${!contactCard && "mt-30"}`}>
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
            <address className="mt-10 text-center not-italic opacity-50">
              <p className="font-bold">Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </address>
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
    </>
  )
}

Footer.propTypes = {
  contactCard: PropTypes.bool,
}

export default Footer