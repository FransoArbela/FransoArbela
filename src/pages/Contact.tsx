import { Link } from "react-router-dom"

export default function Contact() {
	return (
		<div className="flex flex-col justify-center items-center bg-[var(--color-bg)] min-h-screen">
			<h1 className="mb-4 font-bold text-[var(--color-text)]">Contact Page</h1>
			<p className="mb-8 text-[var(--color-accent)]">Get in touch with us.</p>
			<Link
				to="/"
				className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] px-6 py-3 rounded-sm text-[var(--color-bg)] transition-colors"
			>
				Back to Home
			</Link>
		</div>
	)
}
