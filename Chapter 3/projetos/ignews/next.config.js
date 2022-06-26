/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	typescript: {
		tsconfigPath: "tsconfig.json",
		ignoreBuildErrors: true,
		generateEtags: false,
	},
};

module.exports = nextConfig;
