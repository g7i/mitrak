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

const DropDownContent = {
  aboutUs: [
    { title: "Vision And Mission", link: "" },
    { title: "Governing Board", link: "" },
    { title: "Chairmen's Desk", link: "" },
    { title: "Advisory Board", link: "" },
    { title: "Director's Desk", link: "" },
    { title: "Society", link: "" },
  ],
  academics: [
    { title: "Courses", link: "" },
    { title: "Departments", link: "" },
    { title: "Mendatory disclosures", link: "" },
    { title: "Apply for admission", link: "" },
  ],
  campusLife: [
    { title: "Amenities", link: "/campus-life/amenities" },
    { title: "Students Affair", link: "/campus-life/studentaffair" },
    { title: "Clubs and Activities", link: "" },
    { title: "College Daze- the magzine", link: "" },
    { title: "Events And Gallery", link: "" },
  ],

  placements: [
    { title: "From TPO Desk", link: "" },
    { title: "Placement Activities", link: "" },
    { title: "Government Selection", link: "" },
    { title: "Placement Highlight", link: "" },
    { title: "Coporate feedback", link: "" },
    { title: "Recent Achievments", link: "" },
    { title: "Recruitment partner", link: "" },
    { title: "Testimonials", link: "" },
    { title: "gallery", link: "" },
    { title: "Placement Summary", link: "" },
    { title: "Alumini", link: "" },
  ],
};

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
        <MenuLink href="/about">About Us</MenuLink>
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
      <Menu showMobileMenu={showMobileMenu}>
        <MenuLink>Apply for Admission</MenuLink>
        <LoginButton>Login</LoginButton>
      </Menu>
    </Nav>
  );
};

export default Navbar;
