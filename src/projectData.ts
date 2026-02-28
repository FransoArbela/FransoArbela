import cssFr from "./assets/css-tools.png"
import sp2 from "./assets/holidaze.png"
import jsFr from "./assets/zeebra.png"

const projects = [
	{
		id: 1,
		name: "CSS Frameworks ",
		description: "This project was a example of using CSS frameworks to build a page.",
		tech: ["HTML", "Tailwind CSS", "JavaScript"],
		imageUrl: cssFr,
		Body: [
"",
		],
		projectUrl: "https://css-frameworks-samal.netlify.app/feed/",
		githubUrl: "https://github.com/Samal-Ibrahim/css-frameworks-CA",
	},
	{
		id: 2,
		name: "JavaScript Frameworks",
		description:
			"JS Frameworks was a project where I built a simple e-commerce site using React, fetching data from a public API and implementing a shopping cart.",
		tech: ["TypeScript", "React", "React-Router", "Tailwind CSS", "Biome", "Vite", "Vitest"],
		imageUrl: jsFr,
		Body: [
""],
		projectUrl: "https://zeebra.netlify.app/",
		githubUrl: "https://github.com/NoroffFEU/jsfw-2025-v1-samal-jsframeworks",
	},
	{
		id: 3,
		name: "Semester Project 2",
		description:
			"Auction House was a project where I built a marketplace app using React, fetching data from a custom API and implementing features like browsing listings, user profiles, and bidding.",
		tech: ["JavaScript", "Vite", "Tailwind CSS"],
		imageUrl: sp2,
		Body: [
""
		],
		projectUrl: "https://action-house.netlify.app/",
		githubUrl: "https://github.com/Samal-Ibrahim/FED2-SP2-Auction-House",
	},


]

export default projects
