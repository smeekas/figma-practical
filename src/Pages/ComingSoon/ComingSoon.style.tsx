import styled from "styled-components";

const ComingSoonStyle = styled.div`
  padding: 32px;
  /* overflow: hidden; */
  /* padding-left: 32px; */
  & > div:nth-child(2) {
    margin-top: 40px;
  }
  .comingsoonList {
    /* display: flex;
    flex-direction: row; */
    gap: 24px;
  }
  .movieList {
    gap: 16px;
  }
`;
export default ComingSoonStyle;
