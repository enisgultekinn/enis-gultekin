import React from 'react'
import styles from './MainLayout.module.scss'
import { Inter } from 'next/font/google'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { metaData } from '@/config'
import { Footer, Navbar } from '@/components'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap'
})

const MainLayout = ({ children, openGraph }) => {
	const router = useRouter()
	const page = router.pathname.split('/')[1]
	const pageName = page.slice(0, 1).toLocaleUpperCase() + page.slice(1, page.length) || 'Ana Sayfa'
	const description = openGraph?.description || metaData.description[page] || metaData.description.default
	const metaUrl = metaData.url + router.asPath

	return (
		<>
			<NextSeo
				canonical={metaUrl}
				title={openGraph?.title || pageName}
				description={description}
				openGraph={openGraph}
			/>
			<div className={`${styles.layout} ${inter.className}`}>
				<div className={styles.gradientBox} />
				<div className={styles.container}>
					<span>
						<Navbar />
						{children}
					</span>
					<span>
						<Footer />
					</span>
				</div>
			</div>
		</>
	)
}

export default MainLayout
