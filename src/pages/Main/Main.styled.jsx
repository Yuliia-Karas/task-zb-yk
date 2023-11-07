import styled from "styled-components";

import backgroundImg from "../../assets/images/background.jpg";

export const MainContainer = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  max-width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;

  @media (min-width: 768px) {
    height: 93vh;
  }

  @media (min-width: 1024px) {
    padding: 0 80px;
    height: 1024px;
  }
`;

export const Content = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1440px) {
    height: 1024px;
    width: 1085px;
  }
`;

export const Header = styled.h1`
  color: var(--white-color);
  text-align: center;
  font-family: Merriweather;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 10px;
  margin-top: 10px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (min-width: 834px) {
    font-size: 50px;
  }

  @media (min-width: 1440px) {
    font-size: 64px;
  }
`;

export const Text = styled.p`
  color: var(--white-color);
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  line-height: 1.33;
  letter-spacing: -0.48px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;

  @media (min-width: 834px) {
    font-size: 24px;
  }

  @media (min-width: 1440px) {
    padding: 0 128px;
  }
`;

export const MainBtn = styled.button`
  color: var(--white-color);

  font-family: Merriweather;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.7;

  padding: 10px 24px;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid var(--white-color);
  margin-top: 0px;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    margin-top: 30px;
  }
`;
