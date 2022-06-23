import { Head, Html, Main, NextScript } from "../node_modules/next/document";

export default function MyDocument() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<title>ig.news</title>

				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}