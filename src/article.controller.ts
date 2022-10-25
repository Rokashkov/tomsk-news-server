import { Controller, Get, Post, Req, Res } from '@nestjs/common'
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
		const article = await this.articleService.createArticle(req.body)
		return article
	}

	@Post('/edit')
	async editArticle(@Req() req: Request) {
		const article = await this.articleService.editArticle(req.body)
		return article
	}

	@Get('/')
	async getOneArticle(@Req() req: Request) {
		const id = Number(req.query.id)
		const article = await this.articleService.getOneArticle(id)
		return article
	}
}