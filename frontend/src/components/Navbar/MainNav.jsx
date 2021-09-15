import React, { useState } from 'react';
import { ImgLogo } from '../styledComponents/Navbar';
import DropDown from './Dropdown';
import './Nav.css';
import { navItems } from './NavLinks';
import logo from '../../assets/images/mitrc.png'

const MainNav = () => {

    const [showDrop, setShowDrop] = useState(false);

    const toggleDrop = (bool) => {
        setShowDrop(bool)
    }

    return (
        <>
            <nav className="navbar">
                <a href="#" className="navbar-logo">
                    <ImgLogo src={'https://www.xcollege.in/Logo/institute/595233bf-b78d-4982-9ed0-9b570751d8e4.png'} />
                </a>
                <ul className="nav-items">
                    {
                        navItems.map((item) => {
                            if (item.title === "Contact") {
                                return (
                                    <div>
                                        <li key={item.id} className={item.cName} 
                                        onMouseLeave={() => setShowDrop(false)}
                                        onMouseEnter={() => setShowDrop(true)}>
                                            <span>{item.title}</span>
                                        </li>
                                        {showDrop && <DropDown toggleDrop={toggleDrop} />}
                                    </div>
                                )
                            }

                            return (
                                <li key={item.id} className={item.cName}>
                                    {item.title}
                                </li>
                            )

                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export default MainNav;