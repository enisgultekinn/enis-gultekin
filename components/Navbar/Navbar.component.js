import React from 'react'
import menu from '@/constants/menu'
import socialLinks from '@/constants/socialLinks'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import { t } from '@/locales'
import Image from 'next/image'

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
			<span>
				{socialLinks.map((item, index) => (
					<a href={item.path} key={index}>
						<Image src={item.icon} width={18} height={18} alt={item.path} className={styles.socialLink} />
					</a>
				))}
			</span>
		</nav>
	)
}

export default Navbar
