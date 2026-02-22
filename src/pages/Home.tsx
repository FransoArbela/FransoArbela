import samalIbrahim from "#src/assets/samal-ibrahim.png"
import Projects from "#src/components/Projects.js"
import SideBar from "#src/components/SideBar.js"
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
						<div className="justify-self-center self-center image-section md:col-start-2 2xs:row-start-1 2xs:col-start-1 rounded-full overflow-hidden w-68 h-68">
							<img src={samalIbrahim} alt="Samal Ibrahim" className="w-full h-full object-cover" />
						</div>
					</div>
				</div>
				<div id="projects" className="section-container">
					<h2 className="mb-4">Projects</h2>
					<div className="projects w-full">
						<Projects />
					</div>
				</div>
				<div id="skills" className="section-container">
					<h2 className="mb-6 ">Skills</h2>
					<div className="grid gap-6 md:grid-cols-2">
						<div className="shadow-md py-6 px-4 flex flex-col gap-6">
							<h3 className="font-bold text-lg mb-3">Frontend Core</h3>
							<div className="flex flex-wrap gap-2">
								{[
									"HTML5",
									"CSS3",
									"JavaScript",
									"TypeScript",
									"Responsive Design",
									"Accessibility",
								].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-accent bg-opacity-10 text-white rounded-full text-sm font-medium"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div className="shadow-md py-6 px-4 flex flex-col gap-6">
							<h3 className="font-bold text-lg mb-3">Frameworks &amp; Libraries</h3>
							<div className="flex flex-wrap gap-2">
								{["React", "TanStack Query", "Vite", "Tailwind CSS"].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-accent bg-opacity-10 text-white rounded-full text-sm font-medium"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div className="shadow-md py-6 px-4 flex flex-col gap-6">
							<h3 className="font-bold text-lg mb-3">State &amp; Data</h3>
							<div className="flex flex-wrap gap-2">
								{["REST APIs", "JWT Auth", "LocalStorage", "React Context"].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-accent bg-opacity-10 text-white rounded-full text-sm font-medium"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div className="shadow-md py-6 px-4 flex flex-col gap-6">
							<h3 className="font-bold text-lg mb-3">Backend (Basic)</h3>
							<div className="flex flex-wrap gap-2">
								{["Node.js", "Express", "SQLite", "Supabase"].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-accent bg-opacity-10 text-white rounded-full text-sm font-medium"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div className="shadow-md py-6 px-4 flex flex-col gap-6">
							<h3 className="font-bold text-lg mb-3">Tooling</h3>
							<div className="flex flex-wrap gap-2">
								{["Git", "GitHub", "Biome", "Figma", "Postman", "VS Code"].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-accent bg-opacity-10 text-white rounded-full text-sm font-medium"
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						<div className="shadow-md py-6 px-4 flex flex-col gap-6">
							<h3 className="font-bold text-lg mb-3">CS Foundations</h3>
							<div className="flex flex-wrap gap-2">
								{["C", "SQL", "Flask", "Problem-Solving"].map((skill) => (
									<span
										key={skill}
										className="px-3 py-1 bg-accent bg-opacity-10 text-white rounded-full text-sm font-medium"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
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
							className="font-bold text-accent hover:underline"
						>
							here
						</a>
						.
					</p>
				</div>
			</main>
			<div className="col-start-2 bg-color-content-bg relative shadow-sm rounded-sm p-4 hidden lg:block">
				<SideBar />
			</div>
		</div>
	)
}
