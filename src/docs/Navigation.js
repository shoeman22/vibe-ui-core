import React from "react";
import PropTypes from "prop-types";

const Navigation = ({ components }) => (
  <ul className="navigation">
    {components.map(name => (
      <li key={name}>
        <a href={`#${name}`}>{name}</a>
      </li>
    ))}
  </ul>
);

Navigation.propTypes = {
  components: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Navigation;
