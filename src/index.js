import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import "./tailwind.output.css";

const App = () => (
  <div className="">
    <Header />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
