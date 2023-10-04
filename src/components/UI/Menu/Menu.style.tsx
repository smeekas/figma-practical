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
    font-size: ${(props) => props.theme.fontSizeM};
    font-weight: ${(props) => props.theme.fontWeightSm};
    line-height: 24px;

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
  .ant-menu-item-active {
    color: ${(props) => props.theme.gray100} !important;
  }
  &.Dark .ant-menu-item {
    color: ${(props) => props.theme.gray40};
  }
  &.Default .ant-menu-item {
    color: ${(props) => props.theme.gray70};
  }
  .ant-menu-item {
    background-color: ${(props) => props.theme.gray10} !important;
    padding-left: 28px !important;
    font-size: ${(props) => props.theme.fontSizeM};
    margin-top: 16px !important;
    margin-bottom: 16px !important;
    margin-inline-start: 0 !important;
    font-weight: ${(props) => props.theme.fontWeightMd};
    line-height: 24px;

    text-align: left;
    /* color: ${(props) => props.theme.gray40}; */
    /* margin: 0; */
    gap: 12px;
    border-radius: 0px;
    position: relative;

    &.ant-menu-item-selected,
    &.ant-menu-submenu-active {
      color: ${(props) => props.theme.gray100} !important;
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

    .ant-menu-title-content {
      margin-inline-start: 0 !important;
    }

    .ant-menu-title-content > div {
      display: flex !important;
      /* justify-content: space-between; */
      color: ${(props) => props.theme.gray70};
      align-items: center;
      gap: 28px;
    }
  }
`;

export default Menu;
