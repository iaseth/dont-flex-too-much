import { SnippetDS } from "../../data";



interface SnippetProps {
	snippet: SnippetDS
}

export default function Snippet ({
	snippet
}: SnippetProps) {
	return (
		<section className="even:bg-zinc-950 py-12 pb-24">
			<header className="container text-center py-12">
				<h1>{snippet.name}</h1>
			</header>

			<section className="container font-mono grid gap-3 lg:grid-cols-3">
				<section dangerouslySetInnerHTML={{__html: snippet.html}}></section>
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
