import React, { useState } from "react";
import "./Sidebar.css"; // Custom styles for the sidebar
import "@fontsource/inter"; // Defaults to weight 400

const Sidebar: React.FC = () => {
  const [isExpanded, setExpendState] = useState(true);

  // Menu items with icons
  const menuItems = [
    {
      text: "Dashboard",
      icon: require("./icons/dashboard.png"), // Use require to load images
      href: "/dashboard", // Replace with actual route
    },
    {
      text: "Projects",
      icon: require("./icons/project-management.png"), // Use require to load images
      href: "/dashboard", // Replace with actual route
    },
    {
      text: "Schema",
      icon: require("./icons/scheme.png"), // Use require to load images
      href: "/schema", // Replace with actual route
    },
    {
      text: "Teams",
      icon: require("./icons/group-chat.png"), // Use require to load images
      href: "/dashboard", // Replace with actual route
    },
  ];

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
      <div className="sidebar-header">
        <h2>Logo + Name</h2>
      </div>
      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <a className="menu-item" key={index} href={item.href}>
            <img src={item.icon} alt={`${item.text} icon`} className="menu-icon" />
            <span className="text">{item.text}</span>
          </a>
        ))}
      </div>
      <div className="sidebar-footer">
        <p>User: </p>
        <p>Email: </p>
      </div>
    </div>
  );
};

export default Sidebar;
