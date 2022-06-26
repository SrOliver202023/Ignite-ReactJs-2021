import { GetServerSideProps } from "next";

import styles from "./home.module.scss";

import Head from "../../node_modules/next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

interface Product {
	priceId: String;
	amount: Number;
}
interface Props {
	product: Product;
}

export default function Home({ product }: Props) {
	const { amount, priceId } = product;

	console.log(priceId);
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
						<span>for {`${amount}`} month</span>
					</p>
					<SubscribeButton priceId={priceId} />
				</section>
				<img src="/images/avatar.svg" alt="Girl coing" />
			</main>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	// const price = await stripe.prices.retrieve("price_1LEwu4K3SrZQZ3noF316VMvy", {
	// 	expand: ["product"],
	// });
	const price = await stripe.prices.retrieve("price_1LEwu4K3SrZQZ3noF316VMvy");

	const product = {
		priceId: price.id,
		amount: new Intl.NumberFormat("en-us", {
			style: "currency",
			currency: "USD",
		}).format(price.unit_amount / 100),
	};

	return {
		props: {
			product,
		},
	};
};
