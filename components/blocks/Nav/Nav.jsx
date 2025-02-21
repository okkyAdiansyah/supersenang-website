import React from "react";
import { Button } from "@elements/Button";
import NavList from "@modules/NavList/NavList";
import Logo from "@elements/Logo/Logo";
import SiteLogo from "@/public/logo.avif";

const Nav = () => {
    const navItems = [
        {href: "/about", route: "About"},
        {href: "/rooms", route: "Rooms"},
        {href: "/culinary", route: "Culinary"},
    ]

    return(
        <>
            <nav>
                <section>
                    <Logo 
                        src={SiteLogo}
                        width={42}
                        height={42}
                    />
                </section>
                <section>
                    <NavList navItems={navItems}/>
                    <Button.CTA href={"/check-available"} callToAction={"Book Now"} />    
                </section>
            </nav>
        </>
    )
}

export default Nav;