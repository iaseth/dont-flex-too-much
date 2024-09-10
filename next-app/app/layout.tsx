import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";



const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

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
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<header className="bg-red-500 text-white px-2 py-16 text-center">
					<h1 className="H6">Dont Flex Too Much</h1>
					<p className="p3">A tutorial on CSS Flexbox and Grid.</p>
				</header>

				{children}

				<footer className="bg-zinc-950 text-white px-2 py-24 text-center">
					<h4>
						<a href="https://github.com/iaseth/dont-flex-too-much" className="underline">View Source on GitHub</a>
					</h4>
				</footer>
			</body>
		</html>
	);
}
