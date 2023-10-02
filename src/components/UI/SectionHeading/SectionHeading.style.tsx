import styled from "styled-components";

const SectionHeading = styled.p`
  font-size: 20px;
    font-weight: ${(props) => props.theme.fontWeightLg};
  line-height: 28px;
   
  margin-bottom: 24px;
  color: ${(props) => props.theme.gray100};
`;
export default SectionHeading;
