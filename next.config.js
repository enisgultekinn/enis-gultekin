/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	i18n: {
		locales: ['tr', 'en'],
		defaultLocale: 'tr',
		localeDetection: false
	}
}

module.exports = nextConfig
