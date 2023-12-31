import styled from "styled-components";

const TopRatedStyle = styled.div`
  padding: 32px;
  /* background-color: beige; */
  & > div:nth-child(2) {
    margin-top: 40px;
  }
  /* overflow: hidden; */
  /* width: 100%;
  max-width: 100%; */
  .movieList {
    /* display: flex;
    flex-direction: row; */
    gap: 24px;
    /* overflow-x: scroll; */
    /* max-width: 100%; */
    margin-bottom: 16px;
  }
  .flexList {
    overflow: hidden;
    max-width: 100%;
  }
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
    font-size: ${(props) => props.theme.fontSizeXxl};
    font-weight: ${(props) => props.theme.fontWeightMd};
    line-height: 64px;
    color: ${(props) => props.theme.gray100};
  }
`;

export default TopRatedStyle;
