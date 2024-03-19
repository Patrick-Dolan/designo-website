import Container from "../shared/Container"
import ContactForm from "./ContactForm"

function ContactCard() {
  return (
    <div className="bg-primary bg-sm-contact-hero-pattern bg-no-repeat bg-contact-card-pos py-18">
      <Container>
        <div className="text-center text-white mb-12">
          <h1 className="font-medium mb-6">Contact Us</h1>
          <p className="text-15px">Ready to take it to the next level? Let&apos;s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that&apos;s relatable to your users, drop us a line.</p>
        </div>
        <ContactForm />
      </Container>
    </div>
  )
}

export default ContactCard