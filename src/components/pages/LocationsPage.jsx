import { useEffect } from "react"
import Container from "../shared/Container"

function LocationsPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView();
    }
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <article className="bg-light-gray rounded-none text-center overflow-hidden md:rounded-2xl" id="canada-location">
        <img src="/designo-website/assets/locations/desktop/image-map-canada.png" alt="A map of the area around Designo Central office in Canada." />
        <div className="py-20 bg-three-circles bg-no-repeat">
          <Container>
            <h2 className="font-medium mb-6 text-primary">Canada</h2>
            <address className="my-6 text-center not-italic">
              <p className="font-bold">Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </address>
            <div>
              <p className="font-bold">Contact</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </Container>
        </div>
      </article>
      <article className="bg-light-gray rounded-none text-center overflow-hidden md:rounded-2xl" id="australia-location">
        <img src="/designo-website/assets/locations/desktop/image-map-australia.png" alt="A map of the area around Designo's Australian office." />
        <div className="py-20 bg-three-circles bg-no-repeat">
          <Container>
            <h2 className="font-medium mb-6 text-primary">Australia</h2>
            <address className="my-6 text-center not-italic">
              <p className="font-bold">Designo AU Office</p>
              <p>19 Balonne Street</p>
              <p>New South Wales 2443</p>
            </address>
            <div>
              <p className="font-bold">Contact</p>
              <p>P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
          </Container>
        </div>
      </article>
      <article className="bg-light-gray rounded-none text-center overflow-hidden md:rounded-2xl" id="united-kingdom-location">
        <img src="/designo-website/assets/locations/desktop/image-map-united-kingdom.png" alt="A map of the area around Designo's United Kingdom office." />
        <div className="py-20 bg-three-circles bg-no-repeat">
          <Container>
            <h2 className="font-medium mb-6 text-primary">United Kingdom</h2>
            <address className="my-6 text-center not-italic">
              <p className="font-bold">Designo UK Office</p>
              <p>13  Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>
            </address>
            <div>
              <p className="font-bold">Contact</p>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </Container>
        </div>
      </article>
    </div>
  )
}

export default LocationsPage