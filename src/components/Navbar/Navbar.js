import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("../../images/face2.webp")} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
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
