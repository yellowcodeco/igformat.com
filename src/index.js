// Imports
// ---------------------------------------------------
import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./components/App";

// Styles
import GlobalStyles from "./styles/GlobalStyles";

// Render
// ---------------------------------------------------
ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
