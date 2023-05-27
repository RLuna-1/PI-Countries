import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import styles from "./Button.module.css"

function Button({ className, onClick, children, to, disabled, type }) {
  if (to) {
    return (
      <Link to={to}>
        <button
          className={`${styles.basic} ${className}`}
          onClick={onClick}
          disabled={disabled}
          type={type}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      className={`${styles.basic} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(["button","submit","reset","checkbox","radio", "range", "image", "color"])
}

Button.defaultProps = {
  type: "button",
};

export default Button;
