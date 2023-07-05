import { Navbar } from '@/components'
import React from 'react'
import styles from './MainLayout.module.scss'
import { Inter } from 'next/font/google'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap'
})

const MainLayout = ({ children }) => {
	return (
		<div className={`${styles.layout} ${inter.className}`}>
			<div className={styles.gradientBox} />
			<div className={styles.container}>
				<Navbar />
				{children}
			</div>
		</div>
	)
}

export default MainLayout
