import { Link } from "react-router-dom"

export default function About() {
	return (
		<div className="flex flex-col justify-center items-center bg-gray-50 min-h-screen">
			<h1 className="mb-4 font-bold text-gray-900 text-4xl">About Page</h1>
			<p className="mb-8 text-gray-600 text-lg">
				This is a template repository with modern React tooling.
			</p>
			<Link
				to="/"
				className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white transition-colors"
			>
				Back to Home
			</Link>
		</div>
	)
}
