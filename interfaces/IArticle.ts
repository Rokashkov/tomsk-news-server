interface IArticle {
	id: number | undefined
	title: string
	description: string
	keywords: string[]
	content: content
	createdAt: string
	updatedAt: string
}

export default IArticle