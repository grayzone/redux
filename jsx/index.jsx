import React from "react";
import ReactDOM from "react-dom";

var homeDIV = document.getElementById("home");
if (homeDIV != null) {
  ReactDOM.render(<p>Hello World!</p>, homeDIV);
}