const API_URL = import.meta.env.VITE_API_URL

import type { Project } from "../types/api.props"

export async function getProjects(): Promise<Project[]> {
	const res = await fetch(`${API_URL}/projects`)
	if (!res.ok) throw new Error("Failed to fetch projects")
	return res.json()
}
