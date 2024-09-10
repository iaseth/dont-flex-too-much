import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import { stackoverflowDark as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';



SyntaxHighlighter.registerLanguage('xml', xml);
SyntaxHighlighter.registerLanguage('css', css);

interface HighlightedCodeBlockProps {
	code: string,
	language: string
}

export default function HighlightedCodeBlock ({
	code, language
}: HighlightedCodeBlockProps) {
	return (
		<section>
			<SyntaxHighlighter language={language} style={codeStyle}>{code}</SyntaxHighlighter>
		</section>
	);
}
