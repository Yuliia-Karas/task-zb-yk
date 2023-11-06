import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    gap: 24px;
  }

  @media (min-width: 1024px) {
    align-items: center;
    flex-direction: row;
    gap: 50px;
  }

  @media (min-width: 1440px) {
    align-items: center;
    flex-direction: row;
    gap: 100px;
  }
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
  gap: 20px;
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
  width: 300px;
  padding: 14px 20px 12px 20px;
  justify-content: center;
  align-items: center;
  display: block;
  border-radius: 5px;
  border: 2px solid var(--background-title-color);
  background-color: var(--background-title-color);

  @media (min-width: 1024px) {
    width: 350px;
  }
`;

export const GoldText = styled(NavLink)`
  color: var(--accent-color);
  font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.58;
`;

export const ForgotPassword = styled(GoldText)`
  margin-left: 190px;
`;

export const SignInBtn = styled.button`
  width: 300px;
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

  @media (min-width: 1024px) {
    width: 350px;
  }
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
 margin-left:80px;
 @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const Image = styled.img`
  @media (min-width: 768px) {
    max-width: 56%;
  }
  @media (min-width: 1440px) {
    max-width: 890px;
    height: 943px;
  }
`;
