import { Snippet } from "@/components";
import { tutorials } from "@/data";



export async function generateStaticParams () {
	return tutorials.map(t => ({
		tutorial: t.name
	}));
}

export default function TutorialPage ({ params }: { params: { tutorial: string } }) {
	const tutorial = tutorials.find(t => t.name === params.tutorial) || tutorials[0];

	return (
		<main className="min-h-screen py-12 pb-24">
			{tutorial.snippets.map((snippet, k) => <Snippet key={k} snippet={snippet} />)}
		</main>
	);
}
