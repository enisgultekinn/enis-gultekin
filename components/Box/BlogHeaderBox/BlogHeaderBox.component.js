import React from 'react'
import styles from './BlogHeaderBox.module.scss'
import { t } from '@/locales'

const BlogHeaderBox = ({ subtitle }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{t('_pageName.blog')}</h1>
			<h2 className={styles.subtitle}>{subtitle}</h2>
		</div>
	)
}

export default BlogHeaderBox
