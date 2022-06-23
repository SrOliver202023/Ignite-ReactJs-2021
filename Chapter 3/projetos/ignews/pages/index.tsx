import Head from "../node_modules/next/head";
import styles from "./style.module.scss";

export default function Home() {
	return (
		<>
			<Head>
				<title>Início | ig.news </title>
			</Head>
			<div className={styles.container}>
				<h1>Hello World!</h1>
			</div>
		</>
	);
}
