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
  recommend?: boolean;
};
function SubCard(props: SubCardProps) {
  return (
    <SubCardStyle className={props.recommend ? "recommend" : ""}>
      <div className="cardTitle">
        <h3>{props.name}</h3>
        <p>
          <span>${props.price}</span>/month
        </p>
      </div>
      <div className="cardContent">
        <ul>
          {optionsForCard.map((option, index) => {
            return (
              <li
                className={`${
                  props.disabledIndex.includes(index) ? "disabled" : ""
                }`}
              >
                <images.subCard.Check />
                {option}
              </li>
            );
          })}
        </ul>
        <Button
          // type={props.recommend ? "text" : ""}
          className={`transparent ${props.recommend ? "recommend" : ""} `}
          size="large"
        >
          Get Started
        </Button>
      </div>
    </SubCardStyle>
  );
}

export default SubCard;
