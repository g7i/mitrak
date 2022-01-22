import React, { useState } from "react";
import {
  Nav,
  Hamburger,
  Menu,
  MenuLink,
  ImgLogo,
  LoginButton,
  ImageLogoLink,
} from "../styledComponents/Navbar";
import {Link, NavLink, useHistory} from 'react-router-dom';

import logo from "../../assets/images/mitrc.png";

import DropDown from "../DropDown/DropDown";
import { MenuItem, Menu as MaterialMenu, Avatar } from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {useStore} from "../../store";
import {logOut, signIn} from "../../utils/firebase/auth";

const DropDownContent = {
  aboutUs: [
    { title: "About Us", link: "/about" },
    { title: "Contact Us", link: "/contact" },
    { title: "How To Reach", link: "/how-to-reach" }
  ],
  academics: [
    { title: "Programmes Offered", link: "/academics/courses" },
    {
      title: "Departments",
      link: "/academics/departments/electrical%20engineering",
    },
    { title: "Mandatory Disclosures", link: "/academics/madatory-disclosures" },
  ],
  campusLife: [
    { title: "Amenities", link: "/campus-life/amenities" },
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
    // { title: "From TPO Desk", link: "/placements/tpodesk" },
    { title: "Placement Activities", link: "/placements/placementactivities" },
    { title: "Government Selection", link: "/placements/governmentselections" },
    { title: "Placement Highlight", link: "/placements/placementhighlight" },
    // { title: "Coporate feedback", link: "/placements/coporatefeedback" },
    // { title: "Recent Achievments", link: "/placements/recentachievments" },
    { title: "Recruitment partner", link: "/placements/recruitmentpartner" },
    // { title: "Testimonials", link: "/placements/testimonials" },
    // { title: "gallery", link: "/placements/recentachievments" },
    // { title: "Placement Summary", link: "/placements/placementsummary" },
    { title: "Alumini", link: "/placements/recentachievments" },
  ],
};

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { push } = useHistory();

  const {
    state: { user },
    actions: { updateUser }
  } = useStore();

  const handleSignIn = async () => {
    try {
      const data = await signIn();
      updateUser(data);
    } catch (e) {
      console.error(e);
      alert('unable to sign in');
    }
  };

  const handleSignOut = async (popupState) => {
    await logOut();
    popupState.close();
    updateUser(null);
  };

  return (
    <Nav>
      <ImageLogoLink to="/">
        <ImgLogo
          src={
            "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Falwar-285x75.png?alt=media&token=4698e854-49a1-4937-907c-c0fb868d7b16"
          }
          alt="Mitrc Logo"
        />
        <p>REAP CODE 60</p>
      </ImageLogoLink>

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
        <MenuLink href="/placements">Placements</MenuLink>

        <MenuLink href="https://docs.google.com/forms/d/e/1FAIpQLScvsKRxjMKKCqMZO8yGiEuvIVQDp2blnasry2_7BE5O_k1xuQ/viewform">
          Apply For Admission
        </MenuLink>
      </Menu>
      {/*TODO: Remove Me*/}
      <div></div>
      {/*{!user && (*/}
      {/*  <Menu showMobileMenu={showMobileMenu}>*/}
      {/*    /!* <MenuLink>Apply for Admission</MenuLink> *!/*/}
      {/*    <LoginButton onClick={() => push('/login')}>Login</LoginButton>*/}
      {/*  </Menu>*/}
      {/*)}*/}
      {/*{user &&  (*/}
      {/*  <PopupState variant="popover" popupId="demo-popup-menu">*/}
      {/*    {(popupState) => (*/}
      {/*      <React.Fragment>*/}
      {/*        /!* <Button variant="contained" {...bindTrigger(popupState)}>*/}
      {/*            Dashboard*/}
      {/*          </Button> *!/*/}
      {/*        <Avatar*/}
      {/*          alt="user profile image"*/}
      {/*          src={user?.photoURL}*/}
      {/*          style={{ cursor: "pointer" }}*/}
      {/*          {...bindTrigger(popupState)}*/}
      {/*        />*/}
      {/*        <MaterialMenu {...bindMenu(popupState)}>*/}
      {/*          <Link*/}
      {/*            to="/student/dashboard"*/}
      {/*            style={{ textDecoration: "none", color: "#000" }}*/}
      {/*          >*/}
      {/*            <MenuItem onClick={popupState.close}>Profile</MenuItem>*/}
      {/*          </Link>*/}
      {/*          <Link*/}
      {/*            to="/admin/dashboard"*/}
      {/*            style={{ textDecoration: "none", color: "#000" }}*/}
      {/*          >*/}
      {/*            <MenuItem onClick={popupState.close}>Admin Dashboard</MenuItem>*/}
      {/*          </Link>*/}
      {/*          <MenuItem onClick={() => handleSignOut(popupState)}>Logout</MenuItem>*/}
      {/*        </MaterialMenu>*/}
      {/*      </React.Fragment>*/}
      {/*    )}*/}
      {/*  </PopupState>*/}
      {/*)}*/}
    </Nav>
  );
};

export default Navbar;

