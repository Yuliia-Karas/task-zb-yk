import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import image5 from "../../assets/images/Component5.jpg";
import {
  LoginContainer,
  LoginHeader,
  LoginData,
  Label,
  Input,
  GoldText,
  SignInBtn,
  ForgotPassword,
  CenterBlock,
} from "../Login/Login.styled";

export default function SignUp() {
  const [pageType, setPageType] = useState("register");
  const registerEmailRef = useRef();
  const registerPasswordRef = useRef();
  const registerNameRef = useRef();

  const dispatch = useDispatch();

  const handleSignup = () => {
    const email = registerEmailRef.current.value;
    const password = registerPasswordRef.current.value;
    const name = registerNameRef.current.value;
    dispatch(register({ email, password, name }));
  };

  if (pageType === "register")
    return (
      <LoginContainer>
        <img src={image5} alt="Login image"></img>
        <LoginData>
          <LoginHeader>Sign Up</LoginHeader>
          <Label>
            Name
            <Input
              ref={registerNameRef}
              type="text"
              placeholder="Enter your name"
            />
          </Label>
          <Label>
            Email
            <Input ref={registerEmailRef} type="email" placeholder="Email" />
          </Label>
          <Label>
            Password
            <Input
              ref={registerPasswordRef}
              type="password"
              placeholder="Password"
            />
          </Label>
          <ForgotPassword>Enter your password</ForgotPassword>
          <SignInBtn onClick={handleSignup}>Sign Up</SignInBtn>

          <CenterBlock>
            Do you already have account?{" "}
            <GoldText onClick={() => setPageType("login")}>Sign In</GoldText>
          </CenterBlock>
        </LoginData>
      </LoginContainer>
    );
}
