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
		publish?: boolean,
		snippets: string[]
	},

	name: string,
	className: string,
	snippets: SnippetDS[]
}

export const allTutorials: TutorialDS[] = tutorialsJson.tutorials;
export const tutorials: TutorialDS[] = allTutorials.filter(t => t.meta.publish);

export function getTutorial (name: string): TutorialDS {
	return tutorials.find(t => t.name === name) || tutorials[0];
}

export function getSnippet (tutorial: TutorialDS, name: string): SnippetDS {
	return tutorial.snippets.find(s => s.name === name) || tutorial.snippets[0];
}
