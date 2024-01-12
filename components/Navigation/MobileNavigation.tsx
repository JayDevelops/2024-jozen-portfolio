import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {JozenLogo} from "@/components/Navigation/NavBar"
import {useState} from "react";

interface MobileNavigationProps {
    sheetTriggerStyle: string,
}
export default function MobileNavigation({sheetTriggerStyle}: MobileNavigationProps) {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className={sheetTriggerStyle} >
                <MobileMenuIcon />
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader className="mt-4">
                    <SheetTitle onClick={() => setOpen(false)}>
                        <JozenLogo />
                    </SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

function MobileMenuIcon() {
    return (
        <svg strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
            <path d="M3 5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"></path>
            <path d="M3 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"></path>
            <path d="M3 19H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"></path>
        </svg>
    )
}