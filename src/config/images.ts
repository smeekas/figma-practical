import Search from "../assets/search.tsx";
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
import disneyL from "../assets/companyLogos/disneyLight.png";
import disneyD from "../assets/companyLogos/disneyDark.png";
import ngcL from "../assets/companyLogos/ngcLight.png";
import ngcD from "../assets/companyLogos/ngcDark.png";

import starwarsL from "../assets/companyLogos/starwarsLight.png";
import starwarsD from "../assets/companyLogos/starwarsDark.png";

import marvel from "../assets/companyLogos/marvel.png";

import batman from "../assets/continueWatching/batman.png";
import moonKnight from "../assets/continueWatching/moonknight.png";
import manFromToronto from "../assets/movieCard/manFromToronto.png";
import extraction from "../assets/movieCard/extraction.png";
import godzilla from "../assets/movieCard/godzilla.png";
import jumanji from "../assets/movieCard/jumanji.png";
import avatar2 from "../assets/comingSoon/avatar2.png";
import Pause from "../assets/comingSoon/Pause";
import check from "../assets/SubCard/check.tsx";
import yaksha from "../assets/movieCard/yaksha.png";
import mechanic from "../assets/movieCard/mechanic.png";
import pirates from "../assets/movieCard/pirates.png";
import underground from "../assets/movieCard/underground.png";

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
    marvel: marvel,
    disneyL: disneyL,
    ngcL: ngcL,
    starwarsL: starwarsL,
    disneyD: disneyD,
    ngcD: ngcD,
    starwarsD: starwarsD,
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
    yaksha,
    mechanic,
    pirates,
    underground,
  },
  comingSoon: {
    avatar2: avatar2,
    pause: Pause,
  },
  subCard: {
    Check: check,
  },
};
