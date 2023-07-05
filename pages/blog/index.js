import { getRedis } from '@/api/redis'
import { BlogHeaderBox, PostList } from '@/components'
import MainLayout from '@/layouts/MainLayout.component'

export default function Home({ blogData, blogInfoData }) {
	return (
		<MainLayout>
			<main style={{ padding: '12px 16px' }}>
				<BlogHeaderBox subtitle={blogInfoData.info} />
				<PostList posts={blogData} />
			</main>
		</MainLayout>
	)
}

export async function getStaticProps() {
	const blogData = await getRedis('blog', 'data')
	const blogInfoData = await getRedis('blogInfo', 'data')
	return {
		props: {
			blogData,
			blogInfoData
		},
		revalidate: 1
	}
}
