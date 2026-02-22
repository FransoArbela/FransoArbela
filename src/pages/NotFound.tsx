import { Link } from "react-router-dom"

export default function NotFound() {
	return (
		<div className="flex flex-col justify-center items-center bg-bg min-h-screen">
			<h1 className="mb-4 font-bold text-text">404</h1>
			<p className="mb-8 text-accent">Page not found</p>
			<Link
				to="/"
				className="bg-primary hover:bg-accent px-6 py-3 rounded-sm text-bg transition-colors"
			>
				Back to Home
			</Link>
		</div>
	)
}
