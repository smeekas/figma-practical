import styled from "styled-components";

export const SideItemStyle = styled.p`
  font-size: 16px;
   font-weight: ${(props) => props.theme.fontWeightMd};
  line-height: 24px;
   
  color: ${(props) => props.theme.gray70};
  &.active {
    color: ${(props) => props.theme.gray100};
  }
`;
