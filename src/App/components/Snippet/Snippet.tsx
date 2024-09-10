import { SnippetDS } from "../../data";
import HighlightedCodeBlock from "./HighlightedCodeBlock/HighlightedCodeBlock";



interface SnippetProps {
	snippet: SnippetDS
}

export default function Snippet ({
	snippet
}: SnippetProps) {
	const target = `${snippet.name}-section`;

	return (
		<section id={target} className="bg-gradient-to-b from-zinc-900 via-zinc-950/50 to-zinc-900 py-6">
			<header className="container-sm text-left py-6">
				<h1 className="H4">
					<a className="mr-4 opacity-30" href={`#${target}`}>#</a>
					<span>{snippet.meta.heading}</span>
				</h1>
				<p>This is just come text. This is just come text. This is just come text. This is just come text. This is just come text. This is just come text. This is just come text. This is just come text.</p>
			</header>

			<section className="container-lg font-mono grid gap-3 lg:grid-cols-3 py-6">
				<section id={snippet.name} className="px-3 py-3 bg-zinc-950 border border-zinc-700" dangerouslySetInnerHTML={{__html: snippet.html}}></section>

				<HighlightedCodeBlock heading="HTML" language="xml" code={snippet.html} />
				<HighlightedCodeBlock heading="CSS" language="css" code={snippet.css} />
			</section>
		</section>
	);
}
