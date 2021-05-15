import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import Header from "./Header";

function Navbar(props) {
  return (
    <div className="fixed">
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar ">
          <div className="toogleIcon" onClick={props.showSidebar}>
            {props.sidebar !== true ? (
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars />
              </Link>
            ) : (
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            )}
          </div>
          <Header />
        </div>
        <nav className={props.sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
