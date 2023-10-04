import styled from "styled-components";

const CorouselListStyle = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  max-width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  /* background-color: aliceblue; */
  .coroBtn {
    position: absolute;
    z-index: 111;
    top: 50%;
    transform: translateY(-50%);
    /* transform: translate(50%, 0%); */
  }
  .leftBtn {
    left: -16px;
  }
  .rightBtn {
    right: -16px;
  }
`;

export default CorouselListStyle;
