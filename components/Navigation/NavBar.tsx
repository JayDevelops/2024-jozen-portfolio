"use client"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import Image from "next/image"
import {NavigationLink, menuLinks, socialMediaLinks} from "@/components/Navigation/NavigationLinks"
import {cn} from "@/lib/utils"
import {usePathname} from "next/navigation"
import React from "react";
import {ModeToggle} from "@/components/toggle-mode-button"
import MobileNavigation from "@/components/Navigation/MobileNavigation";

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <MobileNavigation sheetTriggerStyle="block md:hidden pr-3"/>

                {/* RIGHT SIDE OF DESKTOP NAVIGATION */}
                <div className="mr-4 hidden md:flex">
                    <JozenLogo/>
                    <LeftDesktopNavLinks />
                </div>

                {/* LEFT SIDE OF NAVIGATION BAR, BOTH MOBILE AND DESKTOP */}
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none" /> {/* Hidden, gives space*/}

                    <RightActionLinks />
                </div>
                </div>
        </header>
    )
}

function LeftDesktopNavLinks() {
    const currentPath = usePathname()
    return (
        <NavigationMenu className="flex items-center gap-6 text-sm">
            <NavigationMenuList>
                {menuLinks.map((menuLink: NavigationLink) => (
                    <NavigationMenuItem key={menuLink.id}>
                        <Link href={menuLink.href} legacyBehavior passHref>
                            <NavigationMenuLink className={cn({
                                'text-primary/90': menuLink.href === currentPath,
                                'text-secondary-foreground': menuLink.href !== currentPath,
                                'transition-colors': true,
                            }) + navigationMenuTriggerStyle() }
                            >
                                {menuLink.title}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function RightActionLinks() {
    return (
        <NavigationMenu className="flex items-center">
            <NavigationMenuList className="">
                {/*Desktop Right Side Social Media Links*/}
                {socialMediaLinks.map((socialLink) => (
                    <NavigationMenuItem key={socialLink.id}>
                        <Link href={socialLink.href} target="_blank" legacyBehavior passHref>
                            <NavigationMenuLink target="_blank"
                                                className="inline-flex items-center justify-center whitespace-nowrap
                                                rounded-md text-sm font-medium transition-colors focus-visible:outline-none
                                                focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none
                                                disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0"
                            >
                                <div className="h-4 w-4">
                                    {socialLink.logo}
                                    <span className="sr-only">{socialLink.title}</span>
                                </div>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                    <ModeToggle />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export function JozenLogo() {
    return (
        <Link href="/" className="mr-6 flex items-center space-x-2 text-secondary-foreground">
            <Image src="/logo.png" alt="Jozen Logo" width={32} height={32} className="h-auto w-auto" priority/>
            <span className="font-bold sm:inline-block">
                The Jozen
            </span>
        </Link>
    )
}