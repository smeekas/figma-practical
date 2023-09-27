import styled from "styled-components";

const SectionHeading = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.005em;
  margin-bottom: 24px;
  ${(props) => props.theme.gray100}
`;
export default SectionHeading;
