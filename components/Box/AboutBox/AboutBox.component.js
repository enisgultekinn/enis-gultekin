import React from 'react'
import styles from './AboutBox.module.scss'
import { t } from '@/locales'

const AboutBox = ({ data }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{t('_pageName.about')}</h1>
			<p className={styles.content}>{data.aboutMe}</p>
		</div>
	)
}

export default AboutBox
