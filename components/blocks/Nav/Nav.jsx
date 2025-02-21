"use client";

import React from "react";
import { Button } from "@elements/Button";
import NavList from "@modules/NavList/NavList";
import Logo from "@elements/Logo/Logo";
import SiteLogo from "@/public/logo.avif";
import useResponsive from "@/hooks/useResponsive";
import MobileNav from "@/components/modules/MobileNav/MobileNav";
import styles from "./nav.module.scss";

const Nav = () => {
    const deviceType = useResponsive();

    const dynamicImage = {
        DESKTOP: 46,
        TABLET: 40,
        MOBILE: 36
      }

    const navItems = [
        {href: "/about", route: "About"},
        {href: "/rooms", route: "Rooms"},
        {href: "/culinary", route: "Culinary"},
    ]

    const generateLogo = () => {
        if(deviceType === "mobile") return dynamicImage.MOBILE;
        if(deviceType === "tablet") return dynamicImage.TABLET;
        if(deviceType === "desktop") return dynamicImage.DESKTOP;
      }

    return(
        <>
            <nav className={styles.container}>
                <section className={styles['container-left']}>
                    <Logo 
                        src={SiteLogo}
                        width={generateLogo()}
                        height={generateLogo()}
                    />
                </section>
                <section className={styles['container-right']}>
                    {deviceType !== "mobile" ? <NavList navItems={navItems}/> : ""}
                    <Button.CTA href={"/check-available"} callToAction={"Book Now"} device={deviceType}/>
                    {deviceType === "mobile" ? <MobileNav /> : ""} 
                </section>
            </nav>
        </>
    )
}

export default Nav;