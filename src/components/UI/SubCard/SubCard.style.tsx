import styled from "styled-components";

const SubCardStyle = styled.div`
  padding: 40px;
  display: flex;
  gap: 32px;
  background-color: ${(props) => props.theme.gray10};
  color: ${(props) => props.theme.gray100};
  border: 1px solid ${(props) => props.theme.gray30};
  .cardTitle {
    p {
      margin-top: 12px;
       font-weight: ${(props) => props.theme.fontWeightMd};
      color: ${(props) => props.theme.gray60};
    }
    span {
      font-size: 40px;
      color: ${(props) => props.theme.gray100};
    }
  }
  &.recommend {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
    .svgCircle {
      fill: ${(props) => props.theme.gray10};
    }
    .svgCheck {
      stroke: ${(props) => props.theme.white};
    }
    .cardTitle {
      p {
        color: ${((props) => props.theme.lightPrimary)};
      }
      span {
        color: ${(props) => props.theme.white};
      }
    }
  }

  border-radius: 24px;
  flex-direction: column;
  h3 {
    font-size: 20px;
     font-weight: ${(props) => props.theme.fontWeightSm};
    line-height: 28px;
     
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 19px;
    padding-right: 40px;
    flex-direction: column;
    padding-top: 32px;
    border-top: 1px solid ${(props) => props.theme.gray30};
  }
  li {
    display: flex;
    flex-direction: row;
    gap: 12px;

    font-size: 16px;
     font-weight: ${(props) => props.theme.fontWeightSm};
    line-height: 24px;
    color: ${(props) => props.theme.gray100};
     
  }
  li.disabled {
    color: ${(props) => props.theme.gray40};
  }
  &.recommend li {
    color: ${(props) => props.theme.white};
  }
  .cardContent {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export default SubCardStyle;
