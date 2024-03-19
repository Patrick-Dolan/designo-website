import { useNavigate } from "react-router-dom"
import Button from "../shared/Button"
import CardTemplate from "../shared/CardTemplate"

function HomeHeroSection() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/designo-website/about");
    window.scrollTo(0, 0);
  }

  return (
    <CardTemplate className="h-211 rounded-none text-white overflow-hidden relative bg-home-hero-pattern bg-no-repeat bg-left md:bg-md-home-hero-pos">
      <div className="relative flex flex-col gap-6 pt-20 z-10 md:px-15">
        <h1 className="text-center font-medium leading-9 md:text-5xl">Award-winning custom designs and digital branding solutions</h1>
        <p className="text-center leading-7 text-15 md:text-base md:px-10">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
        <div className="flex justify-center z-10">
          <Button text="Learn More" type="button" onClick={handleNavigate} variant="secondary" />
        </div>
      </div>
      <img 
        src="/designo-website/assets/home/desktop/image-hero-phone.png" 
        alt="Phone with a designo app on the screen" 
        className="absolute bottom-[-23%] left-1/2 transform -translate-x-1/2 scale-160 md:scale-100 md:bottom-[-43%]"
      />
    </CardTemplate>
  )
}

export default HomeHeroSection