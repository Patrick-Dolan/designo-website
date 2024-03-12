import Container from "./Container"
import PropTypes from "prop-types"

function CardTemplate({ children, className = ""}) {
  return (
    <div className={`py-16 bg-primary rounded-2xl ${className}`}>
      <Container>
        {children}
      </Container>
    </div>
  )
}

CardTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default CardTemplate