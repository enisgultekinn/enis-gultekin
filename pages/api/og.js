import { ImageResponse } from '@vercel/og'

export const config = {
	runtime: 'edge'
}

const font = fetch(new URL('../../public/fonts/Lora-SemiBold.ttf', import.meta.url)).then((res) => res.arrayBuffer())

export default async function handler(request) {
	try {
		const { searchParams } = request.nextUrl
		const hasTitle = searchParams.get('title')
		const title = hasTitle ? hasTitle.slice(0, 100) : 'eg.'

		const fontData = await font

		return new ImageResponse(
			(
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						paddingLeft: '120px',
						paddingRight: '120px',
						paddingTop: '160px',
						height: '100%',
						width: '100%',
						backgroundImage: 'url(http://localhost:3001/og-cover.png)'
					}}
				>
					<div
						style={{
							fontSize: '96px',
							lineHeight: '112px',
							color: '#000000',
							whiteSpace: 'pre-wrap',
							letterSpacing: '-1px'
						}}
					>
						{title}
					</div>
				</div>
			),
			{
				width: 1920,
				height: 1080,
				fonts: [
					{
						data: fontData,
						name: 'Lora',
						style: 'normal'
					}
				]
			}
		)
	} catch (e) {
		return new Response(`Failed to generate the image`, {
			status: 500
		})
	}
}
