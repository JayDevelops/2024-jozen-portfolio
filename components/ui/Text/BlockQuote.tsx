import React from "react"

export function BlockQuote({children}: { children?: React.ReactNode }) {
    return (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            {children}
        </blockquote>
    )
}