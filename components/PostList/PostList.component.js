import { substringText } from '@/utils/string'
import React, { useEffect, useState } from 'react'
import styles from './PostList.module.scss'
import { dateToString } from '@/utils/date'
import Link from 'next/link'

const PostList = ({ posts, limit = 4, isListPreview }) => {
	const visiblePosts = posts.slice(0, limit)

	return (
		<>
			{isListPreview && (
				<div className={styles.listHeaderBox}>
					<h5 className={styles.listTitle}>Son Yazılarım</h5>
					<Link href="/blog" className={styles.linkText}>
						Tüm Yazıları Göster <i className={`bi bi-arrow-up-right ${styles.linkText}`}></i>
					</Link>
				</div>
			)}
			{visiblePosts.map((post, index) => (
				<Link href={`/blog/${post.slug}`} key={index}>
					<article className={styles.postBox}>
						<header>
							<p className={styles.title}>{post.title}</p>
							<p className={styles.subtitle}>{post.subtitle}</p>
							<div className={styles.postFooterBox}>
								<p className={styles.postFooterText}>{post.category}</p>
								<i className={`${styles.postFooterText} bi bi-stars`}></i>
								<p className={styles.postFooterText}>{dateToString(post.createdDate)}</p>
							</div>
						</header>
					</article>
				</Link>
			))}
		</>
	)
}

export default PostList
