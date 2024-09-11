import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";



function HeaderLink ({
	title, href
}: { title: string, href: string }) {
	return (
		<Link className="block px-4 py-4 bg-zinc-950 font-bold rounded-b-lg border-2 border-t-0 border-transparent duration-300 hover:text-blue-500 hover:border-blue-500" href={href}>{title}</Link>
	);
}

export const metadata: Metadata = {
	title: "Dont Flex Too Much",
	description: "A tutorial on CSS Flexbox and Grid.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<header className="container-sm text-center grid grid-cols-3 gap-x-4">
					<HeaderLink title="Home" href="/" />
					<HeaderLink title="Author" href="https://github.com/iaseth" />
					<HeaderLink title="Code" href="https://github.com/iaseth/dont-flex-too-much" />
				</header>

				<main className="min-h-screen pb-32">{children}</main>

				<footer className="bg-zinc-950 text-white px-2 py-24 text-center">
					<h4>
						<a href="https://github.com/iaseth/dont-flex-too-much" className="underline">View Source on GitHub</a>
					</h4>
				</footer>
			</body>
		</html>
	);
}
