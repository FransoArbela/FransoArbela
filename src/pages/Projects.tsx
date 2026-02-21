import { Link } from "react-router-dom"
import projectData from "../projectData"
export default function Projects() {
	return (
		<div className="flex flex-col gap-5 w-full mt-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{projectData.map((project) => (
					<Link key={project.id} to={`/projects/${project.id}`} className="border rounded-lg p-4">
						<img
							src={project.imageUrl}
							alt={project.name}
							className="w-full h-48 object-cover rounded-md"
						/>
						<h2 className="text-xl font-semibold mt-2">{project.name}</h2>
						<p className="text-gray-600">{project.description}</p>
						<div>
							<Link to={project.projectUrl} className="text-blue-500 mt-2 inline-block">
								View Project
							</Link>
							{project.githubUrl && (
								<Link to={project.githubUrl} className="text-blue-500 mt-2 inline-block ml-4">
									View on GitHub
								</Link>
							)}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
