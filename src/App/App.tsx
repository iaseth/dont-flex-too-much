import './App.css';

import { red } from 'redicons';
import rediconsJson from './redicons.json';
import { Footer, Header } from './components';

import { snippets } from './data';
import Snippet from './components/Snippet/Snippet';



red.addIcons(rediconsJson.icons);

export default function App () {

	return (
		<div className="bg-zinc-900 text-white">
			<Header />

			<main className="min-h-screen">
				{snippets.map((snippet, k) => <Snippet key={k} snippet={snippet} />)}
			</main>

			<Footer />
		</div>
	);
}
