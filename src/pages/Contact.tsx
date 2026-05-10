export default function Contact() {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen ">
			<div className="bg-white p-8 rounded-md shadow-md w-full max-w-lg flex flex-col gap-6">
				<h1 className="mb-4 font-bold text-text">Contact Page</h1>
				<p className="mb-8 text-accent">Get in touch.</p>
				<ul className="text-lg flex flex-col gap-2 bg-gray-100 p-8 rounded-md ">
					<li>samal.ibrahim1999@gmail.com</li>
					<li>+47 465 98 356</li>
					<li>LinkedIn: <a href="https://linkedin.com/in/samal-ibrahim" target="_blank" rel="noopener noreferrer" className="hover:text-accent">linkedin.com/in/samal-ibrahim</a></li>
					<li>GitHub: <a href="https://github.com/samal-ibrahim" target="_blank" rel="noopener noreferrer" className="hover:text-accent">github.com/samal-ibrahim</a></li>
				</ul>
			</div>
		</div>
	)
}
