import React from "react";
import Link from "next/link";

const CTA = ({href, callToAction}) => {
    return(
        <>
            <Link
                href={href}
            >
                {callToAction}
            </Link>
        </>
    )
}

export default CTA;