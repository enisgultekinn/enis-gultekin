import { getRedis } from '@/api/redis'
import { AboutBox, Mdx } from '@/components'
import MainLayout from '@/layouts/MainLayout.component'
import { serialize } from 'next-mdx-remote/serialize'

export default function About({ source }) {
	return (
		<MainLayout>
			<main>
				<AboutBox content={source} />
			</main>
		</MainLayout>
	)
}

export async function getStaticProps() {
	const aboutData = await getRedis('about', 'data')
	const mdxSource = await serialize(aboutData.aboutMe)

	return {
		props: {
			source: mdxSource,
			aboutData: aboutData
		}
	}
}
