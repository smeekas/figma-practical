import React from "react";
import { SideItemStyle } from "./SideItem.style";

function SideItem({ children }: { children: string }) {
  return <SideItemStyle>{children}</SideItemStyle>;
}

export default SideItem;
