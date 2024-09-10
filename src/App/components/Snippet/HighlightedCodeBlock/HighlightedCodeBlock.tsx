import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';



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
