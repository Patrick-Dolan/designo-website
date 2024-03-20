import { useEffect, useState } from "react";
import Container from "../shared/Container"

function AboutHeroSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getImageSrc = () => {
    if (windowWidth >= 1280) {
      return "/designo-website/assets/about/desktop/image-about-hero.jpg";
    } else if (windowWidth >= 768) {
      return "/designo-website/assets/about/tablet/image-about-hero.jpg";
    } else {
      return "/designo-website/assets/about/mobile/image-about-hero.jpg";
    }
  };

  return (
    <div className="bg-primary bg-sm-about-hero-pattern bg-sm-about-hero-pos bg-no-repeat rounded-none text-white text-center overflow-hidden md:rounded-2xl md:bg-md-about-hero-pattern md:bg-md-about-hero-pos">
      <img src={getImageSrc()} className="mx-auto w-full object-cover h-80" alt="" />
      <div className="py-20 md:py-16">
        <Container>
          <h1 className="font-medium mb-6 md:text-5xl md:mb-8">About Us</h1>
          <p className="text-15px md:text-base md:max-w-143 md:mx-auto">Founded in 2010, we are a creative agency that produces lasting results for our clients. We&apos;ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We&apos;re always looking forward to creating brands, products, and digital experiences that connect with our clients&apos; audiences.</p>
        </Container>
      </div>
    </div>
  )
}

export default AboutHeroSection