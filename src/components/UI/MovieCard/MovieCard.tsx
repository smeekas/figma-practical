import React from "react";
import MovieCardStyle from "./MovieCard.style";
import { images } from "../../../config/images";
export type MovieCardProps = {
  image: string;
  name: string;
  rating: number;
  type: string;
  genre: string;
};
function MovieCard(props: MovieCardProps) {
  return (
    <MovieCardStyle>
      <img src={props.image} />
      <div className="movieContent">
        <p className="movieName">{props.name}</p>
        <div className="movieRatingAndType">
          <div className="movieRating">
            <images.card.rating />
            {props.rating}
          </div>
          <span className="movieMeta">
            {props.genre}&nbsp;&bull;&nbsp;{props.type}
          </span>
        </div>
      </div>
    </MovieCardStyle>
  );
}

export default MovieCard;
