import { Snippet } from "@/components";
import { tutorials } from "@/data";



export default function Home() {
	const snippets = tutorials[0].snippets;

	return (
		<main className="min-h-screen py-12 pb-24">
			{snippets.map((snippet, k) => <Snippet key={k} snippet={snippet} />)}
		</main>
	);
}
