import styles from "./styles.module.scss";

export function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<picture>
					<img src="/images/logo.svg" alt="ig.news" />
				</picture>
				<nav>
					<a className={styles.active}>Home</a>
					<a>Posts</a>
				</nav>
			</div>
		</header>
	);
}
