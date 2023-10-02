import styled from "styled-components";

export const SideItemHeading = styled.p`
  font-size: 16px;
   font-weight: ${(props) => props.theme.fontWeightSm};
  line-height: 24px;
   
  text-align: left;
  color: ${(props) => props.theme.gray60};
  text-transform: uppercase;
`;
