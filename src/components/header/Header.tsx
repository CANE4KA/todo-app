import cn from 'clsx'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<NavLink
					to='/'
					className={({ isActive }) =>
						cn(styles.link, { [styles.active]: isActive })
					}
				>
					Home
				</NavLink>
				<NavLink
					to='/todo'
					className={({ isActive }) =>
						cn(styles.link, { [styles.active]: isActive })
					}
				>
					Todo
				</NavLink>
			</div>
		</header>
	)
}
