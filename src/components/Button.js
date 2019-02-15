import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default class Button extends Component {
  static propTypes = {
    className: PropTypes.string
    // border: PropTypes.boolean,
    // soft: PropTypes.boolean
  };
  static defaultProps = {
    // border: false,
    // soft: false
  };

  render() {
    const { className, fabric, children } = this.props;

    const fabricClasses = classNames("c-btn", className, {
      "u-fabric--primary": fabric === "primary",
      "u-fabric--secondary": fabric === "secondary"
    });
    return <button className={fabricClasses}>{children}</button>;
  }
}
