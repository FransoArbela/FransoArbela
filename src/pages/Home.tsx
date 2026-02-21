import SideBar from "@/components/SideBar"
import Projects from "./Projects"
export default function Home() {
	return (
		<div className="grid grid-cols-[1fr_auto] gap-4">
			<main className="flex flex-col gap-4">
				<div id="hero" className="section-container">
					<div>
						<h1 className="hero-name">Samal Ibrahim</h1>
						<h3>Software Developer</h3>
						<h3>
							Front-End Developer — React & TypeScript I build clean, fast, user-focused web apps.
						</h3>
					</div>
				</div>
				<div id="about" className="section-container">
					<div className="gap-4 grid 2xs:grid-rows-2 md:grid-rows-1 grid-flow-col py-4 w-full">
						<div className="text-section 2xs:row-start-2 md:row-start-1">
							<h2>About Me</h2>
							<p className="max-w-md">
								I'm Samal Ibrahim, a software developer specializing in building web applications. I
								love creating beautiful and functional user experiences.
							</p>
						</div>
						<div className="justify-self-center self-center image-section md:col-start-2 2xs:row-start-1 2xs:col-start-1">
							<div className="bg-[var(--color-secondary)]/25 rounded w-50 h-50"></div>
						</div>
					</div>
				</div>
				<div id="skills" className="section-container">
					<div className="skills">
						<h2>Skills</h2>
						<ul className="list-disc list-inside space-y-1 px-6 mt-6">
							<li>
								<span className="font-bold">Core:</span> HTML, CSS, JavaScript
							</li>
							<li>
								<span className="font-bold">Frameworks:</span> React, Vite, Tailwind
							</li>
							<li>
								<span className="font-bold">State & Data:</span> Zustand, REST APIs
							</li>
							<li>
								<span className="font-bold">Tooling:</span> Git, GitHub, Biome/ESLint, Figma
							</li>
							<li>
								<span className="font-bold">Backend (basic):</span> Supabase, Node/Express
							</li>
						</ul>
					</div>
				</div>
				<div id="projects" className="section-container">
					<h2 className="mb-4">Projects</h2>
					<div className="projects w-full">
						<Projects />
					</div>
				</div>
				<div id="experience" className="section-container">
					<h2>Experience</h2>
					<ul className="list-disc list-inside space-y-1 px-6 mt-6">
						<li>Noroff - Front-End Development</li>
						<li>QA work</li>
					</ul>
				</div>
				<div id="cv" className="section-container min-h-170">
					<h2>Curriculum Vitae</h2>
					<p>
						You can download my CV{" "}
						<a
							href="/path/to/cv.pdf"
							target="_blank"
							rel="noreferrer"
							className="font-bold text-[var(--color-accent)] hover:underline"
						>
							here
						</a>
						.
					</p>
				</div>
			</main>
			<div className="col-start-2 bg-[var(--color-content-bg)] relative shadow-sm rounded-sm p-4 hidden lg:block">
				<SideBar />
			</div>
		</div>
	)
}
