import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Fabric extends Component {
  static propTypes = {
    className: PropTypes.string
  };
  static defaultProps = {};

  render() {
    const { className, fabric, children } = this.props;

    const fabricClasses = classNames("u-fabric", className, {
      "u-fabric--primary": fabric === "primary",
      "u-fabric--secondary": fabric === "secondary"
    });
    return <div className={fabricClasses}>{children}</div>;
  }
}
