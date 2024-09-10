import json
import os



SNIPPETS_DIRPATH = "snippets"
MDX_DIRPATH = "src/App/snippets"

PRODUCE_MDX_CONTENT = False

SNIPPET_NAMES = [
	'flex',
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


def main():
	snippets = []
	snippets_scss = ""
	for code_name in SNIPPET_NAMES:
		html_filename = f"{code_name}.html"
		css_filename = f"{code_name}.css"
		json_filename = f"{code_name}.json"

		html_filepath = os.path.join(SNIPPETS_DIRPATH, html_filename)
		css_filepath = os.path.join(SNIPPETS_DIRPATH, css_filename)
		json_filepath = os.path.join(SNIPPETS_DIRPATH, json_filename)

		print(f"Codename: {code_name}")
		print(f"\tHTML: {html_filepath}")
		print(f"\t CSS: {css_filepath}")

		snippet = {}
		snippet['name'] = code_name
		snippet['html'] = get_file_content(html_filepath)
		snippet['css'] = get_file_content(css_filepath)
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
	snippets_json_path = "src/App/snippets.json"
	with open(snippets_json_path, 'w') as f:
		json.dump(jo, f, indent="\t")
	print(f"Saved: {snippets_json_path} ({len(snippets)} snippets)")

	snippets_scss_path = "src/App/snippets.scss"
	with open(snippets_scss_path, 'w') as f:
		f.write(snippets_scss)
	print(f"Saved: {snippets_scss_path} ({len(snippets)} snippets)")


if __name__ == '__main__':
	main()
