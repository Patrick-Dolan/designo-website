import PropTypes from 'prop-types'

function Container({ children }) {
  return (
    <div className="px-6">
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container