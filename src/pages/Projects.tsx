import { useQueryClient } from "@tanstack/react-query"
import { Loading, LoadingFailed } from "../components/Loading"
import { useProjects } from "../queries/projects.queries"

export default function Projects() {
	const { data, isLoading, isError } = useProjects()
	const queryClient = useQueryClient()

	if (isLoading) return <Loading />
	if (isError) return <LoadingFailed />

	const refetch = async () => {
		queryClient.invalidateQueries({ queryKey: ["projects"] })
		console.log("refetching...")
	}

	return (
		<main className="mx-auto p-6 container">
			<h1 className="font-bold text-3xl">Projects</h1>

			<div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3 mt-6">
				{data?.map((p) => (
					<article key={p.id} className="p-4 border rounded-2xl">
						{p.imageUrl ? (
							<img
								src={p.imageUrl}
								alt={p.title}
								className="rounded-xl w-full h-40 object-cover"
								loading="lazy"
							/>
						) : null}

						<h2 className="mt-4 font-semibold text-xl">{p.title}</h2>
						<p className="opacity-80 mt-2 text-sm">{p.description}</p>

						<div className="flex flex-wrap gap-2 mt-3">
							{p.tech.map((t) => (
								<span key={t} className="px-2 py-1 border rounded-full text-xs">
									{t}
								</span>
							))}
						</div>

						<div className="flex gap-3 mt-4 text-sm">
							{p.liveUrl ? (
								<a className="underline" href={p.liveUrl} target="_blank" rel="noreferrer">
									Live
								</a>
							) : null}
							{p.githubUrl ? (
								<a className="underline" href={p.githubUrl} target="_blank" rel="noreferrer">
									GitHub
								</a>
							) : null}
						</div>
					</article>
				))}
			</div>
			<button
				type="button"
				className="bg-blue-600 px-4 py-2 text-white cursor-pointer"
				onClick={() => refetch()}
			>
				refetch
			</button>
		</main>
	)
}
