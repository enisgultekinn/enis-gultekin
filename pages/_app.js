import '../styles/reset.scss'
import '../styles/main.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { DefaultSeo } from 'next-seo'
import { metaData } from '@/config'
import { useRouter } from 'next/router'
import { t } from '@/locales'

export default function MyApp({ Component, pageProps: { ...pageProps } }) {
	return (
		<>
			<DefaultSeo
				title={metaData.title}
				description={metaData.description}
				twitter={{
					handle: metaData.twitterUsername,
					site: metaData.twitterUsername,
					cardType: 'summary_large_image'
				}}
			/>
			<Component {...pageProps} />
		</>
	)
}
