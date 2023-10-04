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
import CorouselList from "../../components/UI/CorouselList/CorouselList";
import CorouselListContainer from "../../components/UI/CorouselListContainer/CorouselListContainer.style";

const data: ComingSoonCardProps[] = [
  {
    name: "Avatar 2",
    date: new Date(),
    img: images.comingSoon.avatar2,
  },
  {
    name: "Moon Knight",
    date: new Date(),
    img: images.continueWatching.moonKnight,
  },
  {
    name: "The Batman",
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
    image: images.movieCard.underground,
    name: "6 Underground",
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
    image: images.movieCard.mechanic,
    name: "Mechanic: Resurrection",
    rating: 4.6,
    type: "Movie",
    genre: "Action",
  },
];
function ComingSoon() {
  return (
    <ComingSoonStyle>
      <div>
        <SectionHeading>Coming Soon</SectionHeading>
        <CorouselListContainer>
          <CorouselList scrollBtn className="comingsoonList">
            {React.Children.toArray(
              data.map((movieItem) => {
                return <ComingSoonCard {...movieItem} />;
              })
            )}
          </CorouselList>
        </CorouselListContainer>
      </div>
      <div>
        <SectionHeading>On 2022</SectionHeading>
        <CorouselListContainer>
          {/* <button className="navButton left">left</button>
          <button className="navButton right" onClick={onRightClick}>
            right
          </button> */}

          <CorouselList scrollBtn className="movieList">
            {movieData.map((movieItem) => {
              return <MovieCard {...movieItem} key={movieItem.name} />;
            })}
          </CorouselList>
        </CorouselListContainer>
      </div>
    </ComingSoonStyle>
  );
}

export default ComingSoon;
