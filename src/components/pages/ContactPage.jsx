import ContactCard from "../contact/ContactCard"
import Container from "../shared/Container"
import LocationLinks from "../shared/LocationLinks"

function ContactPage() {
  return (
    <>
      <ContactCard />
      <Container className="px-6 md:px-10">
        <div className="mt-30">
          <LocationLinks />
        </div>
      </Container>
    </>
  )
}

export default ContactPage