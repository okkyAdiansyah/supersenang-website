import React from "react";

const NavToggle = ({onClick, className}) => {
    return(
        <>
            <button
                type="button"
                onClick={onClick}
                className={className}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </>
    )
}

export default NavToggle;