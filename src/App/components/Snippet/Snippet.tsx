import { SnippetDS } from "../../data";



interface SnippetProps {
	snippet: SnippetDS
}

export default function Snippet ({
	snippet
}: SnippetProps) {
	return (
		<section className="bg-gradient-to-b from-zinc-900 via-zinc-950/50 to-zinc-900 py-12 pb-24 border-b border-zinc-950">
			<header className="container text-center py-12">
				<h1>{snippet.name}</h1>
			</header>

			<section className="container font-mono grid gap-3 lg:grid-cols-3">
				<section id={snippet.name} className="px-2 py-2 bg-zinc-950 border border-pink-500" dangerouslySetInnerHTML={{__html: snippet.html}}></section>

				<section>
					<pre>{snippet.html}</pre>
				</section>

				<section>
					<pre>{snippet.css}</pre>
				</section>
			</section>
		</section>
	);
}
