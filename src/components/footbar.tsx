import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Footbar() {
	const { loggedIn } = useSelector((state) => state.authReducer);

	return (
		<div className="flex flex-col bg-gray-900 w-full p-4 gap-4">
			<div className="flex gap-2">
				<h1 className="text-xl">Gabriel Kaszewski</h1>
				<span className="flex-1" />
				<a href="https://github.com/GKaszewski">
					<FontAwesomeIcon icon={["fab", "github"]} />
				</a>
				<a href="https://www.linkedin.com/in/gabriel-kaszewski-5344b3183">
					<FontAwesomeIcon icon={["fab", "linkedin-in"]} />
				</a>
				<a href="https://twitter.com/GKaszewski">
					<FontAwesomeIcon icon={["fab", "twitter"]} />
				</a>
			</div>
			<div className="flex gap-2 text-sm">
				<p className="font-semibold">
					© Gabriel Kaszewski, {new Date().getFullYear()}. All rights
					reserved.
				</p>
				<span className="flex-1" />
				{loggedIn && (
					<a href="https://gabrielkaszewski.dev/api/admin">
						Admin page
					</a>
				)}
				<Link href="/projects">
					Projects
				</Link>
				<Link href="/blog">
					Blog
				</Link>
				{loggedIn && (
					<Link href="/blog/editor">
						Editor
					</Link>
				)}
				{loggedIn && (
					<Link href="/files">
						Files
					</Link>
				)}
				<Link href="/contact">
					Contact
				</Link>
				<Link href="/login">
					Login
				</Link>
				<a href="http://media.gabrielkaszewski.dev/">Media</a>
			</div>
		</div>
	);
}
