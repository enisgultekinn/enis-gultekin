export const substringText = (text, limit) => {
	const subsText = text.substring(text, limit)
	return `${subsText}...`
}
