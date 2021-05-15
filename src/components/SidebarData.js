import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
// import * as Io5Icons from "react-icons/io5";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Movies",
    path: "/Movies",
    icon: <BiIcons.BiCameraMovie />,
    cName: "nav-text",
  },
  {
    title: "tv",
    path: "/tv",
    icon: <BsIcons.BsFillDisplayFill />,
    cName: "nav-text",
  },
  {
    title: "Music",
    path: "/Music",
    icon: <FaIcons.FaMusic />,
    cName: "nav-text",
  },
  {
    title: "News",
    path: "/News",
    icon: <AiIcons.AiFillFire />,
    cName: "nav-text",
  },
];
