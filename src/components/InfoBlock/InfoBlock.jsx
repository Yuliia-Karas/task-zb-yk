// import React from 'react'
import image1 from "../../assets/images/Component 1.jpg";
import image2 from "../../assets/images/Component 2.jpg";
import image3 from "../../assets/images/Component 3.jpg";
import image4 from "../../assets/images/Component 4.jpg";

import {
  Item,
  Cards,
  Image,
  CardsHeader,
  Info,
  InfoHeader,
  Amount,
  Yield,
  Ticket,
  Days,
  Sold,
} from "./InfoBlock.styled";

export default function InfoBlock() {
  return (
    <div>
      <CardsHeader>Open Deals</CardsHeader>
      <Cards>
        <Item>
          <Image src={image1} alt="The Marina Torch"></Image>
          <InfoHeader>The Marina Torch</InfoHeader>
          <Info>
            <Amount>6 500 000 Dhs</Amount>
            <Yield>Yield 9.25%</Yield>
            <Sold>Sold 75%</Sold>
            <Ticket>Tiket - 60 000 Dhs</Ticket>
            <Days>Days left 150</Days>
          </Info>
        </Item>

        <Item>
          <Image src={image2} alt="HHHR Tower"></Image>
          <InfoHeader>HHHR Tower</InfoHeader>
          <Info>
            <Amount>6 500 000 Dhs</Amount>
            <Yield>Yield 9.25%</Yield>
            <Sold>Sold 75%</Sold>
            <Ticket>Tiket - 60 000 Dhs</Ticket>
            <Days>Days left 150 </Days>
          </Info>
        </Item>

        <Item>
          <Image src={image3} alt="Ocean peaks"></Image>
          <InfoHeader>Ocean peaks</InfoHeader>
          <Info>
            <Amount>6 500 000 Dhs</Amount>
            <Yield>Yield 9.25%</Yield>
            <Sold>Sold 75%</Sold>
            <Ticket>Tiket - 60 000 Dhs</Ticket>
            <Days>Days left 150 </Days>
          </Info>
        </Item>

        <Item>
          <Image src={image4} alt="Al Yaqoub Tower"></Image>
          <InfoHeader>Al Yaqoub Tower</InfoHeader>
          <Info>
            <Amount>6 500 000 Dhs</Amount>
            <Yield >Yield 9.25%</Yield>
            <Sold>Sold 75%</Sold>
            <Ticket>Tiket - 60 000 Dhs</Ticket>
            <Days>Days left 150 </Days>
          </Info>
        </Item>
      </Cards>
    </div>
  );
}
