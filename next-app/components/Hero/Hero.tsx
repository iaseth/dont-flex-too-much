


interface HeroProps {
	title: string,
	description: string
}

export default function Hero ({
	title, description
}: HeroProps) {
	return (
		<header className="container-sm text-center py-20">
			<h1 className="H4 blue-text">{title}</h1>
			<p className="p2">{description}</p>
		</header>
	);
}
