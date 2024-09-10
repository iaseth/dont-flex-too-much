import { TutorialDS, tutorials } from "@/data";
import Link from "next/link";



function TutorialLink ({ tutorial }: { tutorial: TutorialDS }) {
	return (
		<Link href={tutorial.name} className="block px-4 py-4 bg-zinc-950">
			<div>{tutorial.name}</div>
		</Link>
	);
}

export default function Home() {

	return (
		<main className="min-h-screen py-12 pb-24">
			<section className="container grid gap-x-3 gap-y-3 md:grid-cols-2 lg:grid-cols-3">
				{tutorials.map((tutorial, k) => <TutorialLink key={k} tutorial={tutorial} />)}
			</section>
		</main>
	);
}
