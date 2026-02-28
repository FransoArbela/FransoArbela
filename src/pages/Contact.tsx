import { useNavigate } from "react-router-dom"
import { Button } from "#src/components/index.js"

export default function Contact() {
	const navigate = useNavigate()

	return (
		<div className="flex flex-col justify-center items-center bg-bg min-h-screen">
			<h1 className="mb-4 font-bold text-text">Contact Page</h1>
			<p className="mb-8 text-accent">Get in touch with us.</p>
			<Button variant="primary" onClick={() => navigate("/")} className="px-6 py-3">
				Back to Home
			</Button>
		</div>
	)
}
