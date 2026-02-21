import { Link } from "react-router-dom"

export default function About() {
	return (
		<div className="flex flex-col justify-center items-center bg-[var(--color-bg)] min-h-screen">
			<h1 className="mb-4 font-bold text-[var(--color-text)]">About Page</h1>
			<p className="mb-8 text-[var(--color-accent)]">
				This is a template repository with modern React tooling.
			</p>
			<Link
				to="/"
				className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] px-6 py-3 rounded-sm text-[var(--color-bg)] transition-colors"
			>
				Back to Home
			</Link>
		</div>
	)
}
