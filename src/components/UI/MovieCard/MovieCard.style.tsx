import styled from "styled-components";

const MovieCardStyle = styled.div`
  display: flex;
  width: ${(props) => props.theme.cardWidth};
  flex-direction: column;
  gap: 12px;
  .movieName {
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.005em;
  }
  .movieRating {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.005em;
  }
  .movieRatingAndType {
    margin-top: 12px;
    display: flex;
    gap: 4px;
    align-items: center;
  }
  .movieMeta {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.005em;
    color: ${(props) => props.theme.gray70};
  }
`;
export default MovieCardStyle;
