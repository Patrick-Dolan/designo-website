import Button from "../shared/Button"
import CardTemplate from "../shared/CardTemplate"

function HomeHeroSection() {
  return (
    <CardTemplate className="h-211 rounded-none text-white overflow-hidden relative bg-home-hero-pattern bg-no-repeat bg-left">
      <div className="flex flex-col gap-6 pt-20">
        <h1 className="text-center font-medium leading-9">Award-winning custom designs and digital branding solutions</h1>
        <p className="text-center leading-7">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
        <div className="flex justify-center z-10">
          <Button text="Learn More" type="button" onClick={() => console.log("Clicked")} variant="secondary" />
        </div>
      </div>
      <img 
        src="/designo-website/assets/home/desktop/image-hero-phone.png" 
        alt="Phone with a designo app on the screen" 
        className="absolute bottom-[-23%] left-1/2 transform -translate-x-1/2 scale-150"
      />
    </CardTemplate>
  )
}

export default HomeHeroSection