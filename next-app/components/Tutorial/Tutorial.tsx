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
			<header>
				<h1>Tutorial {tutorial.name}</h1>
			</header>

			<section>
				{tutorial.snippets.map((snippet, k) => <Snippet key={k} snippet={snippet} />)}
			</section>
		</article>
	);
}
