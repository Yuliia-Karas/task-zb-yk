import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  padding: 14px 40px;
  background-color: var(--main-color);

  @media (min-width: 834px) {
    padding: 18px 60px;
  }

  @media (min-width: 1440px) {
    padding: 24px 80px;
  }
`;

export const ButtonContainer = styled.nav`
  display: flex;
  gap:10px;
  
`;
export const Logo = styled(NavLink)`
  color: var(--white-color);
  font-family: Merriweather;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.21;

  background: var(--main-color);
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.06),
    0px 2px 10px 0px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;


export const LogInBtn = styled.button`
  color: var(--accent-color);
  text-align: center;

  font-family: Merriweather;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;

  width: 80px;
  padding: 11px 0px;
  border-radius: 5px;
  border: 1px solid var(--accent-color);

  @media (min-width: 768px) {
    width: 120px;
  }

  @media (min-width: 834px) {
    width: 160px;
  }
`;

export const SignUpBtn = styled.button`
  color: var(--white-color);
  text-align: center;

  font-family: Merriweather;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;

  width: 80px;
  padding: 11px 0px;
  border-radius: 5px;
  background: var(--accent-color);

  @media (min-width: 768px) {
    width: 120px;
  }

  @media (min-width: 834px) {
    width: 160px;
  }
`;