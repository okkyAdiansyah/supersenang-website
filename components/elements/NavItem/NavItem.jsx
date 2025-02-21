import React from "react";
import Link from "next/link";
import styles from "./navItem.module.scss";

const NavItem = ({href, route}) => {
    return(
        <Link
            href={href}
            className={styles.link}
        >
            {route}
        </Link>
    )
}

export default NavItem;