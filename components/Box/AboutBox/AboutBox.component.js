import React from 'react'
import styles from './AboutBox.module.scss'

const AboutBox = ({ data }) => {
	console.log(data)
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>About</h1>
			<p className={styles.content}>{data.aboutMe}</p>
		</div>
	)
}

export default AboutBox
