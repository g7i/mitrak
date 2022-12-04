import React, { useState } from 'react';
// import Img from "../../assets/img0.png";
// import { BiPodcast } from "react-icons/bi";
// import { MdOutlineCast } from "react-icons/md";
// import { TbBulb } from "react-icons/tb";
// import { HiOutlineNewspaper } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import {RiArrowDropDownLine} from "react-icons/ri";
import {
    MenuLink,
} from "../styledComponents/Navbar";

import DropDown from "../DropDown/DropDown1";

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

function sidebar() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div>
            {showSidebar ? (
                <div className='w-full '>
                    <button
                        className='flex fixed right-10 top-10 text-3xl text-black opacity-70 items-center cursor-pointer   z-50'
                        onClick={() => setShowSidebar(!showSidebar)}> <IoCloseOutline /> </button>

                </div>
            ) : <svg
                onClick={() => setShowSidebar(!showSidebar)}
                className=" z-30 flex items-center cursor-pointer md:p-0 p-1  md:top-9"
                fill="#00000"
                viewBox="0 0 100 80"
                width="40"
                height="30"
            >
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
            </svg>
            }
            <div className={`fixed top-0 right-0  w-[100vw]  bg-white p-4 text-black  h-[120vh] z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full hidden"
                }`}>
                <div className='space-y-8'>
                    <div >
                    <DropDown content={DropDownContent.aboutUs}>
                        <div  className="no-underline p-1 cursor-pointer text-center text-[1rem]  transition duration-300 ease-in  font-medium hover:bg-blue-500 hover:text-white text-gray-800 px-4 py-2 rounded-md flex items-center "  >Home <span width={20} className="mt-1"> <RiArrowDropDownLine/> </span></div>
                    </DropDown>
                    </div>
                    <div>
                    <DropDown content={DropDownContent.academics}>
                        <a href="#" className=" no-underline p-1 cursor-pointer text-center text-[1rem]  transition duration-300 ease-in  font-medium hover:bg-blue-500 hover:text-white text-gray-800 px-4 py-2 rounded-md flex items-center" >Academics <span width={20} className="mt-1"> <RiArrowDropDownLine/> </span></a>
                    </DropDown>
                    </div>

                    <div>
                    <DropDown content={DropDownContent.campusLife}>
                        <MenuLink href="#" className=" no-underline p-1 cursor-pointer text-center text-[1rem]  transition duration-300 ease-in  font-medium hover:bg-blue-500 hover:text-white text-gray-800 px-4 py-2 rounded-md flex items-center" >Campus Life <span width={20} className="mt-1"> <RiArrowDropDownLine/> </span></MenuLink>
                    </DropDown>
                    </div>
                    <div>
                    <a href="/placements" className=" no-underline p-1 cursor-pointer text-center text-[1rem]  transition duration-300 ease-in  font-medium hover:bg-blue-500 hover:text-white text-gray-800 px-4 py-2 rounded-md" >Placements </a>
                    </div>

                    <div>
                    <a className=" no-underline p-1 cursor-pointer text-center text-[1rem]  transition duration-300 ease-in  font-medium hover:bg-blue-500 hover:text-white text-gray-800 px-4 py-2 rounded-md" href="https://docs.google.com/forms/d/e/1FAIpQLScvsKRxjMKKCqMZO8yGiEuvIVQDp2blnasry2_7BE5O_k1xuQ/viewform">
                        Apply For Admission
                    </a>
                    </div>

                    <div>
                    <a className=" no-underline p-1 cursor-pointer text-center text-[1rem]  transition duration-300 ease-in  font-medium hover:bg-blue-500 hover:text-white text-gray-800 px-4 py-2 rounded-md" href="/mitrcnews">
                        Press Release
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default sidebar;
