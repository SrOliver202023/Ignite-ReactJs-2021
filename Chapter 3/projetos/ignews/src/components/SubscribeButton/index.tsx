import { signIn, useSession } from "next-auth/react";
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

	function handleSubscribeButton() {
		if (session.status !== "authenticated") {
			signIn("github");
			return;
		}

		// Checkout Session
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
