import React from 'react'
import styles from './PostList.module.scss'
import { dateToString } from '@/utils/date'
import Link from 'next/link'
import { timeToRead } from '@/utils/helpers'
import { motion } from 'framer-motion'

const PostList = ({ posts, limit, isListPreview, blogViews }) => {
	const visiblePosts = posts.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate)).slice(0, limit)

	const getPostViews = (slug) => {
		const index = blogViews.findIndex((item) => item.slug === slug)
		return blogViews[index]?.views || 0
	}

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
								<motion.span
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3, delay: 0.2 }}
									className={styles.postInfoText}
								>
									<i className={`bi bi-chevron-double-right ${styles.postInfoText}`}></i>
									<p className={styles.postInfoText}>{getPostViews(post.slug)} Görüntülenme</p>
								</motion.span>
							</div>
						</header>
					</article>
				</Link>
			))}
		</>
	)
}

export default PostList
