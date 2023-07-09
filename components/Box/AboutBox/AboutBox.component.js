import React from 'react'
import styles from './AboutBox.module.scss'
import { t } from '@/locales'
import { MDXRemote } from 'next-mdx-remote'
import { Mdx } from '@/components'

const AboutBox = ({ content }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{t('_pageName.about')}</h1>
			<div className={styles.contentBox}>
				<MDXRemote {...content} components={Mdx} />
			</div>
		</div>
	)
}

export default AboutBox
