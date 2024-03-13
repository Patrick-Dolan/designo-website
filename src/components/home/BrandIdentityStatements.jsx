import { useState } from "react";

function BrandIdentityStatements() {
  const [ statements ] = useState([
    { 
      title: "Passionate", 
      text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
      imagePath: "/designo-website/assets/home/desktop/illustration-passionate.svg",
      backgroundImageRotation: "rotate-0",
      imageCorrectionRotation: "-rotate-0",
    },
    { 
      title: "Resourceful", 
      text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
      imagePath: "/designo-website/assets/home/desktop/illustration-resourceful.svg",
      backgroundImageRotation: "-rotate-90",
      imageCorrectionRotation: "rotate-90",
    },
    { 
      title: "Friendly", 
      text: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
      imagePath: "/designo-website/assets/home/desktop/illustration-friendly.svg",
      backgroundImageRotation: "rotate-90",
      imageCorrectionRotation: "-rotate-90",
    },
  ]);

  return (
    <div className="flex flex-col gap-20">
      {statements.map((statement) => (
        <div key={statement.title} className="text-center">
          <div className={`bg-home-circle-pattern bg-no-repeat bg-center mb-12 transform ${statement.backgroundImageRotation}`}>
            <img className={`mx-auto transform ${statement.imageCorrectionRotation}`} src={statement.imagePath} alt={`Illustration of a person ${statement.title}.`} />
          </div>
          <h3 className="uppercase font-medium tracking-super-wide mb-8">{statement.title}</h3>
          <p>{statement.text}</p>
        </div>
      ))}
    </div>
  )
}

export default BrandIdentityStatements