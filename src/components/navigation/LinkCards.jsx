import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import CardTemplate from "../shared/CardTemplate"

function LinkCards() {
  const location = useLocation();
  const [links, setLinks] = useState([
    {
      title: "Web Design",
      path: "/designo-website/web-design",
      background: "bg-sm-web-design",
      mdBackground: "md:bg-md-web-design",
      lgBackgroundSmall: "lg:bg-lg-web-design-small",
      lgBackgroundLarge: "lg:bg-lg-web-design-large"
    },
    {
      title: "App Design",
      path: "/designo-website/app-design",
      background: "bg-sm-app-design",
      mdBackground: "md:bg-md-app-design",
      lgBackground: "lg:bg-lg-app-design"
    },
    {
      title: "Graphic Design",
      path: "/designo-website/graphic-design",
      background: "bg-sm-graphic-design",
      mdBackground: "md:bg-md-graphic-design",
      lgBackground: "lg:bg-lg-graphic-design"
    },
  ]);

  // usEffect removes the current page path from the links array
  useEffect(() => {
    setLinks(prevLinks => prevLinks.filter(link => link.path !== location.pathname));
  }, [location]);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 ${location.pathname == "/designo-website/" ? "lg:grid-rows-2 lg:min-h-160" : "lg:grid-rows-1 lg:min-h-77"} gap-6`}>
      {links.map((link, index) => (
        <Link key={link.title} to={link.path} className={`group ${(index === 0 && location.pathname == "/designo-website/") ? "lg:row-span-2" : ""}`}>
          <CardTemplate className={`relative h-62.5 flex justify-center items-center text-white bg-cover bg-center lg:min-h-full ${link.background} ${link.mdBackground} ${link?.lgBackground} ${(index === 0 && location.pathname == "/designo-website/") ? `${link.lgBackgroundLarge}` : `${link.lgBackgroundSmall}`}`}>
            <div className="absolute inset-0 bg-pure-black opacity-50 z-10 rounded-2xl group-hover:bg-primary group-hover:opacity-80"></div>
            <div className="relative z-20 ">
              <h2 className="font-medium uppercase mb-3 md:mb-6 md:text-10 md:tracking-2px">{link.title}</h2>
              <div className="flex justify-center items-center gap-4">
                <p className="font-medium uppercase text-center tracking-super-wide">View Projects</p>
                <img src="/designo-website/shared/desktop/icon-right-arrow.svg" alt="" />
              </div>
            </div>
          </CardTemplate>
        </Link>
      ))}
    </div>
  )
}

export default LinkCards