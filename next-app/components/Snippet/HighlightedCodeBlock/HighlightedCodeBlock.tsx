import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import { stackoverflowDark as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';



SyntaxHighlighter.registerLanguage('xml', xml);
SyntaxHighlighter.registerLanguage('css', css);

interface HighlightedCodeBlockProps {
	heading: string,
	code: string,
	language: string
}

export default function HighlightedCodeBlock ({
	heading, code, language
}: HighlightedCodeBlockProps) {
	return (
		<section>
			<header className='bg-zinc-800 px-4 pt-1'>
				<h3>{heading}</h3>
			</header>

			<section>
				<SyntaxHighlighter language={language} style={codeStyle}>{code}</SyntaxHighlighter>
			</section>
		</section>
	);
}