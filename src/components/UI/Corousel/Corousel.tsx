import React, { ReactComponentElement, useState } from "react";
import CorouselStyle from "./Corousel.style";
interface CorouselProps<T> {
  items: T[];
  Component: ReactComponentElement;
}
function Corousel<T>(props: CorouselProps<T>) {
  console.log(props.items);
  const [active, setActive] = useState(0);
  const handlePrev = () => {
    setActive((prevIndex) =>
      prevIndex === 0 ? props.items.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setActive((prevIndex) =>
      prevIndex === props.items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <CorouselStyle>
      <button onClick={handlePrev} className="prev">
        prev
      </button>
      <button onClick={handleNext} className="next">
        next
      </button>
      <div className="coroItems">
        {props.items.map((itemData, index) => {
          return (
            <div className={`caroItem ${index === active ? "active" : ""}`}>
              <props.Component {...itemData}></props.Component>
            </div>
          );
        })}
      </div>
    </CorouselStyle>
  );
}

export default Corousel;
