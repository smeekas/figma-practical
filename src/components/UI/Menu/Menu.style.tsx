import { Menu as AntdMenu } from "antd";
import styled from "styled-components";

const Menu = styled(AntdMenu)`
  width: 100%;
  background-color: ${(props) => props.theme.gray10} !important;

  padding-top: 46px;
  height: 100%;
  .ant-menu-submenu-title {
    background-color: ${(props) => props.theme.gray10};
    padding-left: 32px !important;
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.005em;
    color: ${(props) => props.theme.disabledTextColor};
    text-transform: uppercase;
    text-align: left;
    &:hover {
      background-color: ${(props) => props.theme.gray10} !important;
      color: ${(props) => props.theme.disabledTextColor} !important;
    }
  }
  .ant-menu-submenu-selected > .ant-menu-submenu-title {
    color: ${(props) => props.theme.disabledTextColor} !important;
  }
  .ant-menu-inline,
  .ant-menu-submenu {
    background-color: ${(props) => props.theme.gray10} !important;
  }
  .ant-menu-item {
    background-color: ${(props) => props.theme.gray10} !important;
    padding-left: 28px !important;
    font-size: 16px;
    margin-top: 16px !important;
    margin-bottom: 16px !important;

    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.005em;
    text-align: left;
    color: ${(props) => props.theme.gray70};
    margin: 0;
    gap: 12px;
    border-radius: 0px;
    position: relative;

    &.ant-menu-item-selected,
    &.ant-menu-submenu-active {
      color: ${(props) => props.theme.gray100};
    }
    &.ant-menu-item-selected::before,
    &.ant-menu-submenu-active::before {
      content: "";
      width: 3px;
      height: 100%;
      position: absolute;
      background-color: ${(props) => props.theme.primary};
      left: 1%;
    }
    &.ant-menu-item-selected > svg,
    &.ant-menu-submenu-active > svg {
      stroke: ${(props) => props.theme.primary};
      stroke-width: 1px;
      transition: all 0.1s;
    }
    .ant-menu-title-content > div {
      display: flex !important;
      /* justify-content: space-between; */
      align-items: center;
      gap: 28px;
    }
  }
`;

export default Menu;
