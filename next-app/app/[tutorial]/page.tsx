import { Tutorial } from "@/components";
import { tutorials } from "@/data";



export async function generateMetadata ({ params }: { params: { tutorial: string } }) {
	const tutorial = tutorials.find(t => t.name === params.tutorial) || tutorials[0];
	return {
		title: `Tutorial on ${tutorial.name}`,
		description: `Just a tutorial on ${tutorial.name}`
	};
}

export async function generateStaticParams () {
	return tutorials.map(t => ({
		tutorial: t.name
	}));
}

export default function TutorialPage ({ params }: { params: { tutorial: string } }) {
	const tutorial = tutorials.find(t => t.name === params.tutorial) || tutorials[0];

	return (
		<main className="min-h-screen py-12 pb-24">
			<Tutorial tutorial={tutorial} />
		</main>
	);
}
