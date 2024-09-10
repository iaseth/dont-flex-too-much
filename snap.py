import json
import os



SNIPPETS_DIRPATH = "snippets"


def get_file_content(filepath):
	if not os.path.isfile(filepath):
		return ""

	with open(filepath) as f:
		content = f.read()

	content = content.replace("\t", "  ")
	return content


def main():
	filenames = os.listdir(SNIPPETS_DIRPATH)
	html_filenames = [x for x in filenames if x.endswith('.html')]
	html_filenames.sort()

	snippets = []
	for html_filename in html_filenames:
		code_name = html_filename[:-5]
		css_filename = f"{code_name}.css"
		html_filepath = os.path.join(SNIPPETS_DIRPATH, html_filename)
		css_filepath = os.path.join(SNIPPETS_DIRPATH, css_filename)
		print(f"Codename: {code_name}")
		print(f"\tHTML: {html_filepath}")
		print(f"\t CSS: {css_filepath}")
		snippet = {}
		snippet['name'] = code_name
		snippet['html'] = get_file_content(html_filepath)
		snippet['css'] = get_file_content(css_filepath)
		snippets.append(snippet)

	jo = {}
	jo['snippets'] = snippets
	snippets_json_path = "src/App/snippets.json"
	with open(snippets_json_path, 'w') as f:
		json.dump(jo, f, indent="\t")
	print(f"Saved: {snippets_json_path} ({len(snippets)} snippets)")


if __name__ == '__main__':
	main()
