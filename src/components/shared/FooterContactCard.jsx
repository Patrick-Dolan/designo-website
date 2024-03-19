import { useNavigate } from "react-router-dom"
import Button from "./Button"
import CardTemplate from "./CardTemplate"
import Container from "./Container"

function FooterContactCard() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/designo-website/contact");
  }

  return (
    <div className="relative mt-30">
      <div className="bg-black h-[53%] absolute w-full -bottom-[1px] md:-bottom-[2px] md:h-[30%]"></div>
      <Container className="px-6 md:px-10">
        <CardTemplate className="relative mb-2 bg-contact-card-pattern bg-footer-contact-card-pos bg-no-repeat py-16 md:py-15 md:bg-md-footer-contact-card-pos">
          <div className="text-white flex flex-col gap-8 md:px-15">
            <h2 className="text-center font-medium md:text-10 md:max-w-84 md:mx-auto">Let&apos;s talk about your project.</h2>
            <p className="text-center text-sm md:text-base">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            <div className="flex justify-center">
              <Button text="Get in touch" type="button" onClick={handleContactClick} variant="secondary" />
            </div>
          </div>
        </CardTemplate>
      </Container>
    </div>
  )
}

export default FooterContactCard