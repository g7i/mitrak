import React from "react";
import {
  DropDownContainer,
  DropDownContentContainer,
  DropDownIcon,
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
    >
      <DropDownContainer>
        {children}
        <DropDownIcon onClick={() => setOpen(!open)} />
      </DropDownContainer>
      <DropDownContentContainer visible={open}>
        <ul>
          {content?.map((item) => (
            <li>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </DropDownContentContainer>
    </DropDownOuterContainer>
  );
};

export default DropDown;
