import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Article } from '@prisma/client'
import IArticle from 'interfaces/IArticle'
import prisma from './prisma'

@Injectable()
export class ArticleService {
	async getAllArticles (): Promise<Article[]> {
		const articles = await prisma.article.findMany()
		if (!articles) {
			throw new HttpException(`Статья не найдена`, HttpStatus.BAD_REQUEST)
		}
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

	async createArticle (body: IArticle): Promise<Article> {
		const { title, description, keywords, content } = body
		const article = await prisma.article.create({
			data: {
				title,
				description,
				keywords,
				content
			}
		})
		return article
	}

	async editArticle (body: IArticle): Promise<Article> {
		const { id, title, description, keywords, content } = body
		const article = await prisma.article.update({
			where: {
				id: id
			},
			data: {
				title,
				description,
				keywords,
				content
			}
		})
		return article
	}
}