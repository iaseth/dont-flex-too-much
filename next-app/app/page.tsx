import { TutorialDS, tutorials } from "@/data";
import Link from "next/link";



function TutorialLink ({ tutorial }: { tutorial: TutorialDS }) {
	return (
		<Link href={tutorial.name} className="block px-6 py-6 bg-zinc-950 border-2 border-transparent rounded duration-300 hover:border-red-500">
			<div className="h1">{tutorial.name}</div>
		</Link>
	);
}

export default function Home() {

	return (
		<main className="min-h-screen py-24">
			<section className="container-xs grid gap-x-3 gap-y-8">
				{tutorials.map((tutorial, k) => <TutorialLink key={k} tutorial={tutorial} />)}
			</section>
		</main>
	);
}
