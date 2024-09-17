'use client'

import {Fragment, useState} from "react";
import {BiMenu} from "react-icons/bi";
import Image from "next/image";
import AppIcon from "@/app/ui/app-icon";
import Link from "next/link";

export default function MyNav() {

    const [navShown, setNavShown] = useState(false)

    function toggleNav() {
        setNavShown(!navShown)
    }

    return <div className={`flex-col sticky ${navShown ? "h-screen" : ""} inset-0 z-10`}>
        <div className="bg-[#181b2f] flex w-full items-center gap-3 p-4">
            <AppIcon/>
            <div className="grow"/>
            <BiMenu className="fill-white size-7 cursor-pointer" onClick={toggleNav}></BiMenu>
        </div>


        <nav className={
            `
            ${navShown ? "size-full" : "size-0"}
            bg-[#181b2f]
            duration-300
            p-4
            text-white
            flex-col
            ${navShown ? "opacity-100 z-10" : " opacity-0 z-[-1]"}
            `
        }>

            <ol>
                <li className="mb-8">Company</li>
                <li className="mb-8">Products</li>
                <li className="mb-8">Pricing</li>
                <li className="mb-8">Register</li>
                <li className="mb-8">Support</li>
            </ol>

            <Link href="/dashboard/auth" className=" absolute bottom-4"> Login </Link>
        </nav>
    </div>
}