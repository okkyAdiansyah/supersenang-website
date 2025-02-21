import React, { useState } from "react";
import NavList from "../NavList/NavList";
import { Toggle } from "@elements/Toggle";
import styles from "./mobileNav.module.scss";

const MobileNav = () => {
    const [isActive, setIsActive] = useState(false);

    const navItems = [
        {href: "/about", route: "About"},
        {href: "/rooms", route: "Rooms"},
        {href: "/culinary", route: "Culinary"},
    ];

    const handleToggleClick = (e) => {
        setIsActive(!isActive);
    };

    return(
        <>
            <section className={styles.container}>
                <Toggle.NavToggle 
                    className={`${styles['nav-toggle']} ${isActive ? styles.isActive : ''}`} 
                    onClick={handleToggleClick}
                />
                <NavList 
                    navItems={navItems} 
                    className={`${styles['mobile-nav']} ${isActive ? styles.isActive : ''}`} 
                />
            </section>
        </>
    )
}

export default MobileNav;