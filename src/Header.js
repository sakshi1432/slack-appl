import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <>
      <div className="header">
        <div className="header_left">
          {/* Avtar for looged in user  */}
          <Avatar
            className="header_avatar"
            alt={user?.displayName}
            src={user?.photourl}
          />
          <AccessTimeIcon />
          {/* Time icon */}
        </div>
        <div className="header_search">
          {/* search icon */}
          <SearchIcon />
          <input type="text" placeholder="Search here" />
          {/* input icon */}
        </div>
        <div className="header_right">
          {/* help icon  */}
          <HelpOutlineIcon />
        </div>
      </div>
    </>
  );
};

export default Header;
