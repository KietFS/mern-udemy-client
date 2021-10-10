import React from "react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import {
  AppleButton,
  FaceBookButton,
  ForgotPassword,
  GoogleButton,
  LoginButton,
  LoginFormBoard,
  LoginFormContainer,
  LoginFormLabel,
  PasswordInput,
  SignupButton,
  SignUpLinkContainer,
  SignUpLinkLabel,
  UsernameInput,
} from "./styles";
import { CartContext } from "../../../contexts/CartContext";

const LoginForm = () => {
  //Context
  const { loginUser } = useContext(AuthContext);
  const { getCarts } = useContext(CartContext);

  //Local State
  const [loginForm, setLoginForm] = useState({
    userName: "",
    password: "",
  });
  let history = useHistory();

  //Function
  const pushToHome = () => {
    history.push("/");
  };

  const { userName, password } = loginForm;

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      if (!loginData.success) {
        console.log("Bug in Login");
      }
      if (loginData.success) {
        pushToHome();
        getCarts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginFormContainer>
      <LoginFormBoard onSubmit={login}>
        <LoginFormLabel>Login to your Udemy account !</LoginFormLabel>
        <FaceBookButton>Login with FaceBook</FaceBookButton>
        <GoogleButton>Login with Google</GoogleButton>
        <AppleButton>Login with Apple</AppleButton>
        <UsernameInput
          placeholder="Username"
          type="text"
          name="userName"
          value={userName}
          required
          onChange={onChangeLoginForm}
        />
        <PasswordInput
          placeholder="Password"
          type="password"
          name="password"
          required
          value={password}
          onChange={onChangeLoginForm}
        />
        <LoginButton type="submit" value="Log in" />
        <ForgotPassword>Forgot your password ?</ForgotPassword>

        <SignUpLinkContainer>
          <SignUpLinkLabel>Don't have an account ?</SignUpLinkLabel>
          <Link to="/signup">
            <SignupButton>Sign up now !</SignupButton>
          </Link>
        </SignUpLinkContainer>
      </LoginFormBoard>
    </LoginFormContainer>
  );
};

export default LoginForm;
