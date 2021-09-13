import React, {useState} from 'react';
import { dropdownItems } from './NavLinks';
import './Nav.css';

const DropDown = ({toggleDrop}) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <ul className={dropdown ? 'services-submenu clicked' : 'services-submenu'}
             onClick={() => setDropdown(!dropdown)} 
             onMouseEnter={() => toggleDrop(true)}
             onMouseLeave={() => toggleDrop(false)}>
                {
                    dropdownItems.map(item => (
                        <li key={item.id} className={item.cName} onClick={() => setDropdown(false)}>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default DropDown;