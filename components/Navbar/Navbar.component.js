import React from 'react'
import menu from '@/constants/menu'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import { t } from '@/locales'

const Navbar = () => {
	return (
		<nav className={styles.container}>
			<span>
				{menu.map((item, index) => (
					<Link href={item.path} key={index} className={styles.menuLink}>
						{t(`_menuLinks.${item.name}`)}
					</Link>
				))}
			</span>
		</nav>
	)
}

export default Navbar
