import { BlogPostBox } from '@/components'
import MainLayout from '@/layouts/MainLayout.component'
import redis from '@/lib/redis'

export default function BlogItem({ blog }) {
	return (
		<MainLayout>
			<main>
				<BlogPostBox title={blog.title} content={blog.content} />
			</main>
		</MainLayout>
	)
}

export async function getStaticPaths() {
	const blogData = (await redis.hget('blog', 'data')) || []
	return {
		paths: blogData.map((blog) => ({
			params: {
				slug: blog.slug
			}
		})),
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const blogData = (await redis.hget('blog', 'data')) || []
	const blog = blogData.find((item) => item.slug === params.slug)

	return {
		props: { blog },
		revalidate: 1
	}
}
