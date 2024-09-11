import Link from "next/link";



function HeaderLink ({
	title, href
}: { title: string, href: string }) {
	return (
		<Link className="block px-4 py-5 bg-zinc-950 font-bold rounded-b-lg border-2 border-t-0 border-transparent duration-300 hover:text-blue-500 hover:border-blue-500" href={href}>{title}</Link>
	);
}

interface HeaderProps {}

export default function Header ({}: HeaderProps) {
	return (
		<header className="container-sm text-center grid grid-cols-3 gap-x-4">
			<HeaderLink title="Home" href="/" />
			<HeaderLink title="Author" href="https://github.com/iaseth" />
			<HeaderLink title="Code" href="https://github.com/iaseth/dont-flex-too-much" />
		</header>
	);
}
