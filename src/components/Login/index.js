import React from "react";
import "./styles.scss";

export default function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <div className="login__inputContainer">
        <div className="inputContainer__label">Username</div>
        <input autoFocus tabIndex="1" className="input" type="text" />
      </div>
      <div className="login__inputContainer">
        <div className="inputContainer__label">Password</div>
        <input tabIndex="2" className="inputContainer__input" type="password" />
      </div>
      <button tabIndex="3" type="button" className="login__button">Submit</button>
    </div>
  );
}
