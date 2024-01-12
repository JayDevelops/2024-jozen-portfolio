import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react"
import {cn} from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import NavBar from "@/components/Navigation/NavBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: 'The Jozen',
        template: `%s | The Jozen`
    },
  description: 'Jozen is a seasoned dancer and creative mind, balancing the mind and body with optimal flow in life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
      )}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
          <NavBar />
          <main className="md:container md:mx-auto p-5">
              {children}
          </main>
      </ThemeProvider>
      </body>
    </html>
  )
}
