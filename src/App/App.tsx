import './App.css';

import { red } from 'redicons';
import rediconsJson from './redicons.json';
import { Footer, Header } from './components';

import SnippetOne from './snippets/one.mdx';



red.addIcons(rediconsJson.icons);

export default function App () {

	return (
		<div className="bg-zinc-900 text-white">
			<Header />

			<main className="min-h-screen py-12">
				<section className="max-w-5xl mx-auto px-4 font-mono grid gap-3 lg:grid-cols-3">
					<SnippetOne />
				</section>
			</main>

			<Footer />
		</div>
	);
}
