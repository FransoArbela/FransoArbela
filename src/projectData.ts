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
			"CSS Frameworks CA is a small front-end project built as a course assignment to show practical use of a modern CSS framework. The site simulates a simple social-style platform with three main pages: a login page, a profile page, and a feed page. The login page is a demo interface using native HTML form validation, so it feels realistic even without a real backend. The profile page shows a mock user with follower stats, a follow button, and a responsive grid of post images. The feed page displays multiple posts with avatars, captions, and comments to create a familiar social media layout.",
			"The main focus of this project was responsive design and clean UI structure. The navigation adapts to different screen sizes with a desktop menu and a mobile burger menu, and there’s also a dark and light mode toggle that stores the user’s preference in localStorage. Post content is stored in a JavaScript data file and rendered dynamically into the feed using reusable template logic. This keeps the app interactive while still being a simple front-end project.",
			"Technically, the stack is intentionally lightweight. It uses HTML5 for structure, Tailwind CSS for utility-first styling, and vanilla JavaScript with ES modules for interactivity. Tailwind is customized with its own breakpoints, colors, and typography to give the design a more personal look while keeping consistency. For development, I used Node.js scripts to build the Tailwind output along with a local dev server and watch setup for faster iteration. Overall, this project shows how to build a responsive, multi-page interface using a modern CSS workflow and clean JavaScript, without relying on heavy frameworks or a backend.",
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
			"Zeebra is a front-end e-commerce web app built to simulate a full online shopping experience, from browsing products to completing an order. When users land on the home page, they see a hero section and a product grid where items are fetched live from the Noroff Online Shop API. The catalog supports search and different sorting options like A–Z, Z–A, and price-based sorting, so it’s easy to go through larger product lists. Each product has its own detail page with more information and customer reviews. I also made sure the app handles loading and error states properly, so users see skeleton placeholders while data loads and clear error messages if something goes wrong. There’s a global cart panel where users can add products, update quantities, remove items, and keep their cart saved between sessions using localStorage. The checkout flow includes a shipping form, order review, dynamic price breakdown, and a success page that confirms the purchase and shows basic order details.",
			"On the technical side, the project is built with React 19 and TypeScript to keep components structured and type-safe. Routing is handled with React Router, and shared cart state is managed using React Context. Styling is done with Tailwind CSS for a responsive, utility-first layout. Notifications and feedback are shown using React Toastify. Data is fetched with the browser Fetch API from the Noroff v2 online shop endpoints. The app is bundled with Vite for fast development and optimized production builds. Code quality is maintained with Biome and ESLint, and parts of the form logic are tested using Vitest and React Testing Library. Overall, this project focuses on building a realistic e-commerce flow using a modern React setup, clean structure, and good user experience practices.",
		],
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
			"This project is a modern frontend web app built as an Auction House platform where users can buy and sell items through time-based bidding. The idea was to create something that feels realistic, where users can register, log in, and manage their own profile with details like avatar, banner, and account credits. Once logged in, users can create their own auction listings with title, description, images, tags, and an end date. They can also edit or delete their listings when needed. Other users can browse all listings, search and filter through auctions, open a single listing page to see full details, and place bids until the auction expires. The profile page gives a clear overview of what the user has created, what they have bid on, and what they have won.",
			"From a technical side, the project is built using JavaScript with ES modules and a structured, modular setup. API logic, page logic, and utilities are separated properly to keep things clean and maintainable. Vite is used for development and production builds, and Tailwind CSS handles the styling with a responsive, utility-first approach. All data is fetched from the Noroff Auction API using the Fetch API, and localStorage is used to store session-related values like token, profile info, theme preference, and credits. I also used Flatpickr for date and time selection when creating listings, and Font Awesome for icons. The app includes practical improvements like route-based rendering, dark and light mode, simple in-memory caching for better performance, and UI elements that change based on authentication state. Overall, this project focuses on full user flows, solid API integration, and building a clean frontend architecture without relying on heavy frameworks.",
		],
		projectUrl: "https://action-house.netlify.app/",
		githubUrl: "https://github.com/Samal-Ibrahim/FED2-SP2-Auction-House",
	},
]

export default projects
