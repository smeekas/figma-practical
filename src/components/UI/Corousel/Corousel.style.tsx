import styled from "styled-components";

const CorouselStyle = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  .coroItems {
    display: flex;
    width: 100%;
    height: 100%;
    gap: 24px;
    transition: transform 0.5s ease;
  }

  .coroItem {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    outline: none;
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
`;

export default CorouselStyle;
