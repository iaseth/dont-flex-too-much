import type { Metadata } from "next";

import "./globals.css";
import { Footer, Header } from "@/components";



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
				<Header />

				<main className="min-h-screen pb-32">{children}</main>

				<Footer />
			</body>
		</html>
	);
}
