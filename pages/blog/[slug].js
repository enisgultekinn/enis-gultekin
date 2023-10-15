import MainLayout from '@/layouts/MainLayout.component'
import { serialize } from 'next-mdx-remote/serialize'
import redis from '@/lib/redis'
import { MDXRemote } from 'next-mdx-remote'
import { metaData } from '@/config'
import { viewCounter } from '@/utils/view'
import { Mdx } from '@/components'

export default function BlogItem({ blog, source }) {
	const { title, subtitle, slug } = blog
	const ogImage = `${metaData.url}/api/og?title=${title}`
	const openGraph = {
		title: title,
		description: subtitle,
		type: 'article',
		url: `${metaData.url}/blog/${slug}`,
		images: [
			{
				url: ogImage
			}
		]
	}
	return (
		<MainLayout openGraph={openGraph}>
			<section>
				<main>
					<article>
						<MDXRemote {...source} components={Mdx} />
					</article>
				</main>
			</section>
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
	await viewCounter(params.slug)
	const mdxSource = await serialize(blog.content)

	return { props: { source: mdxSource, blog: blog }, revalidate: 5 }
}
