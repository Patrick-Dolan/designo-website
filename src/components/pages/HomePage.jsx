import HomeHeroSection from "../home/HomeHeroSection"
import Container from "../shared/Container"

function HomePage() {
  return (
    <Container className="px-0 md:px-6">
      <HomeHeroSection />
    </Container>
  )
}

export default HomePage