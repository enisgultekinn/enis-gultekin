import React from 'react'
import styles from './Footer.module.scss'
import socialLinks from '@/constants/socialLinks'

const Footer = () => {
	return (
		<footer className={styles.container}>
			{socialLinks.map((item, index) => (
				<a href={item.path} key={index} className={styles.link}>
					{item.name}
					{index !== socialLinks.length - 1 && <span className={styles.linkRightBorder} />}
				</a>
			))}
		</footer>
	)
}

export default Footer
