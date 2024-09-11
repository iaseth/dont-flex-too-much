import createMDX from '@next/mdx';



/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: [
		// 'js', 'jsx', 'md', 'ts',
		'mdx', 'tsx'
	],
	output: 'export'
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
});

// export default nextConfig;
export default withMDX(nextConfig);
