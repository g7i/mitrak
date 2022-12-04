import React from "react";
import {
  DropDownContainer,
  DropDownContentContainer,
  DropDownIcon,
  DropDownList,
  DropDownOuterContainer,
} from "../styledComponents/DropDown";
import { Link } from 'react-router-dom'

const DropDown = ({ children, content }) => {
  const [open, setOpen] = React.useState(false);
  return (
    // <DropDownOuterContainer
    //   onMouseEnter={() => {
    //     const windowWidth = window.innerWidth;
    //     if (windowWidth > 768) {
    //       setOpen(true);
    //     }
    //   }}
    //   onMouseLeave={() => {
    //     const windowWidth = window.innerWidth;
    //     if (windowWidth > 768) {
    //       setOpen(false);
    //     }
    //   }}
    //   onClick={() => setOpen(!open)}
    // >
    //   <DropDownContainer>
    //     {children}
    //     {/* <DropDownIcon /> */}
    //   </DropDownContainer>
    //   <DropDownContentContainer visible={open}>
    //     <DropDownList>
    //       {content?.map((item , i) => (
    //         <li key={i}>
    //           {
    //             item?.redirectLink ? (<a href={item.redirectLink}>{item.title}</a>) : (
    //                 <Link to={item.link}>{item.title}</Link>
    //             )
    //           }
    //         </li>
    //       ))}
    //     </DropDownList>
    //   </DropDownContentContainer>
    // </DropDownOuterContainer>
 
      <div className="relative w-4/12" onMouseEnter={()=> setOpen(true)} onMouseLeave={()=>setOpen(false)}>
        <div >
          {children}
          </div>
          {open ?<ul className=" mt-2 top-[35px] rounded-md bg-gray-100 z-50  w-full justify-center">
           
           {content?.map((item , i) => (
            <li key={i} className="py-2 ">
          {
                item?.redirectLink ? (<a href={item.redirectLink} className="text-black no-underline hover:underline">{item.title}</a>) : (
                    <Link to={item.link} className="text-black no-underline hover:underline">{item.title}</Link>
                )
              }
            </li>
          ))}
          </ul> : <div></div>}
      </div>
  );


  
};

export default DropDown;
