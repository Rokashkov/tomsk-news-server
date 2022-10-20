import { Injectable } from '@nestjs/common'
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
		return article
	}

	async createArticle (title: string, content: string): Promise<Article> {
		const article = await prisma.article.create({
			data: {}
		})
		return article
	}
}