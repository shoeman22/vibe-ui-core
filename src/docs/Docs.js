/* eslint no-undef: 0 */
import React from "react";
import Navigation from "./Navigation";
import ComponentPage from "./ComponentPage";
import componentData from "../../config/componentData";

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({ route: window.location.hash.substr(1) });
    });
  }

  render() {
    const { route } = this.state;
    const component = route
      ? componentData.filter(
          componentFilter => componentFilter.name === route
        )[0]
      : componentData[0];

    return (
      <div>
        <Navigation
          components={componentData.map(
            componentFilter => componentFilter.name
          )}
        />
        <ComponentPage component={component} />
      </div>
    );
  }
}
