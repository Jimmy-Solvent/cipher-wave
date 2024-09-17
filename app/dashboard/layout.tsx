import React from "react";
import {faunaOne} from "@/app/ui/fonts";

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body
            className={`${faunaOne.className} antialiased flex-col`}
        >
        {children}
        </body>
        </html>
    );
}