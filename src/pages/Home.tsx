import { Link } from "react-router-dom"

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center bg-gray-50 min-h-screen">
			<h1 className="mb-4 font-bold text-gray-900 text-4xl">
				Welcome to Vite + React + TypeScript
			</h1>
			<p className="mb-8 text-gray-600 text-lg">
				with Biome, Tailwind CSS, and React Router
			</p>
			<div className="flex gap-4">
				<Link
					to="/about"
					className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white transition-colors"
				>
					About
				</Link>
				<Link
					to="/contact"
					className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg text-white transition-colors"
				>
					Contact
				</Link>
			</div>
		</div>
	)
}
