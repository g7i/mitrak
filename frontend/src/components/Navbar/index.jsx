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
    { title: "Courses", link: "" },
    { title: "Departments", link: "/academics/departments/electrical%20engineering" },
    { title: "Mendatory disclosures", link: "/academics/madatory-disclosures" },
    { title: "Apply for admission", link: "" },
  ],
  campusLife: [
    { title: "Amenities", link: "/campus-life/amenities/hostel" },
    { title: "Students Affair", link: "/campus-life/studentaffair/anti%20ragging" },
    { title: "Clubs and Activities", link: "/campus-life/clubandactivities/aadharclub" },
    { title: "College Daze- the magzine", link: "/campus-life/collegedaze" },
    { title: "Events And Gallery", link: "/campus-life/events-gallery/curricular" },
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
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Nav>
      <Link to="/">
        <ImgLogo src={logo} alt="Mitrc Logo" />
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

        <MenuLink href="">Research</MenuLink>
      </Menu>
      {
        !isLoggedIn && (
          <Menu showMobileMenu={showMobileMenu}>
            <MenuLink>Apply for Admission</MenuLink>
            <LoginButton>Login</LoginButton>
          </Menu>
        )
      }
      {
        isLoggedIn && (
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                {/* <Button variant="contained" {...bindTrigger(popupState)}>
                  Dashboard
                </Button> */}
                <Avatar 
                  alt="user profile image"
                  src='https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'
                  style={{cursor: 'pointer'}}
                  {...bindTrigger(popupState)}
                />
                <MaterialMenu {...bindMenu(popupState)}>
                  <Link to="/profile/student/1" style={{textDecoration: 'none', color: '#000'}}>
                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                  </Link>
                  <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </MaterialMenu>
              </React.Fragment>
            )}
          </PopupState>
        )
      }
    </Nav>
  );
};

export default Navbar;

