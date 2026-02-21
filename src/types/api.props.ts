export type Project = {
	id: string
	title: string
	description: string
	technologies: string[]
	images?: {
		thumbnail: string
	}
	links: {
		live?: string
		github?: string
	}
	is_published: boolean
	sort_order: number
	created_at: string
	updated_at: string
}

export type DataResponse<T> = {
	data: T
	projects: T
	message: string
	success: boolean
}
