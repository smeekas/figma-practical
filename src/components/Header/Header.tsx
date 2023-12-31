import { useState } from "react";
import HeaderStyle from "./Header.style";
import { images } from "../../config/images";
import { Badge, Button, Input } from "antd";
import Avatar from "../UI/Avatar/Avatar.style";
import useHeaderChange from "../../hook/useHeaderChange";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  const subscribeHeader = useHeaderChange();
  return (
    <HeaderStyle className={subscribeHeader ? "subscribe" : ""}>
      {!subscribeHeader ? (
        <>
          {" "}
          <div className="leftNavigation">
            <h1>CineMax</h1>
            <nav>
              <p>Movies</p>
              <p>Series</p>
              <p>Animation</p>
              <p>Genres</p>
            </nav>
          </div>
          <div className="rightNavigation">
            {search && <Input onBlur={() => setSearch(false)} />}
            <images.nav.search onClick={() => setSearch((prev) => !prev)} />
            <Button
              onClick={() => navigate("subscribe")}
              size="large"
              type="primary"
            >
              Subscribe
            </Button>
            <Badge count={2}>
              <images.nav.notification />
            </Badge>
            <div className="avatarContainer">
              <Avatar>AB</Avatar>
              <images.nav.arrowDown />
            </div>
          </div>
        </>
      ) : (
        <h1>CineMax</h1>
      )}
    </HeaderStyle>
  );
}

export default Header;
