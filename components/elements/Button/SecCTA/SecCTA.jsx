import React from "react";
import Link from "next/link";
import Image from "next/image";
import Arrow from "@/public/svg/arrow.svg";
import styles from "./secCta.module.scss";

const SecCTA = ({href, callToAction}) => {
    return(
        <>
            <Link
                href={href}
                className={styles.link}
            >
                {callToAction}
                <Image
                    src={Arrow}
                    width={"auto"}
                    height={"auto"}
                    alt=""
                />
            </Link>
        </>
    )
}

export default SecCTA;