import json
import os



SNIPPETS_DIRPATH = "snippets"
MDX_DIRPATH = "src/App/snippets"


def get_file_content(filepath):
	if not os.path.isfile(filepath):
		return ""

	with open(filepath) as f:
		content = f.read()

	content = content.strip().replace("\t", "  ")
	return content


def get_mdx_content(snippet):
	mdx = ""
	mdx += f"\n{snippet['html']}\n\n"
	mdx += f"\n<style>\n{snippet['css']}\n</style>\n\n"
	mdx += f"\n```html\n{snippet['html']}\n```\n\n"
	mdx += f"\n```css\n{snippet['css']}\n```\n\n"
	return mdx


def main():
	filenames = os.listdir(SNIPPETS_DIRPATH)
	html_filenames = [x for x in filenames if x.endswith('.html')]
	html_filenames.sort()

	snippets = []
	for html_filename in html_filenames:
		code_name = html_filename[:-5]
		css_filename = f"{code_name}.css"
		mdx_filename = f"{code_name}.mdx"

		html_filepath = os.path.join(SNIPPETS_DIRPATH, html_filename)
		css_filepath = os.path.join(SNIPPETS_DIRPATH, css_filename)
		mdx_filepath = os.path.join(MDX_DIRPATH, mdx_filename)

		print(f"Codename: {code_name}")
		print(f"\tHTML: {html_filepath}")
		print(f"\t CSS: {css_filepath}")

		snippet = {}
		snippet['name'] = code_name
		snippet['html'] = get_file_content(html_filepath)
		snippet['css'] = get_file_content(css_filepath)
		snippets.append(snippet)
		print(f"\t\tAdded '{code_name}' snippet to JSON.")
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


if __name__ == '__main__':
	main()
