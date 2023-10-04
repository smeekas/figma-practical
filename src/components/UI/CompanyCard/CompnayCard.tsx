import styled from "styled-components";

const CompnayCard = styled.div`
  /* width: Fixed (177px) */
  /* height: Fixed (88px) */
  padding: 14px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 16px 32px 16px 32px; */
  max-width: 177px;
  max-height: 84px;
  min-height: 84px;
  min-width: 177px;
  border-radius: 16px;
  border: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.gray30};
  /* gap: 24px; */
`;
export default CompnayCard;
