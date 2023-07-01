import { getRedis } from '@/api/redis'
import { HeroBox } from '@/components'
import MainLayout from '@/layouts/MainLayout.component'
import React from 'react'

export default function Home({ homeData }) {
	return (
		<MainLayout>
			<HeroBox subtitle={homeData.title} content={homeData.heroText} />
		</MainLayout>
	)
}

export async function getStaticProps() {
	const homeData = await getRedis('home', 'data')

	return {
		props: {
			homeData
		},
		revalidate: 1
	}
}
