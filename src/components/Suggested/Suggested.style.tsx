import styled from "styled-components";

const Suggested = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;

  /* background-color: aqua; */
  .suggestedContent {
    position: absolute;
    bottom: 0%;
    margin-bottom: 50px;
    margin-left: 40px;
    h2 {
      font-size: 32px;
        font-weight: ${(props) => props.theme.fontWeightLg};
      line-height: 40px;
       
      color: ${(props) => props.theme.white};
      /* text-align: left; */
    }
    .buttonGroup {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 32px;
      margin-top: 32px;
      color: ${(props) => props.theme.white};
    }
    .details {
      font-size: 14px;
       font-weight: ${(props) => props.theme.fontWeightSm};
      line-height: 24px;
      margin-top: 8px;
       

      color: ${(props) => props.theme.gray60};
    }
    .button {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .content {
      margin-top: 12px;
    }
  }
`;
export default Suggested;
