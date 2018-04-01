import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"

const ErrorMessage = (props) => {
  const errorClass = cn("error-message", props.variantClass)
  return <div className={errorClass}> {props.message} </div>
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
  variantClass: PropTypes.string
}

export default ErrorMessage
