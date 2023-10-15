import { getRedis } from '@/api/redis'
import { BlogHeaderBox, PostList } from '@/components'
import MainLayout from '@/layouts/MainLayout.component'
import { getViews } from '@/utils/view'

export default function Blog({ blogData, blogInfoData, blogViewsData }) {
	return (
		<MainLayout>
			<main>
				<section>
					<BlogHeaderBox subtitle={blogInfoData.info} />
					<PostList posts={blogData} blogViews={blogViewsData} />
				</section>
			</main>
		</MainLayout>
	)
}

export async function getStaticProps() {
	const blogData = await getRedis('blog', 'data')
	const blogInfoData = await getRedis('blogInfo', 'data')
	const blogViewsData = await getViews()

	return {
		props: {
			blogData,
			blogInfoData,
			blogViewsData
		}
	}
}
