import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

import Fabric from "./components/Fabric";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <h1>Hello Fabric</h1>

      <Fabric fabric="primary" className="u-padding-bottom-huge">
        Fabric Primary, Padding Bottom Huge
      </Fabric>
      <Fabric fabric="secondary">Fabric Secondary</Fabric>

      <Button fabric="secondary" className="u-padding-huge">
        Button Secondary Padding Huge
      </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
