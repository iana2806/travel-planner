import { Outlet, NavLink } from 'react-router-dom';
import styles from './AppLayout.module.scss';

export default function AppLayout() {
	return (
		<div className={styles.layout}>
			{/* Sidebar */}
			<aside className={styles.sidebar}>
				<h3>Планировщик путешествий</h3>

				<nav className={styles.nav}>
					<NavLink to='/' end className={styles.link}>
						Главная
					</NavLink>
					<NavLink to='/trips/1' className={styles.link}>
						Поездки
					</NavLink>
				</nav>
			</aside>

			{/* Main */}
			<div className={styles.main}>
				{/* Header */}
				<header className={styles.header}>Header</header>
				{/* Content */}
				<main className={styles.content}>
					<Outlet />
				</main>
			</div>
		</div>
	);
}
