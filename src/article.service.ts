import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Article } from '@prisma/client'
import prisma from './prisma'

@Injectable()
export class ArticleService {
	async getAllArticles (): Promise<Article[]> {
		const articles = await prisma.article.findMany()
		return articles
	}

	async getOneArticle (id: number): Promise<Article> {
		const article = await prisma.article.findUnique({
			where: {
				id: id
			}
		})
		if (!article) {
			throw new HttpException(`Статья не найдена`, HttpStatus.BAD_REQUEST)
		}
		return article
	}

	async createArticle (body: ArticleBody): Promise<Article> {
		const article = await prisma.article.create({
			data: {
				title: body.title,
				description: body.description,
				keywords: body.keywords,
				content: body.content
			}
		})
		return article
	}
}