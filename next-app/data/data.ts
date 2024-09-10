import snippetsJson from '../snippets.json';
import tutorialsJson from '../tutorials.json';



export interface SnippetDS {
	name: string,
	html: string,
	css: string,
	meta: {
		heading: string
	}
}

export interface TutorialDS {
	meta: {
		snippets: string[]
	},

	name: string,
	snippets: SnippetDS[]
}

export const snippets: SnippetDS[] = snippetsJson.snippets;
export const tutorials: TutorialDS[] = tutorialsJson.tutorials;
