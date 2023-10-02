import { Button as ButtonStyle } from "antd";
import styled from "styled-components";

export const Button = styled(ButtonStyle)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none !important;
  &,
  &:hover {
    outline: none;
  }
  &.ant-btn-sm {
    padding: 4px 16px 4px 16px;
  }
  &.ant-btn-default {
    padding: 12px 24px 12px 24px;
  }
  &.ant-btn-lg {
    padding: 16px 32px 16px 32px;
  }
  &.transparent {
    background-color: transparent;
  }
  &.recommend {
    border-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.white};
  }
  &.recommend:hover {
    background-color: ${(props) => props.theme.white} !important;
    color: ${(props) => props.theme.primary} !important;
  }
`;
