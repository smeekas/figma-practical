import styled from "styled-components";

const ContinueWatchingStyle = styled.div`
  overflow: hidden;
  border-radius: 16px;
  position: relative;
  max-width: 439px;
  max-height: 247px;
  min-width: 439px;
  min-height: 247px;
  background-color: aquamarine;
  /* & > img {
    width: inherit !important;
    transition: all 0.2s;
    object-fit: fill !important;
    /* background-size: fill !important; */
  /* } */
  img {
    max-width: inherit;
    max-height: inherit;
    min-width: inherit;
    min-height: inherit;
  }
  video {
    max-width: inherit;
    max-height: inherit;
  }
  .metaData {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .metaData > svg {
    width: 48px;
    height: 48px;
    cursor: pointer;
    transition: all 0.2s;
  }
  .metaData > svg:hover {
    scale: 1.1;
  }
  .name {
    font-weight: ${(props) => props.theme.fontWeightLg};
    font-size: ${(props) => props.theme.fontSizeM};
    line-height: ${(props) => props.theme.lineHeightXs};
    color: ${(props) => props.theme.lightWhite};
    margin-top: 12px;
  }
  .year {
    font-weight: ${(props) => props.theme.fontWeightSm};
    font-size: ${(props) => props.theme.fontSizeS};
    line-height: ${(props) => props.theme.lineHeightS};
    color: ${(props) => props.theme.gray};
    margin-top: 2px;
  }
`;
export default ContinueWatchingStyle;
