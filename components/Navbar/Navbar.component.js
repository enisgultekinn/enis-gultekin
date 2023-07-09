import React from 'react'
import menu from '@/constants/menu'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import { t } from '@/locales'
import { LayoutGroup, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar = () => {
	let pathname = usePathname() || '/'
	if (pathname.includes('/blog/')) {
		pathname = '/blog'
	}

	return (
		<LayoutGroup>
			<nav className={styles.container}>
				{menu.map((item, index) => {
					const isActive = item.path === pathname
					return (
						<Link href={item.path} key={index} className={styles.menuLink}>
							{t(`_menuLinks.${item.name}`)}
							{isActive ? <motion.div className={styles.underline} layoutId="underline" /> : null}
						</Link>
					)
				})}
			</nav>
		</LayoutGroup>
	)
}

export default Navbar
