import React from "react";
import TopRatedStyle from "./TopRated.style";
import SectionHeading from "../../components/UI/SectionHeading/SectionHeading.style";
import Card, { CardProps } from "../../components/UI/Card/Card";
import { images } from "../../config/images";
import MovieCard, {
  MovieCardProps,
} from "../../components/UI/MovieCard/MovieCard";
import CorouselListContainer from "../../components/UI/CorouselListContainer/CorouselListContainer.style";
import CorouselList from "../../components/UI/CorouselList/CorouselList";
const data: CardProps[] = [
  {
    image: images.topMovies.redemption,
    name: "The Shawshank Redemption",
    rating: 9.8,
    tag: ["Drama"],
  },
  {
    image: images.topMovies.godfather,
    name: "The Godfather",
    rating: 9.2,
    tag: ["Crime"],
  },
  {
    image: images.topMovies.darkknight,
    name: "The Dark Knight Rises",
    rating: 9.0,
    tag: ["Action"],
  },
  {
    image: images.topMovies.darkknight,
    name: "The Dark Knight Rises",
    rating: 9.0,
    tag: ["Action"],
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
    image: images.movieCard.yaksha,
    name: "Yaksha: Ruthless Operations",
    genre: "Movie",
    type: "Action",
    rating: 4.6,
  },
  {
    image: images.movieCard.pirates,
    name: "The Pirates: The Last Royal",
    genre: "Movie",
    type: "Action",
    rating: 4.6,
  },
];

const secondMovieData: MovieCardProps[] = [
  {
    image: images.movieCard.yaksha,
    name: "Yaksha: Ruthless Operations",
    genre: "Movie",
    type: "Action",
    rating: 4.6,
  },
  {
    image: images.movieCard.mechanic,
    name: "Mechanic: Resurrection ",
    genre: "Movie",
    type: "Action",
    rating: 4.6,
  },
  {
    image: images.movieCard.pirates,
    name: "The Pirates: The Last Royal",
    genre: "Movie",
    type: "Action",
    rating: 4.6,
  },
  {
    image: images.movieCard.underground,
    name: "6 Underground",
    genre: "Movie",
    type: "Action",
    rating: 4.6,
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
];
function TopRated() {
  return (
    <TopRatedStyle>
      <div>
        <SectionHeading>Top Rated</SectionHeading>
        <div className="topRatedList">
          {data.map((movieItem, index) => {
            return (
              <div className="topRatedCard">
                <p>{index + 1}</p>
                <Card {...movieItem} key={movieItem.name} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <SectionHeading>Best of Action</SectionHeading>
        <CorouselListContainer>
          <CorouselList scrollBtn className="movieList">
            {movieData.map((movieItem) => {
              return <MovieCard {...movieItem} key={movieItem.name} />;
            })}
          </CorouselList>
        </CorouselListContainer>
        <CorouselListContainer>
          <CorouselList scrollBtn className="movieList">
            {secondMovieData.map((movieItem) => {
              return <MovieCard {...movieItem} key={movieItem.name} />;
            })}
          </CorouselList>
        </CorouselListContainer>
      </div>
    </TopRatedStyle>
  );
}

export default TopRated;
