import { useEffect, useState } from "react"

export function SidebarNav() {
	const items = [
		{ id: "hero", label: "Hero" },
		{ id: "about", label: "About" },
		{ id: "projects", label: "Projects" },
		{ id: "skills", label: "Skills" },
		{ id: "experience", label: "Experience" },
		{ id: "education", label: "Education" },
		{ id: "certification", label: "Certification" },
		{ id: "cv", label: "CV" },

	]

	const [activeId, setActiveId] = useState(items[0].id)
	useEffect(() => {
		const sections = items
			.map((item) => document.getElementById(item.id))
			.filter(Boolean) as HTMLElement[]

		const updateActive = () => {
			const viewportHeight = window.innerHeight
			const targetLine = 140
			const atBottom =
				window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4

			if (atBottom) {
				const lastId = sections[sections.length - 1]?.id ?? items[0].id
				setActiveId((prev) => (prev === lastId ? prev : lastId))
				return
			}

			let nextActiveId = sections[0]?.id ?? items[0].id
			let bestScore = -1
			let bestDistance = Number.POSITIVE_INFINITY

			for (const section of sections) {
				const rect = section.getBoundingClientRect()
				const visibleTop = Math.max(rect.top, 0)
				const visibleBottom = Math.min(rect.bottom, viewportHeight)
				const visiblePx = Math.max(0, visibleBottom - visibleTop)

				if (visiblePx <= 0) {
					continue
				}

				const normalizedVisible = visiblePx / Math.min(rect.height, viewportHeight)
				const distanceToTarget = Math.abs(rect.top - targetLine)

				if (
					normalizedVisible > bestScore ||
					(normalizedVisible === bestScore && distanceToTarget < bestDistance)
				) {
					bestScore = normalizedVisible
					bestDistance = distanceToTarget
					nextActiveId = section.id
				}
			}

			setActiveId((prev) => (prev === nextActiveId ? prev : nextActiveId))
		}

		updateActive()
		window.addEventListener("scroll", updateActive, { passive: true })
		window.addEventListener("resize", updateActive)

		return () => {
			window.removeEventListener("scroll", updateActive)
			window.removeEventListener("resize", updateActive)
		}
	}, [])

	const scrollTo = (id: string) => {
		setActiveId(id)
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
	}

	return (
		<nav className="sticky top-0 right-0 flex flex-col gap-6 p-4 items-start z-10">
			{items.map((item) => {
				const isActive = item.id === activeId

				return (
					<button
						type="button"
						key={item.id}
						onClick={() => scrollTo(item.id)}
						className={[
							"block text-sm transition cursor-pointer",
							isActive ? "text-black font-semibold" : "text-black/40 hover:text-black/70",
						].join(" ")}
					>
						{item.label}
					</button>
				)
			})}
		</nav>
	)
}

export default SidebarNav
