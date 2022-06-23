/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	typescript: {
		tsconfigPath: "src/tsconfig.json",
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
