import { Navbar } from '@/components'
import React from 'react'
import styles from './MainLayout.module.scss'

const MainLayout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<div className={styles.gradientBox} />
			<div className={styles.container}>
				<Navbar />
				{children}
			</div>
		</div>
	)
}

export default MainLayout
