import { t } from '@/locales'

export const dateToString = (item) => {
	const date = new Date(item)
	const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
	const month = t(`_months.m${date.getMonth()}`)
	const year = date.getFullYear()

	return day + ' ' + month + ' ' + year
}
