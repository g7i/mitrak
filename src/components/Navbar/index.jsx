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
import Sidebar from "../Sidebar/sidebar";

const DropDownContent = {
  aboutUs: [
    { title: "About Us", link: "/about" },
    { title: "Contact Us", link: "/contact" },
    { title: "How To Reach", link: "/how-to-reach" },
  ],
  academics: [
    { title: "Programmes Offered", link: "/academics/courses" },
    { title: "Fees Structure", link: "/academics/fees-structure" },
    {
      title: "Departments",
      link: "/academics/departments/",
    },
    { title: "Mandatory Disclosures", link: "/academics/madatory-disclosures" },
    {
      title: "Mandatory Public Disclosures",
      link: "/academics/madatory-disclosures/public",
    },
    {
      title: "Academic Calender",
      link: "#",
      redirectLink:
        "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FAcademics%2FAcademic%20Calendar%2FAcademic%20Calendar.pdf?alt=media&token=c85823ed-4c5c-4b0e-a762-f5fd7f48d403",
    },
  ],
  campusLife: [
    { title: "Amenities", link: "/campus-life/amenities/main" },
    {
      title: "Students Affair",
      link: "/campus-life/student-affair/medicare",
    },
    {
      title: "Clubs and Activities",
      link: "/campus-life/club-and-activities/clubAct",
    },
    { title: "College Daze- the magzine", link: "/campus-life/collegedaze" },
    {
      title: "Events And Gallery",
      link: "/campus-life/events-gallery/curricular",
    },
    {
      title: "National & State Level Events",
      link: "/campus-life/national-level-events",
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
        {/* <p>REAP CODE 60 & RMAP CODE 265</p> */}
      </ImageLogoLink>

      <div className="lg:hidden absolute right-10">
        <Sidebar/>
      </div>
      <div className="lg:flex lg:items-center hidden">
        <DropDown content={DropDownContent.aboutUs}>
          <a href="/" className=" no-underline p-1 cursor-pointer text-center text-[1rem]  transition duration-300 ease-in  font-medium hover:bg-blue-500 hover:text-white text-gray-800 px-4 py-2 rounded-md"  >Home</a>
        </DropDown>
        <DropDown content={DropDownContent.academics}>
          <a href="#"  className=" no-underline p-1 cursor-pointer text-center text-[1rem]  transition duration-300 ease-in  font-medium hover:bg-blue-500 hover:text-white text-gray-800 px-4 py-2 rounded-md" >Academics</a>
        </DropDown>
        <DropDown content={DropDownContent.campusLife}>
          <MenuLink href="#"  className=" no-underline p-1 cursor-pointer text-center text-[1rem]  transition duration-300 ease-in  font-medium hover:bg-blue-500 hover:text-white text-gray-800 px-4 py-2 rounded-md" >Campus Life</MenuLink>
        </DropDown>
        <a href="/placements"  className=" no-underline p-1 cursor-pointer text-center text-[1rem]  transition duration-300 ease-in  font-medium hover:bg-blue-500 hover:text-white text-gray-800 px-4 py-2 rounded-md" >Placements</a>

        <a className=" no-underline p-1 cursor-pointer text-center text-[1rem]  transition duration-300 ease-in  font-medium hover:bg-blue-500 hover:text-white text-gray-800 px-4 py-2 rounded-md"  href="https://docs.google.com/forms/d/e/1FAIpQLScvsKRxjMKKCqMZO8yGiEuvIVQDp2blnasry2_7BE5O_k1xuQ/viewform">
          Apply For Admission
        </a>
        <a  className=" no-underline p-1 cursor-pointer text-center text-[1rem]  transition duration-300 ease-in  font-medium hover:bg-blue-500 hover:text-white text-gray-800 px-4 py-2 rounded-md"  href="/mitrcnews">
          Press Release
        </a>
      </div>
      {/*TODO: Remove Me*/}
      <div></div>
    </Nav>
  );
};

export default Navbar;

