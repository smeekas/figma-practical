import { Tag as AntTag } from "antd";
import styled from "styled-components";

const Tag = styled(AntTag)`
  border-color: ${(props) => props.theme.gray30};
  color: ${(props) => props.theme.gray70};
  border-radius: 8px;
  align-self: flex-start;
  &.chip {
    padding: 8px 16px 8px 16px;
    border-radius: 16px;
    border: none;
    gap: 8px;
    background-color: #fdfdfd14;
    font-size: 12px;
     font-weight: ${(props) => props.theme.fontWeightSm};
    line-height: 20px;
     
    /* text-align: left; */
  }
  &.large {
    background-color: ${(props) => props.theme.gray10};
    color: ${(props) => props.theme.gray100};
    border-radius: 16px;
    font-size: 14px;
     font-weight: ${(props) => props.theme.fontWeightMd};
    line-height: 24px;
     
    /* text-align: left; */
  }
  &.transparent {
    background-color: #fdfdfd14;
    color: ${(props) => props.theme.gray10};
  }
  &.white {
    color: ${(props) => props.theme.white};
  }
`;

export default Tag;
