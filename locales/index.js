import { useRouter } from 'next/router'
import tr from './tr'
import en from './en'

export const t = (value, params) => {
	const router = useRouter()
	const { locale } = router
	const localeData = locale === 'tr' ? tr : en
	let getValue = localeData[value]

	if (value.includes('.')) {
		const splitValue = value.split('.')
		for (let a = 0; a < splitValue.length; a++) {
			if (a === 0) {
				getValue = localeData[splitValue[0]]
			} else {
				getValue = getValue && getValue[splitValue[a]]
			}
		}
	}

	if (params) {
		const paramKeys = Object.keys(params)
		for (let i = 0; i < paramKeys.length; i++) {
			const key = paramKeys[i]
			getValue = getValue.replace(`{{${key}}}`, params[key])
		}
	}

	return getValue
}
