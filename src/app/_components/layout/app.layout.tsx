import AppLayoutHeader from "@/app/_components/layout/app.layout.header";
import React from "react";

interface componentProps {
    children: React.ReactNode;
}

export default function AppLayout({children}: Readonly<componentProps>) {

    return (
        <main className="min-h-screen bg-gray-100" >
            <AppLayoutHeader />
            <section className="pt-4 pb-8" >
                <div className="container">
                    {children}
                </div>
            </section>
        </main>
    )
}