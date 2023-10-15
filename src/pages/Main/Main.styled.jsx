import styled from "styled-components";

import backgroundImg from "../../assets/images/background.jpg";

export const MainContainer = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  height: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;

export const Header = styled.h1`
  color: var(--white-color);
  text-align: center;
  font-family: Merriweather;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.25;
`;

export const Text = styled.p`
  color: var(--white-color);
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  line-height: 1.33;
  letter-spacing: -0.48px;
  width: 822px;
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
  margin-top: 30px;
`;
