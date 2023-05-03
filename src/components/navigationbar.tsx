import React, {useState, useEffect} from "react";
import Link from "next/link";

export default function NavigationBar() {
    const [nav, setNav] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 10) {
            if (!nav) setNav(true);
        } else {
            setNav(false);
        }
    };

    return (
        <div
            className={`${nav ? 'fixed flex flex-col md:flex-row w-full justify-center items-center p-4 z-20 bg-gray-900 shadow-2xl' : 'fixed flex flex-col md:flex-row w-full justify-center items-center p-4 z-20 '}`}>
            <Link href="/">
                <a className="text-2xl ">Gabriel Kaszewski</a>
            </Link>
            <span className="flex-1"/>
            <div className="flex gap-4">
                <Link href="/">
                    <a className="text-lg">Home</a>
                </Link>
                <Link href="/projects">
                    <a className="text-lg">Projects</a>
                </Link>
                <Link href="/blog">
                    <a className="text-lg">Blog</a>
                </Link>
                <Link href="/contact">
                    <a className="text-lg">Contact</a>
                </Link>
                <Link href="/about">
                    <a className="text-lg">About me</a>
                </Link>
            </div>
        </div>
    );
}
