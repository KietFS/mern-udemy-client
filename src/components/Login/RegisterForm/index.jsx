import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  RegisterFormContainer,
  RegisterFormBoard,
  UsernameInput,
  PasswordInput,
  RegisterFormCheckbox,
  CheckboxContainer,
  RegisterButton,
  PrivacyAlert,
  LoginLinkContainer,
  LoginLinkLabel,
  LoginLinkButton,
  RegisterFormLabel,
} from "./styles";
import { AuthContext } from "../../../contexts/AuthContext";
import { useHistory } from "react-router";

const RegisterForm = () => {
  //Context
  const { registerUser } = useContext(AuthContext);

  //Function
  let history = useHistory();

  //Function

  const pushToHome = () => {
    history.push("/");
  };

  //Local state
  const [registerForm, setRegisterForm] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const { userName, password, confirmPassword } = registerForm;

  const onChangeRegisterForm = (event) => {
    setRegisterForm({
      ...registerForm,
      [event.target.name]: event.target.value,
    });
  };

  const register = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Your confirm password is invalid");
    }

    try {
      const registerData = await registerUser(registerForm);
      if (registerData.success) {
        pushToHome();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <RegisterFormContainer onSubmit={register}>
      <RegisterFormBoard>
        <RegisterFormLabel>Sign up and Start Learning !!</RegisterFormLabel>
        <UsernameInput
          placeholder="Your username"
          type="text"
          name="userName"
          required
          value={userName}
          onChange={onChangeRegisterForm}
        />
        <PasswordInput
          placeholder="Your password"
          type="password"
          name="password"
          required
          value={password}
          onChange={onChangeRegisterForm}
        />
        <PasswordInput
          placeholder="Confirm password"
          type="password"
          name="confirmPassword"
          required
          value={confirmPassword}
          onChange={onChangeRegisterForm}
        />

        <CheckboxContainer>
          <RegisterFormCheckbox type="checkbox" />
          <p>
            Yes! I want to get the most out of Udemy by receiving emails with
            exclusive deals, personal recommendations and learning tips!
          </p>
        </CheckboxContainer>
        <RegisterButton value="Sign up" type="submit" />

        <PrivacyAlert>
          By signing up, you agree to our Terms of Use and Privacy Policy.
        </PrivacyAlert>

        <LoginLinkContainer>
          <LoginLinkLabel>Already have an account? </LoginLinkLabel>
          <Link to="login">
            <LoginLinkButton>Log in</LoginLinkButton>
          </Link>
        </LoginLinkContainer>
      </RegisterFormBoard>
    </RegisterFormContainer>
  );
};

export default RegisterForm;
