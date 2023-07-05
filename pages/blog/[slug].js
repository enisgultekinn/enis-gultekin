import MainLayout from '@/layouts/MainLayout.component'
import { serialize } from 'next-mdx-remote/serialize'
import redis from '@/lib/redis'
import { MDXRemote } from 'next-mdx-remote'

import { useMDXComponents } from '@/components/Mdx/Mdx.component'

export default function BlogItem({ source }) {
	return (
		<MainLayout>
			<main>
				<article>
					<MDXRemote {...source} components={useMDXComponents()} />
				</article>
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

	const mdxSource = await serialize(blog.content)

	return { props: { source: mdxSource } }
}
