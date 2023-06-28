import '../styles/reset.scss'
import '../styles/main.scss'

export default function MyApp({ Component, pageProps: { ...pageProps } }) {
	return <Component {...pageProps} />
}
