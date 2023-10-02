import React from "react";
import SubCardStyle from "./SubCard.style";
import { images } from "../../../config/images";
import { Button } from "../Button/Button.style";
const optionsForCard = [
  "Streaming in high quality",
  "With the best audio quality",
  "Stream on multiple devices",
  "Ad-free viewing experience",
  "Download to watch later",
];

type SubCardProps = {
  price: number;
  disabledIndex: number[];
  name: string;
};
function SubCard(props: SubCardProps) {
  return (
    <SubCardStyle>
      <div>
        <h3>{props.name}</h3>
        <p>${props.price}/month</p>
      </div>
      <div className="cardContent">
        <ul>
          {optionsForCard.map((option, index) => {
            return (
              <li
                className={`${
                  !props.disabledIndex.includes(index) ? "active" : ""
                }`}
              >
                <images.subCard.Check />
                {option}
              </li>
            );
          })}
        </ul>
        <Button className="transparent" size="large">
          Get Started
        </Button>
      </div>
    </SubCardStyle>
  );
}

export default SubCard;
