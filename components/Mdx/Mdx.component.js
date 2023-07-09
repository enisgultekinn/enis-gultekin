import React from 'react'
import styles from './Mdx.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Balancer } from 'react-wrap-balancer'

const CustomLink = (props) => {
	const href = props.href

	if (href.startsWith('/')) {
		return (
			<Link className={styles.link} href={href} {...props}>
				{props.children}
			</Link>
		)
	}

	if (href.startsWith('#')) {
		return (
			<a className={styles.link} {...props}>
				{' '}
				{props.children}
			</a>
		)
	}

	return (
		<a className={styles.link} target="_blank" rel="noopener noreferrer" {...props}>
			{props.children}
		</a>
	)
}

const CodeBlock = ({ children }) => {
	return <pre className={styles.pre}>{children}</pre>
}

const ImageComp = (props) => {
	return <img alt={props.alt} className={styles.image} {...props} />
}

export default function useMDXComponents(components) {
	components = {
		h1: (props) => (
			<h1 className={styles.h1} {...props}>
				<Balancer> {props.children}</Balancer>
			</h1>
		),
		h3: (props) => (
			<h3 className={styles.h3} {...props}>
				<Balancer> {props.children}</Balancer>
			</h3>
		),
		p: (props) => <p className={styles.p}>{props.children}</p>,
		a: CustomLink,
		blockquote: (props) => <blockquote className={styles.blockquote}>{props.children}</blockquote>,
		pre: CodeBlock,
		img: ImageComp,
		hr: () => <hr className={styles.hr} />
	}
	return { ...components }
}
