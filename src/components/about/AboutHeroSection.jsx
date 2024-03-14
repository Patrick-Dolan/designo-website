import Container from "../shared/Container"

function AboutHeroSection() {
  return (
    <div className="bg-primary bg-sm-about-hero-pattern bg-sm-about-hero-pos bg-no-repeat rounded-none text-white text-center overflow-hidden md:rounded-2xl">
      <img src="/designo-website/assets/about/mobile/image-about-hero.jpg" className="mx-auto" alt="" />
      <div className="py-20">
        <Container>
          <h1 className="font-medium mb-6">About Us</h1>
          <p className="text-15">Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
        </Container>
      </div>
    </div>
  )
}

export default AboutHeroSection