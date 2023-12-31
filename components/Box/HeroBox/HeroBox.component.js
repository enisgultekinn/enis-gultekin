import React from 'react'
import styles from './HeroBox.module.scss'
import Image from 'next/image'

const HeroBox = ({ children, subtitle, content, ...props }) => {
	return (
		<>
			<div className={styles.personDetailBox}>
				<Image src="/eg.jpeg" className={styles.image} alt="avatar" width={96} height={96} />
				<span className={styles.personDetailTextBox}>
					<h1 className={styles.title}>Enis Gültekin</h1>
					<h3 className={styles.subtitle}>{subtitle}</h3>
				</span>
			</div>
			<div className={styles.content}>{content}</div>
		</>
	)
}

export default HeroBox
