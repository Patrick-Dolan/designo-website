import { useNavigate } from "react-router-dom";
import Button from "./Button"

// TODO make navigation buttons go to anchor tags on location page once its been created
function LocationLinks() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-12">
      <div>
        <div className={`bg-home-circle-pattern bg-no-repeat bg-center mb-12 transform rotate-90`}>
          <img className="transform -rotate-90" src="/designo-website/shared/desktop/illustration-canada.svg" alt="An illustration of Canada's skyline." />
        </div>
        <h3 className="uppercase font-medium tracking-super-wide text-center mt-12 mb-8">Canada</h3>
        <div className="text-center">
          <Button text="See Location" type="button" onClick={() => navigate("/designo-website/locations")} />
        </div>
      </div>
      <div>
        <div className={`bg-home-circle-pattern bg-no-repeat bg-center mb-12`}>
          <img src="/designo-website/shared/desktop/illustration-australia.svg" alt="An illustration representing Australia." />
        </div>
        <h3 className="uppercase font-medium tracking-super-wide text-center mt-12 mb-8">Australia</h3>
        <div className="text-center">
          <Button text="See Location" type="button" onClick={() => navigate("/designo-website/locations")} />
        </div>
      </div>
      <div>
        <div className={`bg-home-circle-pattern bg-no-repeat bg-center mb-12 transform -rotate-90`}>
          <img className="transform rotate-90" src="/designo-website/shared/desktop/illustration-united-kingdom.svg" alt="An illustration representing the United kingdom." />
        </div>
        <h3 className="uppercase font-medium tracking-super-wide text-center mt-12 mb-8">United kingdom</h3>
        <div className="text-center">
          <Button text="See Location" type="button" onClick={() => navigate("/designo-website/locations")} />
        </div>
      </div>
    </div>
  )
}

export default LocationLinks