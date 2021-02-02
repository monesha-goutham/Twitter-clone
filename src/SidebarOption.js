import React from "react";
import "./SidebarOption.css";

// Icon prop is a Cpmponent, so it should be in caps
const SidebarOption = ({ text, Icon, active }) => {
  return (
    //   if "active" prop is present in the component
    // provide a classname "sidebar-option--active"
    <div className={`sidebar-option ${active && "sidebar-option--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
