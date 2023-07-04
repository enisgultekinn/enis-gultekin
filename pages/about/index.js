import { getRedis } from '@/api/redis'
import { AboutBox } from '@/components'
import MainLayout from '@/layouts/MainLayout.component'

export default function About({ aboutData }) {
	return (
		<MainLayout>
			<main>
				<AboutBox data={aboutData} />
			</main>
		</MainLayout>
	)
}

export async function getStaticProps() {
	const aboutData = await getRedis('about', 'data')

	return {
		props: {
			aboutData
		},
		revalidate: 1
	}
}
