import ContinueWatching from "../../components/ContinueWatching/ContinueWatching";
import Suggested from "../../components/Suggested/Suggested.style";
import { Button } from "../../components/UI/Button/Button.style";
import Card, { CardProps } from "../../components/UI/Card/Card";
import CompnayCard from "../../components/UI/CompanyCard/CompnayCard";
import CorouselList from "../../components/UI/CorouselList/CorouselList";
import CorouselListContainer from "../../components/UI/CorouselListContainer/CorouselListContainer.style";
import SectionHeading from "../../components/UI/SectionHeading/SectionHeading.style";
import Tag from "../../components/UI/Tag/Tag.style";
import { images } from "../../config/images";
import { useColorMode } from "../../providers/ColorMode";
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
const companyList = [
  {
    light: images.companies.disneyL,
    dark: images.companies.disneyD,
  },
  {
    light: images.companies.ngcL,
    dark: images.companies.ngcD,
  },
  {
    light: images.companies.starwarsL,
    dark: images.companies.starwarsD,
  },
  {
    light: images.companies.marvel,
    dark: images.companies.marvel,
  },
  {
    light: images.companies.starwarsL,
    dark: images.companies.starwarsD,
  },
  {
    light: images.companies.starwarsL,
    dark: images.companies.starwarsD,
  },
  {
    light: images.companies.marvel,
    dark: images.companies.marvel,
  },
];
const Discovery = () => {
  const mode = useColorMode();
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
        <CorouselListContainer>
          <CorouselList scrollBtn className="companyList">
            {companyList.map((companyItem) => {
              return (
                <CompnayCard>
                  <img
                    src={
                      mode.mode == "Default"
                        ? companyItem.light
                        : companyItem.dark
                    }
                  />
                </CompnayCard>
              );
            })}
          </CorouselList>
        </CorouselListContainer>

        <div className="continueWatching">
          <SectionHeading>Continue Watching</SectionHeading>
          <CorouselListContainer>
            <CorouselList scrollBtn className="watchingList">
              <ContinueWatching
                image={images.continueWatching.batman}
                year={2022}
                name="Batman"
              />
              <ContinueWatching
                image={images.continueWatching.moonKnight}
                year={2022}
                name="Moon Knight"
              />
              <ContinueWatching
                image={images.continueWatching.moonKnight}
                year={2022}
                name="Moon Knight"
              />
              {/* <ContinueWatching
              image={images.continueWatching.moonKnight}
              year={2022}
              name="Moon Knight"
            /> */}
            </CorouselList>
          </CorouselListContainer>
        </div>
      </div>
      <div className="rightPage">
        <div>
          <SectionHeading>Top Movies</SectionHeading>
          {/* <div> */}
          <div className="movieList">
            {data.map((movieItem) => {
              return <Card key={movieItem.name} {...movieItem} />;
            })}
            <Button size="large">See All</Button>
            {/* </div> */}
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
