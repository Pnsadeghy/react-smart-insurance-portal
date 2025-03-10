import React from "react";
import Link from "next/link";

interface componentProps {
    href: string;
    children: React.ReactNode;
}

export default function BaseButtonLink({href, children}: componentProps) {
    return (<Link href={href} className="button" >{children}</Link>)
}