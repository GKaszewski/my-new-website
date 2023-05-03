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
            <Link className="text-2xl" href="/">
                Gabriel Kaszewski
            </Link>
            <span className="flex-1"/>
            <div className="flex gap-4">
                <Link className="text-lg" href="/">
                    Home
                </Link>
                <Link className="text-lg" href="/projects">
                    Projects
                </Link>
                <Link className="text-lg" href="/blog">
                    Blog
                </Link>
                <Link className="text-lg" href="/contact">
                    Contact
                </Link>
                <Link className="text-lg" href="/about">
                    About me
                </Link>
            </div>
        </div>
    );
}
