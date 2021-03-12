import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import StoreContext from "../Store/Context";
import UIButton from "../UI/Button/Button";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "../Navbar/NavbarElements";
import background from "../../images/slz.jpg";

import "./login.css";

function initialState() {
  return {
    user: null,
    email: null,
    rg: null,
    cpf: null,
    cro: null,
    endereco: null,
    telefone: null,
    password: null,
    passwordCheck: null
  };
}

function add({
  user,
  email,
  rg,
  cpf,
  cro,
  endereco,
  telefone,
  password,
  passwordCheck
}) {
  if (
    user !== null &&
    email !== null &&
    rg !== null &&
    cpf !== null &&
    cro !== null &&
    endereco !== null &&
    telefone !== null &&
    password !== null &&
    passwordCheck !== null
  ) {
    if (password === passwordCheck) {
      return { token: "1234" };
    }
    return {
      error: "os campos de senha e de confirmação de senha tem que ser iguais!"
    };
  }
  return { error: "Todos campos devem ser corretamente preenchidos!" };
}

const AddUser = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = add(values);

    if (token) {
      setToken(token);
      return history.push("/");
    }

    setError(error);
  }

  return (
    <div
      className="landing-wrapper-add"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="user-login">
        <h1 className="user-login__title">
          <NavLink to="/">
            <img src={require("../../images/face2.webp")} alt="logo" />
          </NavLink>
        </h1>
        <form onSubmit={onSubmit}>
          <div className="user-login__form-control">
            <label htmlFor="user">Nome</label>
            <input
              id="user"
              type="text"
              name="user"
              onChange={onChange}
              value={values.user}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="user">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              onChange={onChange}
              value={values.email}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="user">RG</label>
            <input
              id="rg"
              type="text"
              name="rg"
              onChange={onChange}
              value={values.rg}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="user">CPF</label>
            <input
              id="cpf"
              type="text"
              name="cpf"
              onChange={onChange}
              value={values.cpf}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="user">CRO/MA</label>
            <input
              id="cro"
              type="text"
              name="cro"
              onChange={onChange}
              value={values.cro}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="user">Endereço</label>
            <input
              id="endereco"
              type="text"
              name="endereco"
              onChange={onChange}
              value={values.endereco}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="user">Telefone</label>
            <input
              id="telefone"
              type="text"
              name="telefone"
              onChange={onChange}
              value={values.telefone}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={onChange}
              value={values.password}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="password">Confirmar Senha</label>
            <input
              id="passwordCheck"
              type="password"
              name="passwordCheck"
              onChange={onChange}
              value={values.passwordCheck}
            />
          </div>
          {error && <div className="user-login__error">{error}</div>}
          <UIButton
            type="submit"
            theme="contained-green"
            className="user-login__submit-button"
            rounded
          >
            Confirmar
          </UIButton>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
