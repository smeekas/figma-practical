import React, { useRef } from "react";
import CorouselListStyle from "./CorouselListStyle.style";
import CorouselButton from "./CorouselButton.style";

function CorouselList(props: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  scrollBtn?: boolean;
}) {
  const movieListRef = useRef<HTMLDivElement>(null);
  const onRightClick = () => {
    if (movieListRef.current) movieListRef.current.scrollLeft += 200;
  };
  const onLeftClick = () => {
    if (movieListRef.current) movieListRef.current.scrollLeft -= 200;
  };
  return (
    <CorouselListStyle ref={movieListRef} className={props.className}>
      {props.scrollBtn && (
        <>
          {" "}
          <CorouselButton className="leftBtn coroBtn" onClick={onLeftClick}>
            &lt;
          </CorouselButton>
          <CorouselButton className="rightBtn coroBtn" onClick={onRightClick}>
            &gt;
          </CorouselButton>
        </>
      )}
      {props.children}
    </CorouselListStyle>
  );
}

export default CorouselList;
