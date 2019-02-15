import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    interactive: PropTypes.boolean
    // border: PropTypes.boolean,
    // soft: PropTypes.boolean
  };
  static defaultProps = {
    interactive: true
    // border: false,
    // soft: false
  };

  render() {
    const { className, fabric, children, interactive } = this.props;

    const fabricClasses = classNames("c-btn", className, {
      "u-fabric--primary": fabric === "primary",
      "u-fabric--secondary": fabric === "secondary",
      "u-fabric--interactive": interactive
    });
    return <button className={fabricClasses}>{children}</button>;
  }
}
