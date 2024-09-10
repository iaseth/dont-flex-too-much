import tutorialsJson from '../tutorials.json';



export interface SnippetDS {
	meta: {
		heading: string
	},

	name: string,
	className: string,

	header: string,
	html: string,
	css: string,
	styles: string,
	footer: string
}

export interface TutorialDS {
	meta: {
		title: string,
		description: string,
		snippets: string[]
	},

	name: string,
	className: string,
	snippets: SnippetDS[]
}

export const tutorials: TutorialDS[] = tutorialsJson.tutorials;
