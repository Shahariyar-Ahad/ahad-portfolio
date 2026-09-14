"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className = "" }) => {
    const path = usePathname();
    const isActive = path === href;

    return (
        <Link
            href={href}
            className={`px-3 py-2 text-xl font-bold italic transition-colors duration-200 ${
                isActive
                    ? "text-white underline underline-offset-4"
                    : "text-white/70 hover:text-red-500"
            } ${className}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;