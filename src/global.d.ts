declare namespace NodeJS {
	interface ProcessEnv {
		PORT: number
	}
}

interface ArticleBody {
	title: string;
	description: string | undefined;
	keywords: string[] | undefined;
	content: Array<{ tag: string, text: string }> | undefined
}