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
          <NavLink to="/about" activeStyle>
            Sobre
          </NavLink>
          <NavLink to="/services" activeStyle>
            Serviços
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contato
          </NavLink>
          <NavLink to="/add" activeStyle>
            Cadastro
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">Entrar</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
