import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

export default function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.pexels.com/photos/26600774/pexels-photo-26600774/free-photo-of-a-polar-bear-is-swimming-in-the-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Drusilla Khulwael</h2>
        <h4>drusillakhulwael@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Profile viewers</p>
          <p className="sidebar__statnumber"> 43</p>
        </div>
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statnumber"> 2,543</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("react native")}
        {recentItem("node js")}
        {recentItem("Software Engineering")}
        {recentItem("PHP")}
      </div>
    </div>
  );
}
