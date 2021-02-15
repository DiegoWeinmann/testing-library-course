import { rest } from 'msw'

export const handlers = [
	rest.get('http://localhost:3030/scoops', (_req, res, ctx) => {
		return res(
			ctx.json([
				{
					name: 'Chololate',
					imagePath: '/image/chocolate.png'
				},
				{
					name: 'Vanilla',
					imagePath: '/image/vanilla.png'
				}
			])
		)
	})
]
