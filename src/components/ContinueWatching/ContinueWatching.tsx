import  { useState } from "react";
import ContinueWatchingStyle from "./ContinueWatching.style";
import { images } from "../../config/images";
import videoSrc from "../../assets/video.mp4";
type ContinueWatchingProps = {
  image: string;
  year: number;
  name: string;
};
function ContinueWatching(props: ContinueWatchingProps) {
  const [watch, setWatch] = useState(false);
  return (
    <ContinueWatchingStyle>
      {!watch && (
        <>
          <img src={props.image} />
          <div className="metaData">
            <images.comingSoon.pause onClick={() => setWatch(true)} />
            <p className="name">{props.name}</p>
            <p className="year">{props.year}</p>
          </div>
        </>
      )}
      {watch && <video src={videoSrc} controls/>}
    </ContinueWatchingStyle>
  );
}

export default ContinueWatching;
