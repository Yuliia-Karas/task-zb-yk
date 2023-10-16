import { useRef } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
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
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  const dispatch = useDispatch();

  const handleLogin = () => {
    const email = loginEmailRef.current.value;
    const password = loginPasswordRef.current.value;
    dispatch(logIn({ email, password }));
  };

    return (
      <LoginContainer>
        <img src={image5} alt="Login image"></img>
        <LoginData>
          <LoginHeader>Login</LoginHeader>
          <Label>
            Email
            <Input ref={loginEmailRef} type="email" placeholder="Email" />
          </Label>

          <Label>
            Password
            <Input
              ref={loginPasswordRef}
              type="password"
              placeholder="Password"
            />
          </Label>
          <ForgotPassword>Forgot password?</ForgotPassword>
          <SignInBtn onClick={handleLogin}>Sign In</SignInBtn>

          <CenterBlock>
            Don’t have account? <GoldText to="/signup">Sign Up</GoldText>
          </CenterBlock>
        </LoginData>
      </LoginContainer>
    );
}
