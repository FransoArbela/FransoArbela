export const API_CONFIG = {
	baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
	timeout: 10000,
} as const

export const APP_CONFIG = {
	appName: "Vite React Template",
	version: "1.0.0",
	environment: import.meta.env.MODE,
} as const

export const ROUTES = {
	HOME: "/",
	ABOUT: "/about",
	CONTACT: "/contact",
} as const
