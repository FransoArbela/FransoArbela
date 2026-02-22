import { Link } from "react-router-dom"

export const Nav = () => {
	return (
		<nav className="bg-bg-nav shadow-lg rounded-b-md">
			<div className="mx-auto flex w-full items-center justify-center px-10 py-3 lg:px-8 md:px-6 sm:px-5 2xs:px-4">
				<ul className="flex items-center gap-2 text-base">
					<li>
						<Link
							className="rounded-sm text-white px-3 py-1.5 transition-all duration-200 hover:bg-accent/40 hover:shadow-sm"
							to="/"
						>
							Home
						</Link>
					</li>
					<li aria-hidden="true" className="text-white">
						|
					</li>
					<li>
						<Link
							className="rounded-sm text-white px-3 py-1.5 transition-all duration-200 hover:bg-accent/40 hover:shadow-sm"
							to="/contact"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Nav
