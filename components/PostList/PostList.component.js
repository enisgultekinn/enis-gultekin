import React from 'react'
import styles from './PostList.module.scss'
import { dateToString } from '@/utils/date'
import Link from 'next/link'
import { timeToRead } from '@/utils/helpers'

const PostList = ({ posts, limit = 4, isListPreview }) => {
	const visiblePosts = posts.slice(0, limit).sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))

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
							<h6 className={styles.title}>{post.title}</h6>
							<div className={styles.postInfoBox}>
								<p className={styles.postInfoText}>{post.category}</p>
								<i className={`${styles.postInfoText} bi bi-stars`}></i>
								<p className={styles.postInfoText}>{timeToRead(post.content)} dakika</p>
							</div>
							<p className={styles.subtitle}>{post.subtitle}</p>
							<div className={styles.postInfoBox}>
								<p className={styles.postInfoText}>{dateToString(post.createdDate)}</p>
							</div>
						</header>
					</article>
				</Link>
			))}
		</>
	)
}

export default PostList
