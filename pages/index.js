import { getRedis } from '@/api/redis'
import { HeroBox, PostList } from '@/components'
import MainLayout from '@/layouts/MainLayout.component'
import React from 'react'

export default function Home({ homeData, blogData }) {
	console.log(blogData)
	return (
		<MainLayout>
			<section id="hero">
				<HeroBox subtitle={homeData.title} content={homeData.heroText} />
			</section>
			<section id="homeBlogPreview">
				<PostList posts={blogData} isListPreview={true} />
			</section>
		</MainLayout>
	)
}

export async function getStaticProps() {
	const homeData = await getRedis('home', 'data')
	const blogData = await getRedis('blog', 'data')

	return {
		props: {
			homeData,
			blogData
		},
		revalidate: 1
	}
}
