import React, { ForwardRefExoticComponent, RefAttributes } from "react"
import { IconProps } from "@radix-ui/react-icons/dist/types"
import { InstagramLogoIcon } from "@radix-ui/react-icons"

export interface NavigationLink {
    id: number,
    title: string,
    href: string,
}
export interface SocialMediaLink {
    id: number,
    title: string,
    href: string,
    logo:  React.ReactElement,
}

const menuLinks: NavigationLink[] = [
    {
        id: 1,
        title: 'Home',
        href: '/',
    },
    {
        id: 2,
        title: 'Videos',
        href: '/videos',
    },
    {
        id: 3,
        title: 'Photos',
        href: '/photos',
    },
]

const socialMediaLinks: SocialMediaLink[] = [
    {
        id: 1,
        title: 'Instagram',
        href: 'https://www.instagram.com/thejozen/',
        logo: React.createElement(InstagramLogoIcon),
    },
]

export {menuLinks, socialMediaLinks}
