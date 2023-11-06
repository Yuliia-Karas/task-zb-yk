import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/index";
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
  Image,
} from "./Login.styled";

export default function Login() {
  const { isAuthError } = useAuth();

  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    dispatch(logIn({ email, password }));
  };

  return (
    <LoginContainer>
      <Image src={image5} alt="Login image"></Image>
      <LoginData>
        <LoginHeader>Login</LoginHeader>
        <Label>
          Email
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Label>

        <ForgotPassword>Forgot password?</ForgotPassword>

        {isAuthError && <div>email or password is wrong</div>}
        <SignInBtn onClick={handleLogin}>Sign In</SignInBtn>

        <CenterBlock>
          Don’t have account? <GoldText to="/signup">Sign Up</GoldText>
        </CenterBlock>
      </LoginData>
    </LoginContainer>
  );
}
