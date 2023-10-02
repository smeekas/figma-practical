import styled from "styled-components";
const ComingSoonCardStyle = styled.div`
  color: ${(props) => props.theme.white};
  position: relative;
  .movieContent {
    position: absolute;
    top: 50%;
    padding-left: 48px;
    transform: translate(0, -50%);
  }
  img {
    width: 644px;
    height: 366px;
  }
  .title {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0.005em;
    margin-top: 12px;
  }
  .date {
    color: ${(props) => props.theme.gray60};
    font-size: 14px;
    font-weight: 500;
    margin-top: 8px;
  }
  .trailer {
    margin-top: 24px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.005em;
    display: flex;
    align-items: center;
    gap: 8px;
    /* color: ${(props) => props.theme.gray10}; */
  }
`;
export default ComingSoonCardStyle;
