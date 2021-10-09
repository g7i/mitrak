import React, { useState } from "react";
import {
  Nav,
  Hamburger,
  Menu,
  MenuLink,
  ImgLogo,
  LoginButton,
} from "../styledComponents/Navbar";
import { Link } from 'react-router-dom';

import logo from "../../assets/images/mitrc.png";

import DropDown from "../DropDown/DropDown";
import { MenuItem, Menu as MaterialMenu, Avatar } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const DropDownContent = {
  aboutUs: [
    { title: "About Us", link: "/about" },
    { title: "Contact Us", link: "" },
  ],
  academics: [
    { title: "Courses", link: "/academics/courses" },
    {
      title: "Departments",
      link: "/academics/departments/electrical%20engineering",
    },
    { title: "Mendatory disclosures", link: "/academics/madatory-disclosures" },
  ],
  campusLife: [
    { title: "Amenities", link: "/campus-life/amenities/hostel" },
    {
      title: "Students Affair",
      link: "/campus-life/studentaffair/anti%20ragging",
    },
    {
      title: "Clubs and Activities",
      link: "/campus-life/clubandactivities/aadharclub",
    },
    { title: "College Daze- the magzine", link: "/campus-life/collegedaze" },
    {
      title: "Events And Gallery",
      link: "/campus-life/events-gallery/curricular",
    },
  ],

  placements: [
    { title: "From TPO Desk", link: "/placements/tpodesk" },
    { title: "Placement Activities", link: "/placements/placementactivities" },
    { title: "Government Selection", link: "/placements/governmentselections" },
    { title: "Placement Highlight", link: "/placements/placementhighlight" },
    { title: "Coporate feedback", link: "/placements/coporatefeedback" },
    { title: "Recent Achievments", link: "/placements/recentachievments" },
    { title: "Recruitment partner", link: "/placements/recruitmentpartner" },
    { title: "Testimonials", link: "/placements/testimonials" },
    { title: "gallery", link: "/placements/recentachievments" },
    { title: "Placement Summary", link: "/placements/placementsummary" },
    { title: "Alumini", link: "/placements/recentachievments" },
  ],
};

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Nav>
      <Link to="/">
        <ImgLogo
          src={
            "https://www.mitrc.ac.in/wp-content/uploads/2019/05/mitrc_logo_small.png"
          }
          alt="Mitrc Logo"
        />
      </Link>
      <Hamburger onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu showMobileMenu={showMobileMenu}>
        <DropDown content={DropDownContent.aboutUs}>
          <MenuLink href="/">Home</MenuLink>
        </DropDown>
        <DropDown content={DropDownContent.academics}>
          <MenuLink href="#">Academics</MenuLink>
        </DropDown>
        <DropDown content={DropDownContent.campusLife}>
          <MenuLink href="#">Campus Life</MenuLink>
        </DropDown>
        <DropDown content={DropDownContent.placements}>
          <MenuLink href="#">Placements</MenuLink>
        </DropDown>

        <MenuLink href="https://docs.google.com/forms/d/e/1FAIpQLScvsKRxjMKKCqMZO8yGiEuvIVQDp2blnasry2_7BE5O_k1xuQ/viewform">Apply For Admission</MenuLink>
      </Menu>
      {!isLoggedIn && (
        <Menu showMobileMenu={showMobileMenu}>
          <Link to="/login">
            <LoginButton>Login/Register</LoginButton>
          </Link>
        </Menu>
      )}
      {(isLoggedIn) &&  (
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Avatar
                alt="user profile image"
                src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
                style={{ cursor: "pointer" }}
                {...bindTrigger(popupState)}
              />
              <MaterialMenu {...bindMenu(popupState)}>
                <Link
                  to="/student/dashboard"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <MenuItem onClick={popupState.close}>Profile</MenuItem>
                </Link>
                <Link
                  to="/admin/dashboard"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <MenuItem onClick={popupState.close}>Admin Dashboard</MenuItem>
                </Link>
                <MenuItem onClick={popupState.close}>Logout</MenuItem>
              </MaterialMenu>
            </React.Fragment>
          )}
        </PopupState>
      )}
    </Nav>
  );
};

export default Navbar;

