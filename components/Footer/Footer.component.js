import React from 'react'
import styles from './Footer.module.scss'
import socialLinks from '@/constants/socialLinks'

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.linksBox}>
				{socialLinks.map((item, index) => (
					<a href={item.path} key={index} className={styles.link}>
						<i className={`bi bi-${item.icon} ${styles.linkIcon}`} />
						{item.name}
						{index !== socialLinks.length - 1 && <span className={styles.linkRightBorder} />}
					</a>
				))}
			</div>

			<a href="https://github.com/enisgultekinn/enis-gultekin" target="_blank" className={styles.link}>
				Bu websitesinin kodlarına Github üzerinden erişebilirsiniz.
			</a>
		</footer>
	)
}

export default Footer
