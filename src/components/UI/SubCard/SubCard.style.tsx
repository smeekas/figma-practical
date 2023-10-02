import { theme } from "antd";
import styled from "styled-components";

const SubCardStyle = styled.div`
  padding: 40px;
  display: flex;
  gap: 32px;
  background-color: ${(props) => props.theme.gray10};
  border-radius: 24px;
  flex-direction: column;
  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.005em;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 19px;
    padding-right: 40px;
    flex-direction: column;
    padding-top: 32px;
    border-top: 1px solid red;
  }
  li {
    display: flex;
    flex-direction: row;
    gap: 12px;

    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: ${(props) => props.theme.gray100};
    letter-spacing: 0.005em;
  }
  .cardContent {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export default SubCardStyle;
