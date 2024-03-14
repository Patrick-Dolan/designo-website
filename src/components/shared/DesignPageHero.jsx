import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import CardTemplate from "./CardTemplate"

function DesignPageHero() {
  const location = useLocation();
  const [pageInfo] = useState([
    {
      title: "Web Design",
      description: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.", 
      path: "/designo-website/web-design",
    },
    {
      title: "App Design",
      description: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.", 
      path: "/designo-website/app-design",
    },
    {
      title: "Graphic Design",
      description: "We deliver eye-catching branding materials that are tailored to meet your business objectives.", 
      path: "/designo-website/graphic-design",
    },
  ]);
  const [selectedPageInfo, setSelectedPageInfo] = useState({});

  useEffect(() => {
    const pageInfoPath = pageInfo.find(page => page.path === location.pathname);
    setSelectedPageInfo(pageInfoPath);
  }, [pageInfo, location.pathname]);

  return (
    <CardTemplate className="py-26 text-center text-white rounded-none bg-design-page-hero-pattern bg-no-repeat bg-right-top">
      <h1 className="mb-6 font-medium">{selectedPageInfo.title}</h1>
      <p className="text-15">{selectedPageInfo.description}</p>
    </CardTemplate>
  )
}

export default DesignPageHero