// import React from 'react'
import image1 from '../../assets/images/Component-11.jpg'
import image2 from "../../assets/images/Component-21.jpg";
import image3 from "../../assets/images/Component-31.jpg";
import image4 from "../../assets/images/Component-41.jpg";

import { Cards, Image, CardsHeader } from "./InfoBlock.styled";




export default function InfoBlock() {
  return (
    <div>
      <CardsHeader>Open Deals</CardsHeader>
      <Cards>
        <li>
          <Image src={image1} alt="The Marina Torch"></Image>
        </li>
        <li>
          <Image src={image2} alt="HHHR Tower"></Image>
        </li>
        <li>
          <Image src={image3} alt="Ocean peaks"></Image>
        </li>
        <li>
          <Image src={image4} alt="Al Yaqoub Tower"></Image>
        </li>
      </Cards>
    </div>
  );
}
