import React from 'react'
import styles from './BlogPostBox.module.scss'

const BlogPostBox = ({ title, content }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.content}>{content}</p>
		</div>
	)
}

export default BlogPostBox
