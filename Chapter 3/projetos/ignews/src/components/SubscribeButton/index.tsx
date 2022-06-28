import { signIn, useSession } from "next-auth/react";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
	priceId: String;
}

// Security Locales
// getServerProps (SSR)
// getStaticProps (SSG)
// API Routes

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
	const session = useSession();

	async function handleSubscribeButton() {
		if (session.status !== "authenticated") {
			signIn("github");
			return;
		}

		// Checkout Session

		try {
			const response = await api.post("/subscribe");
			const { sessionId } = response.data;

			const stripe = await getStripeJs();

			await stripe.redirectToCheckout({ sessionId: sessionId });
		} catch (error) {
			console.log(error);
			alert(error.message);
		}
	}

	return (
		<button
			type="button"
			className={styles.subscribeButton}
			onClick={handleSubscribeButton}
		>
			Subscribe now
		</button>
	);
}
