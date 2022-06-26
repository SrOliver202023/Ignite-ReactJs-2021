import React from "react";

import styles from "./home.module.scss";

import Head from "../../node_modules/next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Início | ig.news </title>
			</Head>

			<main className={styles.contentContainer}>
				<section className={styles.hero}>
					<span>👏 Hey, welcome</span>
					<h1>
						News about he <span>React</span>world.
					</h1>
					<p>
						Get acess to all the publications <br />
						<span>for $9.90 month</span>
					</p>
				</section>
				<img src="/images/avatar.svg" alt="Girl coing" />
			</main>
		</>
	);
}
