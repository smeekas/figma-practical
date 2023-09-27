import Suggested from "../../components/Suggested/Suggested.style";
import { Button } from "../../components/UI/Button/Button.style";
import Card, { CardProps } from "../../components/UI/Card/Card";
import CompnayCard from "../../components/UI/CompanyCard/CompnayCard";
import SectionHeading from "../../components/UI/SectionHeading/SectionHeading.style";
import Tag from "../../components/UI/Tag/Tag.style";
import { images } from "../../config/images";
import DiscoveryStyle from "./Discovery.style";
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
];
const genres = [
  "Action",
  "Fantasy",
  "Comedy",
  "Sci-Fi",
  "Drama",
  "Romance",
  "Mystery",
  "Horror",
];
const Discovery = () => {
  return (
    <DiscoveryStyle>
      <div className="leftPage">
        <Suggested>
          <img src={images.discoveryPage.suggested} />
          <div className="suggestedContent">
            <Tag className="chip">Series</Tag>
            <div className="content">
              <h2>Ms.Marvel</h2>
              <div className="details">
                <p>
                  1 Season&nbsp;&bull;&nbsp;6
                  Episodes&nbsp;&bull;&nbsp;SuperHeroes
                </p>
              </div>
              <div className="buttonGroup">
                <Button
                  icon={<images.discoveryPage.playIcon />}
                  size="large"
                  type="primary"
                >
                  Watch Trailer
                </Button>
                <div className="button">
                  {" "}
                  <images.discoveryPage.addToPlaylist />
                  Add to Playlist
                </div>
              </div>
            </div>
          </div>
        </Suggested>
        <div className="companyList">
          <CompnayCard>
            <img src={images.companies.disney} />
          </CompnayCard>
          <CompnayCard>
            <img src={images.companies.marvel} />
          </CompnayCard>
          <CompnayCard>
            <img src={images.companies.starwars} />
          </CompnayCard>
          <CompnayCard>
            <img src={images.companies.ngc} />
          </CompnayCard>
          {/* <CompnayCard>
            <img src={images.companies.ngc} />
          </CompnayCard> */}
        </div>
        <div className="continueWatching">
          <SectionHeading>Continue Watching</SectionHeading>
          <div className="watchingList">
            <div>
              <img src={images.continueWatching.batman} />
            </div>
            <div>
              <img src={images.continueWatching.moonKnight} />
            </div>
          </div>
        </div>
      </div>
      <div className="rightPage">
        <div>
          <SectionHeading>Top Movies</SectionHeading>
          <div className="movieList">
            {data.map((movieItem) => {
              return <Card key={movieItem.name} {...movieItem} />;
            })}
            <Button size="large">See All</Button>
          </div>
        </div>
        <div>
          <SectionHeading>Favorite Genres</SectionHeading>
          <div className="favoriteGenres">
            {genres.map((genreItem) => {
              return <Tag className="chip large">{genreItem}</Tag>;
            })}
          </div>
        </div>
      </div>
    </DiscoveryStyle>
  );
};

export default Discovery;
