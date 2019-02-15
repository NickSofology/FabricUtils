import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

import Fabric from "./components/Fabric";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <h1>Hello Fabric</h1>

      <Fabric
        fabric="primary"
        className="u-padding-bottom-huge u-margin-bottom"
        interactive
      >
        Fabric Primary, Padding Bottom Huge
      </Fabric>
      <Fabric fabric="secondary" className="u-margin-bottom">
        Fabric Secondary
      </Fabric>

      <Button fabric="secondary" className="u-padding">
        Button Secondary Padding
      </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
