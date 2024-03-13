import HomeHeroSection from "../home/HomeHeroSection"
import LinkCards from "../navigation/LinkCards"
import Container from "../shared/Container"

function HomePage() {
  return (
    <>
      <div className="mb-30">
        <Container className="px-0 md:px-6">
          <HomeHeroSection />
        </Container>
      </div>
      <Container>
        <LinkCards />
      </Container>
    </>
  )
}

export default HomePage