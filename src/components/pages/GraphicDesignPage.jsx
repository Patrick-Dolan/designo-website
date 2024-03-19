import LinkCards from "../navigation/LinkCards"
import Container from "../shared/Container"
import DesignPageHero from "../shared/DesignPageHero"
import ProjectList from "../shared/ProjectList"

function GraphicDesignPage() {
  const projects =[
    {
      title: "Tim Brown",
      description: "A book cover designed for Tim Brown's new release, 'Change'",
      image: "/designo-website/assets/graphic-design/desktop/image-change.jpg"
    },
    {
      title: "Boxed Water",
      description: "A simple packaging concept made for Boxed Water",
      image: "/designo-website/assets/graphic-design/desktop/image-boxed-water.jpg"
    },
    {
      title: "Science!",
      description: "A poster made in collaboration with the Federal Art Project",
      image: "/designo-website/assets/graphic-design/desktop/image-science.jpg"
    },
  ];

  return (
    <>
      <div className="mb-24">
        <DesignPageHero />
      </div>
      <Container className="px-6 md:px-10">
        <div className="mb-24">
          <ProjectList projects={projects} />
        </div>
        <LinkCards />
      </Container>
    </>
  )
}

export default GraphicDesignPage