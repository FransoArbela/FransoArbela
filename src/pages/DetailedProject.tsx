import { useParams } from "react-router-dom"
import projectData from "../projectData"

const DetailedProject = () => {
	const { id } = useParams<{ id: string }>()
	const projectId = Number(id)

	const project = projectData.find((project) => project.id === projectId)

	return (
		<div className="bg-white p-4">
            <button type="button"
                onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    const notification = document.createElement('div');
                    notification.innerText = "URL copied to clipboard!";
                    notification.className = "fixed bottom-4 right-4 bg-purple-500 text-white p-2 rounded";
                    document.body.appendChild(notification);
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 3000);
                }}
                className="mb-4 px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-900 cursor-pointer"
            >
                Copy URL
            </button>
			{project ? (
				<div className="flex flex-col justify-center items-center gap-4 min-h-screen ">
					<div className="w-full max-w-3xl mx-auto shadow-lg p-2">
						<img className="w-full h-full object-cover" src={project.imageUrl} alt={project.name} />
					</div>
					<h1 className="text-2xl font-bold">{project.name}</h1>
					<div className="max-w-3xl mx-auto flex flex-col gap-3 border-b pb-4">
						{project.Body.map((paragraph, index) => (
							<p
								key={`${project.id}-paragraph-${index}`}
								className="text-gray-700 leading-7 text-base"
							>
								{paragraph}
							</p>
						))}
					</div>
				</div>
			) : (
				<p>Project not found</p>
			)}
		</div>
	)
}

export default DetailedProject
