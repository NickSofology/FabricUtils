import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Fabric extends Component {
  static propTypes = {
    className: PropTypes.string,
    interactive: PropTypes.boolean
  };
  static defaultProps = {
    interactive: false
  };

  render() {
    const { className, fabric, children, interactive } = this.props;

    const fabricClasses = classNames("u-fabric", className, {
      "u-fabric--primary": fabric === "primary",
      "u-fabric--secondary": fabric === "secondary",
      "u-fabric--interactive": interactive
    });
    return <div className={fabricClasses}>{children}</div>;
  }
}
