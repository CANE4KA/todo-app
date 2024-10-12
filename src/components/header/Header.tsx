import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<a href='/'>Todo App by CANE4KA</a>
			</div>
		</header>
	)
}
