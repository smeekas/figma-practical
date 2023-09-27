import styled from "styled-components";

const TopRatedStyle = styled.div`
  padding: 32px;
  background-color: beige;
  .topRatedList {
    display: flex;
    flex-direction: row;
    gap: 25px;
  }
  .topRatedCard {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
  .topRatedCard p {
    font-size: 56px;
    font-weight: 600;
    line-height: 64px;
    letter-spacing: 0.005em;
  }
`;

export default TopRatedStyle;
