/// <reference path="./global.d.ts" />

import { NestFactory } from '@nestjs/core'
import { ArticleModule } from './article.module'
import dotEnv from 'dotenv'

dotEnv.config()

const start = async () => {
	try {
		const PORT = process.env.PORT
		const app = await NestFactory.create(ArticleModule)

		app.use

		await app.listen(PORT, () => {
			console.log(`Server has been started on PORT: ${ PORT }...`)
		})
	} catch (err) {
		console.log(err)
	}
}

start()