/// <reference path="../global.d.ts" />

import { NestFactory } from '@nestjs/core'
import { ArticleModule } from './article.module'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import dotEnv from 'dotenv'

dotEnv.config()

const start = async () => {
	try {
		const PORT = process.env.PORT
		const  createApp = async () => {
			if (process.env.NODE_ENV === 'production') {
				const __certs = resolve(__dirname, '..', '..', '..', '..', 'etc', 'letsencrypt', 'live', 'tomsk-news.ru')
				const httpsOptions = {
					key: readFileSync(resolve(__certs, 'privkey.pem')),
					cert: readFileSync(resolve(__certs, 'privkey.pem'))
				}
				const app = await NestFactory.create(
					ArticleModule,
					{
						httpsOptions: httpsOptions,
						cors: true
					}
				)
				return app
			}
			if (process.env.NODE_ENV === 'development') {
				const app = await NestFactory.create(
					ArticleModule,
					{
						cors: true
					}
				)
				return app
			}
		}

		const app = await createApp()
		
		await app.listen(PORT, () => {
			console.log(`Server has been started on PORT: ${ PORT }...`)
		})
	} catch (err) {
		console.log(err)
	}
}

start()