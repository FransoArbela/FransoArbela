import { Link } from "react-router-dom"

export const Nav = () => {
	return (
		<nav className="sticky top-0 z-20 mb-4 bg-[var(--color-content-bg)]/95 shadow-sm">
			<div className="mx-auto flex w-full items-center justify-center px-10 py-3 lg:px-8 md:px-6 sm:px-5 2xs:px-4">
				<ul className="flex items-center gap-2 text-base">
					<li>
						<Link
							className="rounded-sm px-3 py-1.5 transition-all duration-200 hover:bg-[var(--color-accent)]/40 hover:shadow-sm"
							to="/"
						>
							Home
						</Link>
					</li>
					<li aria-hidden="true" className="text-[var(--color-accent)]/40">
						|
					</li>
					<li>
						<Link
							className="rounded-sm px-3 py-1.5 transition-all duration-200 hover:bg-[var(--color-accent)]/40 hover:shadow-sm"
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
