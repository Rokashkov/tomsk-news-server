declare namespace NodeJS {
	interface ProcessEnv {
		PORT: number
		NODE_ENV: string
	}
}

type tag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type content = {
	tag: tag
	text: string
}[]