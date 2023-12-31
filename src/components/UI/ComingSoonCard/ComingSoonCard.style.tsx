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
    font-size: ${(props) => props.theme.fontSizeL};
      font-weight: ${(props) => props.theme.fontWeightLg};
    line-height: 40px;
     
    margin-top: 12px;
  }
  .date {
    color: ${(props) => props.theme.gray60};
    font-size: ${(props) => props.theme.fontSizeXs};
     font-weight: ${(props) => props.theme.fontWeightSm};
    margin-top: 8px;
  }
  .trailer {
    margin-top: 24px;
    font-size: ${(props) => props.theme.fontSizeM};
     font-weight: ${(props) => props.theme.fontWeightMd};
    line-height: 24px;
     
    display: flex;
    align-items: center;
    gap: 8px;
    /* color: ${(props) => props.theme.gray10}; */
  }
`;
export default ComingSoonCardStyle;
