import { getRedis } from '@/api/redis'
import { HeroBox, PostList } from '@/components'
import MainLayout from '@/layouts/MainLayout.component'
import { getViews } from '@/utils/view'
import React from 'react'

export default function Home({ homeData, blogData, blogViewsData }) {
	return (
		<MainLayout>
			<main>
				<section id="hero">
					<HeroBox subtitle={homeData.title} content={homeData.heroText} />
				</section>
				<section id="homeBlogPreview">
					<PostList posts={blogData} isListPreview={true} blogViews={blogViewsData} />
				</section>
			</main>
		</MainLayout>
	)
}

export async function getStaticProps() {
	const homeData = await getRedis('home', 'data')
	const blogData = await getRedis('blog', 'data')
	const blogViewsData = await getViews()

	return {
		props: {
			homeData,
			blogData,
			blogViewsData
		},
		revalidate: 1
	}
}
