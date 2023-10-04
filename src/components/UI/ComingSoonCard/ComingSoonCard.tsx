import ComingSoonCardStyle from "./ComingSoonCard.style";
import Tag from "../Tag/Tag.style";
import { images } from "../../../config/images";
export type ComingSoonCardProps = {
  name: string;
  date: Date;
  img: string;
};
function ComingSoonCard(props: ComingSoonCardProps) {
  console.log(props);
  return (
    <ComingSoonCardStyle>
      <img src={props.img} />
      <div className="movieContent">
        <Tag className="chip large transparent white">Coming Soon</Tag>
        <p className="title">{props.name}</p>
        <p className="date">{props.date.toISOString()}</p>
        <div className="trailer">
          <images.comingSoon.pause />
          Watch Trailer
        </div>
      </div>
    </ComingSoonCardStyle>
  );
}

export default ComingSoonCard;
