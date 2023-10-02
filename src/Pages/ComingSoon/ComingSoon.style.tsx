import styled from "styled-components";

const ComingSoonStyle = styled.div`
  padding-top: 32px;
  padding-left: 32px;
  & > div:nth-child(2) {
    margin-top: 40px;
  }
  .comingsoonList {
    display: flex;
    flex-direction: row;
    gap: 24px;
  }
  .movieList {
    display: flex;
    flex-direction: row;
    gap: 16px;
    overflow-x: scroll;
    width: 1200px;
  }
`;
export default ComingSoonStyle;
