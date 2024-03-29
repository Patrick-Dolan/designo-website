import BrandIdentityStatements from "../home/BrandIdentityStatements"
import HomeHeroSection from "../home/HomeHeroSection"
import LinkCards from "../navigation/LinkCards"
import Container from "../shared/Container"

function HomePage() {
  return (
    <>
      <div className="mb-30">
        <Container className="px-0 md:px-10">
          <HomeHeroSection />
        </Container>
      </div>
      <Container className="px-6 md:px-10">
        <div className="mb-30">
          <LinkCards />
        </div>
        <BrandIdentityStatements />
      </Container>
    </>
  )
}

export default HomePage