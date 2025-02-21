import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = ({src, width, height}) => {
    return(
        <>
            <Link
                href={"/"}
            >
                <Image
                    src={src}
                    width={width}
                    height={height}
                    alt="supersenang-logo"
                />
            </Link>
        </>
    )
}

export default Logo;