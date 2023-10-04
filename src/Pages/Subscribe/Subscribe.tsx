import SubscribeStyle from "./Subscribe.style";
import SubCard from "../../components/UI/SubCard/SubCard";
import { useColorMode } from "../../providers/ColorMode";

function Subscribe() {
  const mode = useColorMode();
  return (
    <SubscribeStyle>
      <div>
        <button className={`premium ${mode.mode}`}>Access Premium</button>
        <p className="title">It's Easy to get started</p>
        <p className="description">
          choose the best plan to enjoy the best movies and series
        </p>
      </div>
      <div className="prices">
        <SubCard disabledIndex={[2, 3]} name="Free Trial" price={0} />
        <SubCard
          recommend
          disabledIndex={[]}
          name="Monthly Subscription"
          price={0}
        />
        <SubCard disabledIndex={[]} name="Yearly Subscription" price={0} />
      </div>
    </SubscribeStyle>
  );
}

export default Subscribe;
