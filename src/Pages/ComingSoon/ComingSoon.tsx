import React from "react";
import ComingSoonStyle from "./ComingSoon.style";
import SectionHeading from "../../components/UI/SectionHeading/SectionHeading.style";
import ComingSoonCard, {
  ComingSoonCardProps,
} from "../../components/UI/ComingSoonCard/ComingSoonCard";
import { images } from "../../config/images";
import MovieCard, {
  MovieCardProps,
} from "../../components/UI/MovieCard/MovieCard";

const data: ComingSoonCardProps[] = [
  {
    name: "Avatar 2",
    date: new Date(),
    img: images.comingSoon.avatar2,
  },
  {
    name: "Avatar 2",
    date: new Date(),
    img: images.continueWatching.batman,
  },
];
const movieData: MovieCardProps[] = [
  {
    image: images.movieCard.manFromToronto,
    name: "The Man from Toronto",
    rating: 4.6,
    type: "Movie",
    genre: "Action",
  },
  {
    image: images.movieCard.extraction,
    name: "extraction",
    rating: 4.6,
    type: "Movie",
    genre: "Action",
  },
  {
    image: images.movieCard.godzilla,
    name: "godzilla: King of the Monsters",
    rating: 4.6,
    type: "Movie",
    genre: "Action",
  },
  {
    image: images.movieCard.jumanji,
    name: "jumanji: The Next Level",
    rating: 4.6,
    type: "Movie",
    genre: "Action",
  },
  {
    image: images.movieCard.jumanji,
    name: "jumanji: The Next Level",
    rating: 4.6,
    type: "Movie",
    genre: "Action",
  },
  {
    image: images.movieCard.jumanji,
    name: "jumanji: The Next Level",
    rating: 4.6,
    type: "Movie",
    genre: "Action",
  },
  {
    image: images.movieCard.jumanji,
    name: "jumanji: The Next Level",
    rating: 4.6,
    type: "Movie",
    genre: "Action",
  },
  {
    image: images.movieCard.jumanji,
    name: "jumanji: The Next Level",
    rating: 4.6,
    type: "Movie",
    genre: "Action",
  },
  {
    image: images.movieCard.jumanji,
    name: "jumanji: The Next Level",
    rating: 4.6,
    type: "Movie",
    genre: "Action",
  },
  {
    image: images.movieCard.jumanji,
    name: "jumanji: The Next Level",
    rating: 4.6,
    type: "Movie",
    genre: "Action",
  },
  // {
  //   image: images.movieCard.extraction,
  //   name: "extraction",
  //   rating: 4.6,
  //   type: "Movie",
  //   genre: "Action",
  // },
];
function ComingSoon() {
  return (
    <ComingSoonStyle>
      <div>
        <SectionHeading>Coming Soon</SectionHeading>
        <div className="comingsoonList">
          {React.Children.toArray(
            data.map((movieItem) => {
              return <ComingSoonCard {...movieItem} />;
            })
          )}
        </div>
      </div>
      <div>
        <SectionHeading>On 2022</SectionHeading>
        <div className="movieList">
          {movieData.map((movieItem) => {
            return <MovieCard {...movieItem} key={movieItem.name} />;
          })}
        </div>
      </div>
    </ComingSoonStyle>
  );
}

export default ComingSoon;
