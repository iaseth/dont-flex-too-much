import { TutorialDS } from "@/data";
import Snippet from "./Snippet/Snippet";



interface TutorialProps {
	tutorial: TutorialDS
}

export default function Tutorial ({
	tutorial
}: TutorialProps) {
	return (
		<article>
			<header className="container-sm text-center py-8">
				<h1 className="H4 blue-text">{tutorial.meta.title}</h1>
				<p className="p2">{tutorial.meta.description}</p>
			</header>

			<section>
				{tutorial.snippets.map((snippet, k) => <Snippet key={k} snippet={snippet} />)}
			</section>
		</article>
	);
}
