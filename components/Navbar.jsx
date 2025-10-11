"use client"
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import path from "path";

function Navbar(){
    const [Login, setLogin] = useState(false);
    const [admin, setAdmin] = useState(false);
    const links = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"},
        {name: "Contact", path: "/contact"},
        admin?{name: "Admin", path: "/admin"}:{name: "Dashboard", path: "/dashboard"},
    ]
    const pathName = usePathname();
    
    return(
        <>
        <div className="flex bg-blue-400 justify-between items-center p-4">
            <div className="logo"></div>
            <div className={`flex gap-10 text-white font-bold`}>
                {links.map((link) => (
                    <Link href={link.path} key={link.name} className={`hover:underline ${pathName === link.path ? "underline text-blue-600" : ""}`}>{link.name}</Link>
                ))}
            </div>
            <div className="btns">
                {Login?(
                    <button className="bg-white text-blue-400 font-bold px-4 py-2 rounded hover:bg-gray-200" onClick={() => setLogin(false)}>Logout</button>
                ):(
                    <button className="bg-white text-blue-400 font-bold px-4 py-2 rounded mr-2 hover:bg-gray-200" onClick={() => setLogin(true)}>Login</button>
                )}
                {Login?(
                    <>
                    {admin?(
                        <button className="bg-white text-blue-400 font-bold px-4 py-2 rounded hover:bg-gray-200" onClick={() => setAdmin(false)}>Admin</button>
                    ):(
                        <button className="bg-white text-blue-400 font-bold px-4 py-2 rounded hover:bg-gray-200" onClick={() => setAdmin(true)}>User</button>
                    )}
                    </>
                ):(
                    <button className="bg-white text-blue-400 font-bold px-4 py-2 rounded mr-2 hover:bg-gray-200" onClick={() => setLogin(true)}>Sign Up</button>
                )}
            </div>
        </div>
        </>
    );
}
export default Navbar;