import styled from "styled-components";

const DiscoveryStyle = styled.div`
  display: grid;
  /* width: 90%; */
  margin: 0 auto;
  grid-template-columns: 70fr 40fr;
  margin-top: 32px;
  /* margin-left: 32px; */
  .leftPage {
    display: flex;
    padding-left: 32px;
    padding-right: 32px;

    background-color: beige;
    flex-direction: column;
  }
  .companyList {
    display: flex;
    flex-direction: row;
    gap: 24px;
    max-width: inherit;
    /* background-color: aqua; */
    overflow-x: scroll;
    overflow-y: hidden;
    margin-top: 32px;
  }
  .rightPage {
    display: flex;
    flex-direction: column;
    align-items: start;
    /* border: 1px solid red; */
    gap: 32px;
    margin-left: 32px;
  }
  .movieList {
    display: flex;
    /* margin-top: 24px; */
    flex-direction: column;
    gap: 24px;
    /* border: 3px solid gold; */
  }
  .movieList button {
    align-self: flex-start;
  }
  .favoriteGenres {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
  .continueWatching {
    margin-top: 28px;
  }
  .watchingList {
    display: flex;
    gap: 24px;
    flex-direction: row;
  }
  .watchingList > div {
    overflow: hidden;
    border-radius: 16px;
  }
  .watchingList > div > img {
    transition: all 0.2s;
    cursor: pointer;
  }
  .watchingList > div > img:hover {
    scale: 1.1;
  }
`;
export default DiscoveryStyle;
