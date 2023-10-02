import styled from "styled-components";

const CardStyle = styled.div`
  display: grid;
  width: 274px;
  height: fit-content;
  border-radius: 16px;
  /* background-color: #003d3d; */
  gap: 16px;
  grid-template-columns: 43fr 56fr;
  .cardDetail {
    display: flex;
    flex-direction: column;
    gap: 12px;
    white-space: nowrap;
    overflow: hidden;
  }
  /* .ant-tag{
    background-color
  } */
  h3 {
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    overflow: hidden;
    font-size: ${(props) => props.theme.fontSizeM};
      font-weight: ${(props) => props.theme.fontWeightLg};
    color: ${(props) => props.theme.gray100};

    line-height: 24px;
     
  }
  .genre {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.gray70};
    font-size: ${(props) => props.theme.fontSizeS};
     font-weight: ${(props) => props.theme.fontWeightSm};
    line-height: 20px;
     
    text-overflow: ellipsis;
    gap: 4px;
  }
  .rating {
    display: flex;
    align-items: center;
    gap: 4px;

    color: ${(props) => props.theme.gray100};
  }
`;

export default CardStyle;
