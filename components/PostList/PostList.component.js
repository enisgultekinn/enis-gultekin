import { substringText } from '@/utils/string'
import React, { useEffect, useState } from 'react'
import styles from './PostList.module.scss'
import { dateToString } from '@/utils/date'
import Link from 'next/link'

const PostList = ({ posts, limit = 4, isListPreview }) => {
	const [visiblePosts, setVisiblePosts] = useState()

	useEffect(() => {
		const setPostsVisible = () => {
			const limitedArr = posts.slice(0, limit)
			setVisiblePosts(limitedArr)
		}

		setPostsVisible()
	}, [limit])

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
			{visiblePosts &&
				visiblePosts.map((post, index) => (
					<a href="#" key={index}>
						<article className={styles.postBox}>
							<p className={styles.title}>{post.title}</p>
							<p className={styles.subtitle}>{substringText(post.content, 154)}</p>
							<div className={styles.postFooterBox}>
								<aside className={styles.postFooterText}>{post.category}</aside>
								<i class={`${styles.postFooterText} bi bi-stars`}></i>

								<aside className={styles.postFooterText}>{dateToString(post.createdDate)}</aside>
							</div>
						</article>
					</a>
				))}
		</>
	)
}

export default PostList
