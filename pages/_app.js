import '../styles/reset.scss'
import '../styles/main.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function MyApp({ Component, pageProps: { ...pageProps } }) {
	return <Component {...pageProps} />
}
