import styled from "styled-components";

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100vw;
  @media (min-width: 768px) {
    width: 630px;
    height: 400px;
    padding-bottom: 20px;
  }
`;

export const CardsHeader = styled.h2`
  color: var(--accent-color);
  font-family: Merriweather;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.21;
  margin-top: 50px;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 1440px) {
    margin-left: 80px;
    text-align: left;
  }
`;

export const Info = styled.div`
  position: absolute;
  bottom: 10px;
  left: 26px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;

  @media (min-width: 768px) {
    bottom: 34px;
    top: 310px;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px 120px;
  }
`;

export const Item = styled.div`
  position: relative;
  display: inline-block;
`;

export const InfoHeader = styled.div`
  color: var(--white-color);
  font-size: 20px;
  font-weight: 700;
  line-height: 1.7;
  text-align: left;

  position: absolute;
  left: 26px;
  bottom: 134px;

  @media (min-width: 768px) {
    top: 270px;
    bottom: 0px;
  }
`;

export const Amount = styled.p`
  color: var(--white-color);
  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22;
`;
export const Yield = styled.p`
  color: var(--white-color);
  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22;

  @media (min-width: 768px) {
    margin-left: 28px;
  }
`;

export const Ticket = styled.p`
  color: var(--white-color);
  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22;
`;

export const Days = styled.p`
  color: var(--white-color);
  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22;
`;

export const Sold = styled.p`
  color: var(--white-color);
  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22;
`;
