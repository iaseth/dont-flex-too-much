import snippetsJson from '../snippets.json';



export interface SnippetDS {
	name: string,
	html: string,
	css: string
}

export const snippets: SnippetDS[] = snippetsJson.snippets;
