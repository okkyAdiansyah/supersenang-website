import React from "react";
import NavItem from "@elements/NavItem/NavItem";
import styles from "./navList.module.scss";

const NavList = ({navItems, className}) => {
    return(
        <>
            <ul className={`${styles.container} ${className}`}>
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