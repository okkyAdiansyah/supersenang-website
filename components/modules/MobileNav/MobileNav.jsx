import React from "react";
import NavList from "../NavList/NavList";
import { Toggle } from "@elements/Toggle";

const MobileNav = () => {
    return(
        <>
            <section>
                <Toggle.NavToggle />
                <NavList />
            </section>
        </>
    )
}

export default MobileNav;