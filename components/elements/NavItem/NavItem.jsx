import React from "react";
import Link from "next/link";

const NavItem = ({href, route}) => {
    return(
        <Link
            href={href}
        >
            {route}
        </Link>
    )
}

export default NavItem;