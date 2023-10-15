import styled from "styled-components";

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
`;

export const Image = styled.img`
  width:630px;
  height:400px;
`;

export const CardsHeader = styled.h2`
  color: var(--accent-color);
  font-family: Merriweather;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.21;
  margin-top:50px;
  margin-bottom:20px;
  margin-left:50px;
  text-align: left;
`;