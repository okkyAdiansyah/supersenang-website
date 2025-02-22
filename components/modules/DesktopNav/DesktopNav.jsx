import React from 'react'
import NavList from '../NavList/NavList'

const DesktopNav = () => {
    const navItems = [
        {href: "/about", route: "About"},
        {href: "/rooms", route: "Rooms"},
        {href: "/culinary", route: "Culinary"},
    ]

  return (
    <>
        <NavList navItems={navItems} />
    </>
  )
}

export default DesktopNav