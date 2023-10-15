import { useState } from "react";

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
} from "./Login.styled";

export default function Login() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleButtonClick = () => {
   
    console.log("Значення input1:", inputValue1);
    console.log("Значення input2:", inputValue2);
  };
  return (
    <LoginContainer>
      <img src={image5} alt="Login image"></img>
      <LoginData>
        <LoginHeader>Login</LoginHeader>
        <Label>
          Email
          <Input
            type="text"
            placeholder="Email"
            value={inputValue1}
            onChange={handleInputChange1}
          />
        </Label>
        <Label>
          Password
          <Input
            type="text"
            placeholder="Password"
            value={inputValue2}
            onChange={handleInputChange2}
          />
        </Label>
        <ForgotPassword>Forgot password?</ForgotPassword>
        <SignInBtn onClick={handleButtonClick}>Sign In</SignInBtn>

        <CenterBlock>
          Don’t have account? <GoldText>Sign Up</GoldText>
        </CenterBlock>
      </LoginData>
    </LoginContainer>
  );
}
