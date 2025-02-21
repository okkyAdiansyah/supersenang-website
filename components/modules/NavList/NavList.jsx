import React from "react";
import NavItem from "@elements/NavItem/NavItem";

const NavList = ({navItems}) => {
    return(
        <>
            <ul>
                {navItems.map((item, id) => (
                    <li key={`nav-item-${id}`}>
                        <NavItem href={item.href} route={item.route} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default NavList;