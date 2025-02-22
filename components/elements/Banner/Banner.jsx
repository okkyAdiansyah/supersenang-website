import React from "react";
import Image from "next/image";

const Banner = ({src}) => {
    return(
        <>
            <Image
                src={src}
                width={"auto"}
                height={"auto"}
                alt="Supersenang-banner"
                priority
            />
        </>
    )
}

export default Banner;