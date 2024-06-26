import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption.js";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Header() {
    return (
      <div className="header">
        <div className="header__left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt=""
          />

          <div className="header__search">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fpeople&psig=AOvVaw0bE7eYg_20_MVt9vKsRF51&ust=1719505127032000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCqyZXW-YYDFQAAAAAdAAAAABAJ" title="me"/>
        </div>
      </div>
    );
}
