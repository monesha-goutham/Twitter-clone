import { Button } from "@material-ui/core";
import {
  Bookmark,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  SearchOutlined,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* twitter-icon */}
      <Twitter className="sidebar__twitter-icon" />

      {/* sidebar option */}
      {/* component prop is named in CAPS */}
      <SidebarOption active Icon={Home} text="Home" />
      <SidebarOption Icon={SearchOutlined} text="Explore" />
      <SidebarOption Icon={NotificationsNone} text="Notifications" />
      <SidebarOption Icon={MailOutline} text="Messages" />
      <SidebarOption Icon={ListAlt} text="Lists" />
      <SidebarOption Icon={Bookmark} text="Bookmarks" />
      <SidebarOption Icon={PermIdentity} text="Profile" />
      <SidebarOption Icon={MoreHoriz} text="More" />

      {/* tweet button */}
      <Button className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
