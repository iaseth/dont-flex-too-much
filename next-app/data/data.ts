import tutorialsJson from '../tutorials.json';



export interface SnippetDS {
	meta: {
		heading: string
	},

	name: string,
	className: string,

	html: string,
	css: string,
	header: string,
	footer: string
}

export interface TutorialDS {
	meta: {
		snippets: string[]
	},

	name: string,
	className: string,
	snippets: SnippetDS[]
}

export const tutorials: TutorialDS[] = tutorialsJson.tutorials;
