/** @type {import('next').NextConfig} */

const path = require('path')

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		// If you use remark-gfm, you'll need to use next.config.mjs
		// as the package is ESM only
		// https://github.com/remarkjs/remark-gfm#install
		remarkPlugins: [],
		rehypePlugins: []
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	}
})

const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	i18n: {
		locales: ['tr', 'en'],
		defaultLocale: 'tr',
		localeDetection: false
	},
	experimental: {
		mdxRs: true
	}
}

module.exports = withMDX(nextConfig)
