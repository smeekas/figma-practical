import Search from "../assets/Search";
import arrowDown from "../assets/arrow";
import clock from "../assets/clock";
import discovery from "../assets/discover";
import documentDownload from "../assets/document-download";
import moon from "../assets/moon";
import notification from "../assets/notification";
import setting from "../assets/setting";
import start from "../assets/star";
import timer from "../assets/timer";
import redemption from "../assets/redemption.png";
import godfather from "../assets/godfather.jpg";
import darkknight from "../assets/darkKnight.jpg";
import film from "../assets/film";
import rating from "../assets/rating";
import suggested from "../assets/suggested.png";
import playIcon from "../assets/playIcon";
import addToPlaylist from "../assets/addToPlaylist";
// import { iconHoc } from "../assets/iconHoc";
import disney from "../assets/companyLogos/disney.png";
import marvel from "../assets/companyLogos/marvel.png";
import ngc from "../assets/companyLogos/ngc.png";
import starwars from "../assets/companyLogos/starwars.png";
import batman from "../assets/continueWatching/batman.png";
import moonKnight from "../assets/continueWatching/moonknight.png";
import manFromToronto from "../assets/movieCard/manFromToronto.png";
import extraction from "../assets/movieCard/extraction.png";
import godzilla from "../assets/movieCard/godzilla.png";
import jumanji from "../assets/movieCard/jumanji.png";

export const images = {
  menu: {
    discovery: discovery,
    star: start,
    timer: timer,
    clock: clock,
    download: documentDownload,
    moon: moon,
    setting: setting,
  },
  nav: {
    search: Search,
    notification: notification,
    arrowDown: arrowDown,
  },
  topMovies: {
    redemption,
    godfather,
    darkknight,
  },
  card: {
    cinema: film,
    rating: rating,
  },
  discoveryPage: {
    suggested: suggested,
    playIcon: playIcon,
    addToPlaylist: addToPlaylist,
  },
  companies: {
    disney: disney,
    marvel: marvel,
    ngc: ngc,
    starwars: starwars,
  },
  continueWatching: {
    batman: batman,
    moonKnight: moonKnight,
  },
  movieCard: {
    manFromToronto,
    extraction,
    godzilla,
    jumanji,
  },
};
