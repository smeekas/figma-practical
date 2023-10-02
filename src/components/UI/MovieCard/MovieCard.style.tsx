import styled from "styled-components";

const MovieCardStyle = styled.div`
  display: flex;
  width: ${(props) => props.theme.cardWidth};
  flex-direction: column;
  gap: 12px;
  color: ${(props) => props.theme.gray100};
  .movieName {
    font-size: ${(props) => props.theme.fontSizeM};
      font-weight: ${(props) => props.theme.fontWeightLg};
    line-height: 24px;
     
  }
  .movieRating {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    font-size: ${(props) => props.theme.fontSizeS};
     font-weight: ${(props) => props.theme.fontWeightMd};
    line-height: 20px;
     
  }
  .movieRatingAndType {
    margin-top: 12px;
    display: flex;
    gap: 4px;
    align-items: center;
  }
  .movieMeta {
    font-size: ${(props) => props.theme.fontSizeS};
     font-weight: ${(props) => props.theme.fontWeightSm};
    line-height: 20px;
     
    color: ${(props) => props.theme.gray70};
  }
`;
export default MovieCardStyle;
