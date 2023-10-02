import React from "react";
import SubscribeStyle from "./Subscribe.style";
import SubCard from "../../components/UI/SubCard/SubCard";

function Subscribe() {
  return (
    <SubscribeStyle>
      <div>
        <button className="premium">Access Premium</button>
        <p className="title">It's Easy to get started</p>
        <p className="description">
          choose the best plan to enjoy the best movies and series
        </p>
      </div>
      <div className="prices">
        <SubCard disabledIndex={[2, 3]} name="Free Trial" price={0} />
        <SubCard disabledIndex={[2, 3]} name="Free Trial" price={0} />
      </div>
    </SubscribeStyle>
  );
}

export default Subscribe;
