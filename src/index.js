import React from "react";
import ReactDOM from "react-dom";

import { CHeader } from "@coreui/react";

//Pages
import Users from "./pages/user";

import "./index.scss";

ReactDOM.render(
  <>
    <CHeader style={{ minHeight: 20, padding: "0.5rem 1rem" }} fixed={false}>
      <h1 style={{ fontSize: 24, fontWeight: "bold" }}>REACT JS - TEST</h1>
    </CHeader>
    <Users />
  </>,
  document.getElementById("root")
);
