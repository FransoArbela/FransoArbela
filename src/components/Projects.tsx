import { Link } from "react-router-dom"
import projectData from "../projectData.js"
export default function Projects() {
	return (
		<div className="flex flex-col gap-5 w-full mt-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{projectData.map((project) => (
					<div
						key={project.id}
						className="relative shadow-lg rounded-lg p-4 hover:shadow transition-shadow duration-200"
					>
						<Link
							to={`/projects/${project.id}`}
							className="absolute inset-0 z-0"
							aria-label={`View ${project.name}`}
						/>

						<img
							src={project.imageUrl}
							alt={project.name}
							className="w-full h-48 object-cover rounded-md"
						/>
						<h2 className="text-xl font-semibold mt-2">{project.name}</h2>
						<p className="text-gray-600">{project.description}</p>
						<p className="text-black">{project.tech.join(", ")}</p>
						<div className="relative w-fit">
							<div>
								<a
									href={project.projectUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-accent mt-2 z-20 inline-block hover:underline hover:text-[#502EBF]"
								>
									View Project
								</a>

								{project.githubUrl && (
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-accent mt-2 z-20 inline-block ml-4 hover:underline hover:text-[#502EBF]"
									>
										View on GitHub
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
