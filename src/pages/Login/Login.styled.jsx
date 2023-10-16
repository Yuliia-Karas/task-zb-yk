import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.nav`
  display: flex;
  align-items:center;
  gap:100px;
`;

export const LoginHeader = styled.h2`
  color: var(--main-color);
  font-family: Merriweather;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.21;
`;

export const LoginData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap:20px;
`;

export const Label = styled.div`
  display: block;
  text-align: left;

  color: var(--black-text);
  font-family: Merriweather;
  font-size: 14px;
  font-weight: 700;
  line-height: 2.43;
`;
export const Input = styled.input`
  width: 350px;
  padding: 14px 20px 12px 20px;
  justify-content: center;
  align-items: center;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
  border: 2px solid var(--background-title-color);
  background-color: var(--background-title-color);
`;

export const GoldText = styled(NavLink)`
  color: var(--accent-color);
  font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.58;
`;

export const ForgotPassword = styled(GoldText)`
  margin-left: auto; 
`;

export const SignInBtn = styled.button`
  width: 350px;
  height: 44px;
  flex-shrink: 0;
  border: none;
  border-radius: 5px;
  background: var(--accent-color);

  color: var(--white-color);
  text-align: center;

  font-family: Merriweather;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;
`;

export const BlackText = styled.p`
  color: var(--main-color);
  text-align: center;
  font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.58;
`;

export const CenterBlock = styled(BlackText)`
  margin:0 auto; 
`;