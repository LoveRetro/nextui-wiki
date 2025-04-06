import React from "react";
import type {Metadata} from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'NextUI',
    description: 'A powerful CFW for TrimUI Brick and Smart Pro',
}

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}
