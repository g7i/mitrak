import React from "react";
import {
  DropDownContainer,
  DropDownContentContainer,
  DropDownIcon,
  DropDownList,
  DropDownOuterContainer,
} from "../styledComponents/DropDown";

const DropDown = ({ children, content }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <DropDownOuterContainer
      onMouseEnter={() => {
        const windowWidth = window.innerWidth;
        if (windowWidth > 768) {
          setOpen(true);
        }
      }}
      onMouseLeave={() => {
        const windowWidth = window.innerWidth;
        if (windowWidth > 768) {
          setOpen(false);
        }
      }}
      onClick={() => setOpen(!open)}
    >
      <DropDownContainer>
        {children}
        <DropDownIcon />
      </DropDownContainer>
      <DropDownContentContainer visible={open}>
        <DropDownList>
          {content?.map((item , i) => (
            <li key={i}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </DropDownList>
      </DropDownContentContainer>
    </DropDownOuterContainer>
  );
};

export default DropDown;
