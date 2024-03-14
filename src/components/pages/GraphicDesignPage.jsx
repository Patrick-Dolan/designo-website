import LinkCards from "../navigation/LinkCards"
import Container from "../shared/Container"
import DesignPageHero from "../shared/DesignPageHero"

function GraphicDesignPage() {
  return (
    <>
      <div className="mb-24">
        <DesignPageHero />
      </div>
      <Container>
        <LinkCards />
      </Container>
    </>
  )
}

export default GraphicDesignPage