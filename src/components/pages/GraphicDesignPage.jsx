import LinkCards from "../navigation/LinkCards"
import Container from "../shared/Container"
import DesignPageHero from "../shared/DesignPageHero"

function GraphicDesignPage() {
  return (
    <>
      <div className="mb-30">
        <DesignPageHero />
      </div>
      <Container>
        <LinkCards />
      </Container>
    </>
  )
}

export default GraphicDesignPage