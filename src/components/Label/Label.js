import React from "react";
import PropTypes from "prop-types";

/** Label with required field display, htmlFor, and block styling and dot optionsssssddddd */
function Label({ htmlFor, label, required, requiredDotColor }) {
  return (
    <label style={{ display: "block" }} htmlFor={htmlFor}>
      {label}
      {required && <span style={{ color: requiredDotColor }}> *</span>}
    </label>
  );
}

Label.propTypes = {
  /** HTML ID for associated input */
  htmlFor: PropTypes.string.isRequired,

  /** Label text */
  label: PropTypes.string.isRequired,

  /** Display asterisk after label if true */
  required: PropTypes.bool,

  /** Color for required dot */
  requiredDotColor: PropTypes.string
};

Label.defaultProps = {
  required: false,
  requiredDotColor: "red"
};

export default Label;
