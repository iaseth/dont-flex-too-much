import { Hero } from "@/components";
import { TutorialDS, tutorials } from "@/data";
import { Metadata } from "next";
import Link from "next/link";



export const metadata: Metadata = {
	title: "Dont Flex Too Much",
	description: "A tutorial on CSS Flexbox and Grid.",
};

function TutorialLink ({ tutorial }: { tutorial: TutorialDS }) {
	return (
		<Link href={`articles/${tutorial.name}`} className="block px-8 py-8 bg-zinc-950 border-2 border-transparent rounded duration-300 hover:border-purple-600">
			<div className="H6 red-text">{tutorial.meta.title}</div>
			<p className="p3">{tutorial.meta.description}</p>
		</Link>
	);
}

export default function Home () {

	return (
		<>
			<Hero title="Dont Flex Too Much" description="My notes on CSS." />

			<section className="container-sm space-y-16">
				{tutorials.map((tutorial, k) => <TutorialLink key={k} tutorial={tutorial} />)}
			</section>
		</>
	);
}
