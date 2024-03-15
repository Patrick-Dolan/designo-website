import ContactCard from "../contact/ContactCard"
import Container from "../shared/Container"
import LocationLinks from "../shared/LocationLinks"

function ContactPage() {
  return (
    <>
      <ContactCard />
      <Container>
        <div className="mt-30">
          <LocationLinks />
        </div>
      </Container>
    </>
  )
}

export default ContactPage