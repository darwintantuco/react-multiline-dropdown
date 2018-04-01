import React from "react"
import PropTypes from "prop-types"

const ErrorMessage = (props) => {
  const errorClass = "error-message"
  return <div className={errorClass}> {props.message} </div>
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
}

export default ErrorMessage
