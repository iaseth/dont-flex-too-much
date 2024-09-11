import { SnippetDS } from "../../data";
import HighlightedCodeBlock from "./HighlightedCodeBlock/HighlightedCodeBlock";



interface SnippetProps {
	snippet: SnippetDS
}

export default function Snippet ({
	snippet
}: SnippetProps) {
	return (
		<section id={snippet.className} className="bg-gradient-to-b from-zinc-900 via-zinc-950/50 to-zinc-900 py-6">
			<header className="container-sm text-left py-6">
				<h1 className="H6">
					<a className="mr-4 opacity-30" href={`#${snippet.className}`}>#</a>
					<span>{snippet.meta.heading}</span>
				</h1>
				<p>This is just come text. This is just come text. This is just come text. This is just come text. This is just come text. This is just come text. This is just come text. This is just come text.</p>
			</header>

			<section className="container-lg font-mono grid gap-4 lg:grid-cols-3 py-6">
				<section id={snippet.name} className={`${snippet.className} px-3 py-3 bg-zinc-950 border border-zinc-700`} dangerouslySetInnerHTML={{__html: snippet.html}}></section>
				<style dangerouslySetInnerHTML={{__html: snippet.styles}}></style>

				<HighlightedCodeBlock heading="HTML" language="xml" code={snippet.html} headerBg="bg-blue-600" />
				<HighlightedCodeBlock heading="CSS" language="css" code={snippet.css} headerBg="bg-red-600" />
			</section>
		</section>
	);
}
