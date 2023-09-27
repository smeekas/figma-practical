import { MenuProps, Switch } from "antd";
import { images } from "../../config/images";
import Menu from "../UI/Menu/Menu.style";
import { useLocation, useNavigate } from "react-router-dom";
const items: MenuProps["items"] = [
  {
    label: "Menu",
    key: "menu",

    children: [
      {
        label: "discovery",
        key: "discovery",
        icon: <images.menu.discovery />,
      },
      {
        label: "Top Rated",
        key: "topRated",
        icon: <images.menu.star />,
      },
      {
        label: "Coming Soon",
        key: "comingSoon",
        icon: <images.menu.timer />,
      },
    ],
  },
  {
    label: "library",
    key: "library",
    children: [
      {
        label: "Recent Played",
        key: "recentPlayed",
        icon: <images.menu.clock />,
      },
      {
        label: "Download",
        key: "download",
        icon: <images.menu.download />,
      },
      {
        label: (
          <div>
            <span> Dark Mode</span> <Switch />
          </div>
        ),
        key: "darkMode",
        icon: <images.menu.moon />,
      },
      {
        label: "Setting",
        key: "setting",
        icon: <images.menu.setting />,
      },
    ],
  },
];
function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const key = location.pathname.substring(1, location.pathname.length);
  return (
    <Menu
      onClick={(e) => navigate(e.key)}
      expandIcon={null}
      mode="inline"
      selectedKeys={[key]}
      openKeys={["menu", "library"]}
      items={items}
    />
  );
}

export default Sidebar;
