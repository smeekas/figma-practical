import React from "react";
import TopRatedStyle from "./TopRated.style";
import SectionHeading from "../../components/UI/SectionHeading/SectionHeading.style";
import Card, { CardProps } from "../../components/UI/Card/Card";
import { images } from "../../config/images";
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
      </div>
    </TopRatedStyle>
  );
}

export default TopRated;
