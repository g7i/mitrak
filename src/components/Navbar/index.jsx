import React, {useState} from 'react';
import { Nav, Hamburger, Menu, MenuLink, ImgLogo } from '../styledComponents/Navbar';

import logo from '../../assets/images/mitrc.png'

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <Nav>
            <ImgLogo src={logo} alt="Mitrc Logo" />
            <Hamburger onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>
            <Menu showMobileMenu={showMobileMenu}>
                <MenuLink href="">About Us</MenuLink>
                <MenuLink href="">Academics</MenuLink>
                <MenuLink href="">Campus Life</MenuLink>
                <MenuLink href="">Placements</MenuLink>
                <MenuLink href="">Research</MenuLink>
            </Menu>
        </Nav>
    )
}

export default Navbar;