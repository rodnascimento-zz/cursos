import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";
import ReactWhatsapp from "react-whatsapp";
import * as FaIcons from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("../../images/face2.webp")} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <ReactWhatsapp
            number="+5598984053835"
            message="Hello World!!!"
            style={{
              background: "rgba(52, 52, 52, 0.01)",
              border: "none",
              fontSize: "16px",
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "black",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              padding: "0 1rem",
              height: "100%",
              cursor: "pointer",
              justifyContent: "space-between",
              //padding: 0.5rem calc((100vw - 1000px) / 2);
              zIndex: "10"
            }}
          >
            Whatsapp
          </ReactWhatsapp>

          <NavLink to="/cursos" activeStyle>
            Matricule-se
          </NavLink>
          <NavBtnLink to="/login">Aluno</NavBtnLink>
          <NavBtnLink to="/login" style={{ backgroundColor: `green` }}>
            Professor
          </NavBtnLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/*<NavBtn>
          <NavBtnLink to="/login">Aluno</NavBtnLink>
          <NavBtnLink to="/login" style={{ backgroundColor: `green` }}>
            Professor
          </NavBtnLink>
        </NavBtn>*/}
      </Nav>
    </>
  );
}
