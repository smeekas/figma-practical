import React from "react";
import HeaderStyle from "./Header.style";
import { images } from "../../config/images";
import { Badge, Button } from "antd";
import Avatar from "../UI/Avatar/Avatar.style";

function Header() {
  return (
    <HeaderStyle>
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
        <images.nav.search />
        <Button size="large" type="primary">
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
    </HeaderStyle>
  );
}

export default Header;
