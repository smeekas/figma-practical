import styled from "styled-components";

const SubscribeStyle = styled.div`
  /* padding: 32px; */
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background-color: ${(props) => props.theme.gray10}; */
  /* .recommend {
    background-color: ${(props) => props.theme.primary};
  } */
  gap: 63px;
  .premium {
    background-color: ${(props) => props.theme.alert};
    color: ${(props) => props.theme.gray100};
    border-radius: 16px;
    padding: 8px 16px;
    font-size: ${(props) => props.theme.fontSizeXs};
     font-weight: ${(props) => props.theme.fontWeightSm};
    line-height: 24px;
    border: none;
     
    align-self: center;
    &.Dark {
      color: ${(props) => props.theme.alert};
      background-color: ${(props) => props.theme.gray10};
    }
  }
  & > div {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-direction: column;
  }
  .title {
    font-size: ${(props) => props.theme.fontSizeXl};
     font-weight: ${(props) => props.theme.fontWeightSm};
    line-height: 48px;
     
    color: ${(props) => props.theme.gray100};
  }

  .description {
    font-size: ${(props) => props.theme.fontSizeM};
    width: 300px;
    align-self: center;
    text-align: center;
     font-weight: ${(props) => props.theme.fontWeightSm};
    line-height: 24px;
     
    color: ${(props) => props.theme.gray70};
  }

  .prices {
    /* background-color: antiquewhite; */
    display: flex;
    flex-direction: row;
    gap: 32px;
  }
`;
export default SubscribeStyle;
