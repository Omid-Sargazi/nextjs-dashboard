"use client"
import { link } from "fs"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AuthLayout({children}:{children:React.ReactNode}){
    const navLinks = [
        {name:"Register", href:"/register"},
        {name:"Login", href:"/Login"},
        {name:"Forgot Password", href:"/forgot-password"},
    ]
    const pathname = usePathname()
    return(
        <div>
            {navLinks.map((link)=>{
            const isActive = pathname.startsWith(link.href)
                return(
                   <div key={link.name}>
                     <Link href={link.href} key={link.name} className={ isActive ? "font-bold text-red-600 MR-4": " text-blue-500 mr-4"}>{link.name}</Link>
                   </div>
                )
            })}
            <h2>Inner Layout</h2>
            {children}
        </div>
    )
}