import CardStyle from "./Card.style";
import { images } from "../../../config/images";
import Tag from "../Tag/Tag.style";
export type CardProps = {
  image: string;
  name: string;
  tag: string[];
  rating: number;
};
function Card(props: CardProps) {
  return (
    <CardStyle>
      <img src={props.image} alt={props.name} />
      <div className="cardDetail">
        <Tag>PG-13</Tag>
        <h3>{props.name}</h3>
        <div className="genre">
          <images.card.cinema />
          Drama
        </div>
        <div className="rating">
          <images.card.rating />
          {props.rating}
        </div>
      </div>
    </CardStyle>
  );
}

export default Card;
