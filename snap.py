import json
import os

import sass



SNIPPETS_DIRPATH = "snippets"
MDX_DIRPATH = "vite-app/src/App/snippets"

OUTPUT_DIRPATH = "vite-app/src/App"
OUTPUT_DIRPATH = "next-app"

PRODUCE_MDX_CONTENT = False

SNIPPET_NAMES = [
	'flex',
	'grid'
]

TUTORIAL_NAMES = [
	'flexbox',
	'grid'
]


def get_file_content(filepath):
	if not os.path.isfile(filepath):
		return ""

	with open(filepath) as f:
		content = f.read()

	content = content.strip().replace("\t", "  ")
	return content


def wrap_inside_section(html, tag="section"):
	return f"\n<{tag}>\n{html}\n</{tag}>\n\n"


def get_mdx_content(snippet):
	mdx = ""
	mdx += wrap_inside_section(snippet['html'])
	# mdx += f"\n<style>\n{snippet['css']}\n</style>\n\n"
	mdx += wrap_inside_section(f"```html\n{snippet['html']}\n```")
	mdx += wrap_inside_section(f"```css\n{snippet['css']}\n```")
	return mdx


def snippet_stuff():
	snippets = []
	snippets_scss = ""
	for code_name in SNIPPET_NAMES:
		html_filename = f"{code_name}.html"
		css_filename = f"{code_name}.css"
		json_filename = f"{code_name}.json"

		html_filepath = os.path.join(SNIPPETS_DIRPATH, code_name, html_filename)
		css_filepath = os.path.join(SNIPPETS_DIRPATH, code_name, css_filename)
		json_filepath = os.path.join(SNIPPETS_DIRPATH, code_name, json_filename)

		print(f"Codename: {code_name}")
		print(f"\tHTML: {html_filepath}")
		print(f"\t CSS: {css_filepath}")

		html = get_file_content(html_filepath) or html
		css = get_file_content(css_filepath)

		snippet = {}
		snippet['name'] = code_name
		snippet['html'] = html
		snippet['css'] = css
		with open(json_filepath) as f:
			snippet['meta'] = json.load(f)
		snippets.append(snippet)
		print(f"\t\tAdded '{code_name}' snippet to JSON.")

		scss = f"\n#{code_name} {{\n{snippet['css']}\n}}\n"
		snippets_scss += scss

		if PRODUCE_MDX_CONTENT:
			mdx_filename = f"{code_name}.mdx"
			mdx_filepath = os.path.join(MDX_DIRPATH, mdx_filename)
			mdx = get_mdx_content(snippet)
			with open(mdx_filepath, "w") as f:
				f.write(mdx)
			print(f"\t\tSaved: {mdx_filepath}")

	jo = {}
	jo['snippets'] = snippets
	snippets_json_path = os.path.join(OUTPUT_DIRPATH, "snippets.json")
	with open(snippets_json_path, 'w') as f:
		json.dump(jo, f, indent="\t", sort_keys=True)
	print(f"Saved: {snippets_json_path} ({len(snippets)} snippets)")

	snippets_scss_path = os.path.join(OUTPUT_DIRPATH, "snippets.scss")
	with open(snippets_scss_path, 'w') as f:
		f.write(snippets_scss)
	print(f"Saved: {snippets_scss_path} ({len(snippets)} snippets)")


def get_tutorial(tutorial_name):
	print(f"Tutorial: {tutorial_name}")
	tutorial_dirpath = os.path.join("tutorials", tutorial_name)
	if not os.path.isdir(tutorial_dirpath):
		print(f"\tNot found: '{tutorial_dirpath}'")
		return

	print(f"\tFound: '{tutorial_dirpath}'")
	tutorial_json_path = os.path.join(tutorial_dirpath, f"{tutorial_name}.json")
	if not os.path.isfile(tutorial_json_path):
		print(f"\tNot found: '{tutorial_json_path}'")
		return

	print(f"\tFound: '{tutorial_json_path}'")
	with open(tutorial_json_path) as f:
		meta = json.load(f)

	print(f"\tParsed: '{tutorial_json_path}' ({len(meta['snippets'])} snippets)")

	snippets = []
	for snippet_name in meta['snippets']:
		print(f"\t\tSnippet: '{snippet_name}'")
		snippet_dirpath = os.path.join(tutorial_dirpath, snippet_name)
		if not os.path.isdir(snippet_dirpath):
			print(f"\t\tNot found: '{snippet_dirpath}'")
			continue

		print(f"\t\tFound: '{snippet_dirpath}'")

		snippet = {}
		html = get_file_content(os.path.join(snippet_dirpath, "snippet.html")) or html
		css = get_file_content(os.path.join(snippet_dirpath, "styles.css")) or css

		snippet["name"] = snippet_name
		snippet["className"] = f"snippet-{snippet_name}"
		snippet["html"] = html
		snippet["css"] = css

		scss = f".{snippet['className']} {{ {css} }}"
		snippet["styles"] = sass.compile(string=scss)

		snippet["header"] = get_file_content(os.path.join(snippet_dirpath, "header.md"))
		snippet["footer"] = get_file_content(os.path.join(snippet_dirpath, "footer.md"))
		snippet["meta"] = json.loads(get_file_content(os.path.join(snippet_dirpath, "meta.json")))

		snippets.append(snippet)

	tutorial = {}
	tutorial["name"] = tutorial_name
	tutorial["className"] = f"tutorial-{tutorial_name}"
	tutorial["meta"] = meta
	tutorial["snippets"] = snippets

	return tutorial


def tutorial_stuff():
	tutorials = []
	for tutorial_name in TUTORIAL_NAMES:
		tutorial = get_tutorial(tutorial_name)
		if not tutorial:
			print(f"\tSomething went wrong with tutorial: '{tutorial_name}'")
			continue

		tutorials.append(tutorial)
		print(f"\tAdded tutorial: '{tutorial_name}'")

	jo = {}
	jo['tutorials'] = tutorials
	tutorials_json_path = os.path.join(OUTPUT_DIRPATH, "tutorials.json")
	with open(tutorials_json_path, 'w') as f:
		json.dump(jo, f, indent="\t", sort_keys=True)
	print(f"Saved: {tutorials_json_path} ({len(tutorials)} tutorials)")


def main():
	# snippet_stuff()
	tutorial_stuff()


if __name__ == '__main__':
	main()
