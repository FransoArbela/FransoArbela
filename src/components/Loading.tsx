export function Loading() {
	return (
		<div className="flex flex-col justify-center items-center gap-4 min-h-screen">
			<div className="border-blue-600 border-b-4 rounded-full w-14 h-14 animate-spin" />
			<h4>Loading projects…</h4>
		</div>
	)
}

export function LoadingFailed() {
	return (
		<div className="flex flex-col justify-center items-center gap-4 min-h-screen">
			<h4>Failed to load projects.</h4>
		</div>
	)
}