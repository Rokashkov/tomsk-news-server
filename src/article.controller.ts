import { Controller, Get, Post, Req } from '@nestjs/common'
import { Request } from 'express'
import { ArticleService } from './article.service'

@Controller('/api/article')
export class ArticleController {
	constructor(private articleService: ArticleService) {}

	@Get('/all')
	async getAllArticles() {
		const articles = await this.articleService.getAllArticles()
		return articles
	}

	@Post('/create')
	async createArticle(@Req() req: Request) {
		const { title, content } = req.body
		const article = await this.articleService.createArticle(title, content)
		return article
	}

	@Get('/')
	async getOneArticle(@Req() req: Request) {
		const id = Number(req.query.id)
		const article = await this.articleService.getOneArticle(id)
		return article
	}
}