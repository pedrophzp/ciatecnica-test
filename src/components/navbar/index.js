import React from "react";
import { CNavbar, CNavbarBrand, CNavbarNav, CNavLink } from "@coreui/react";

import { CIcon } from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

import "./index.scss";

const Navbar = (props) => {
  return (
    <CNavbar className={"container-navbar"}>
      <div>
        <CNavbarBrand>Navigation</CNavbarBrand>
        <CIcon
          size={"xl"}
          style={{ color: "white", marginRight: "2rem", cursor: "pointer" }}
          content={freeSet.cilHamburgerMenu}
        />
      </div>
      <CNavbarNav>
        <CNavLink style={{ color: "white", marginLeft: "1rem" }}>Users</CNavLink>
      </CNavbarNav>
      {props.baseUrl && (
        <CNavbarNav className="ml-auto container-navigation">
          <CIcon
            size={"sm"}
            style={{ color: "white" }}
            content={freeSet.cilHome}
          />
          <CNavLink
            style={{
              color: "white",
              paddingLeft: "0.5rem",
              paddingRight: "0.2rem",
            }}
          >{`/ ${props.baseUrl}`}</CNavLink>
          {props.screen && (
            <CNavLink
              style={{ color: "white", paddingLeft: 0 }}
            >{`/ ${props.screen}`}</CNavLink>
          )}
        </CNavbarNav>
      )}
    </CNavbar>
  );
};

export default Navbar;
