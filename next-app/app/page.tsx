import { Snippet } from "@/components";
import { snippets } from "@/data";



export default function Home() {
	return (
		<main className="min-h-screen py-12 pb-24">
			{snippets.map((snippet, k) => <Snippet key={k} snippet={snippet} />)}
		</main>
	);
}
