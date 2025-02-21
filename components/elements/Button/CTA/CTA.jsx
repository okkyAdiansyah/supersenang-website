import React from "react";
import Link from "next/link";
import styles from "./cta.module.scss";

const CTA = ({href, callToAction}) => {
    return(
        <>
            <Link
                href={href}
                className={`${styles.container} ${styles['cta--main']}`}
            >
                {callToAction}
            </Link>
        </>
    )
}

export default CTA;