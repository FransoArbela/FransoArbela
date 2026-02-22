export function Loading() {
	return (
		<div className="flex flex-col justify-center items-center gap-4 py-10 min-h-64 w-full">
			<div className="border-primary border-b-4 rounded w-14 h-14 animate-spin" />
			<h4>Loading projects…</h4>
		</div>
	)
}

export function LoadingFailed() {
	return (
		<div className="flex flex-col justify-center items-center gap-4 py-10 min-h-64 w-full">
			<h4>Failed to load projects.</h4>
		</div>
	)
}
