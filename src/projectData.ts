
const projects = [
	{
		id: 1,
		name: "CSS Frameworks ",
		description: "This is the first project.",
		imageUrl: "/public/css-tools.png",
		Body: [
			"I updated the project to make it more stable and easier to maintain, without changing the overall design.",
			"The biggest change was moving the feed post content out of static HTML and into a data array in posts.js. Then I updated script.js to import that array and render posts dynamically using map(). Before, the feed had repeated markup directly in index.html. Now it uses one container that JavaScript fills. This makes it way easier to edit posts, and it gives a proper structure if I later want to add features like search, filter, or sort from a single source of truth.",
			"I also fixed some JS reliability issues.",
			"menuOpen is now properly declared, and I wrapped event listeners in guards so pages that don’t include feed-related elements won’t throw errors. This means the same script can safely run on login, profile, and feed pages without breaking.",
			'For HTML cleanup, I removed duplicate id="theme-toggler" usage and switched to a class-based selector (.theme-toggler) across the pages.',
			"IDs must be unique, so this fixes invalid markup and keeps the DOM logic cleaner.",
			'I also changed the script tags to use type="module" so imports work correctly across pages.',
			"On the config side,",
			"Overall, the project is now cleaner, more stable, and easier to scale as it grows.",
		],
		projectUrl: "https://css-frameworks-samal.netlify.app/feed/",
		githubUrl: "https://github.com/Samal-Ibrahim/css-frameworks-CA",
	},
	{
		id: 2,
		name: "JavaScript Frameworks",
		description: "This is the second project.",
		imageUrl: "/public/zeebra.png",
		Body: [
			"I did a focused refactor and cleanup pass on JSF project after reviewing the code in detail. The goal wasn’t to redesign anything, but to fix weak spots, improve stability, and align the project more with React best practices.",
			'One of the biggest fixes was around URL parameter handling. In my ViewSingleProduct component, I was extracting the product ID using window.location.href.split("=")[1]. It worked, but it was fragile and not how React Router is meant to be used. I refactored this to use the useParams() hook from react-router-dom, which is the correct and more reliable approach. I also updated the product links from /product/id=$\\{id} to /product/\\${id} to follow cleaner route conventions.',
			"I also found that my filterProducts utility function was mutating the original array by using .sort() directly. Since .sort() mutates the array in place, this can cause unpredictable behavior in React if youre working with state. I fixed this by creating a shallow copy of the array using the spread operator before sorting. That way, the original state remains untouched and rendering stays predictable.",
			"Another issue was duplicate toast notifications. I had accidentally added two ToastContainer components, one in the root App component and another inside the single product page. Since only one toast container should exist globally, this caused duplicate notifications. I removed the extra one to clean that up. On the checkout flow, I realized the cart wasn´t being cleared after a successful purchase. That´s a bad user experience because users would return and still see old items in their cart. I added a call to removeAllFromCart() inside the success page´s useEffect so the cart resets properly. I also fixed a dependency array issue that was causing multiple toast messages by using an empty dependency array (with a biome ignore comment) so the effect runs only once on mount. I also cleaned up spme hardcoded numbers instead of having them in constants. That makes maintenance harder and breaks the DRY principle. I extracted those into named constants like TAX_RATE and SHIPPING_RATE inside a constants.ts file. Now if rates change, I only need to update them in one place. Lastly, I improved the cart sidebar UX. I added a semi-transparent backdrop overlay behind the cart so users can click outside to close it. I adjusted z-index layering and pointer events carefully to make sure the overlay works correctly without blocking interaction inside the cart itself. Overall, these changes made the application more reliable, more maintainable, and closer to proper React standards, without changing its overall design or functionality.",
		],
		projectUrl: "https://zeebra.netlify.app/",
		githubUrl: "https://github.com/NoroffFEU/jsfw-2025-v1-samal-jsframeworks",
	},
	{
		id: 3,
		name: "Semester Project 2",
		description: "This is the third project.",
		imageUrl: "/public/holidaze.png",
		Body: [
			"I went through the Auction House app and focused on fixing some performance issues that were slowing things down. I found three main problems and improved them so the app feels much faster and smoother to use.",
			'First, browser caching was disabled, probably my misstake. All fetch requests used cache: "no-store", which forced the app to request fresh data every time, even if nothing had changed. That created unnecessary network traffic and delays. I removed that setting so the browser can cache responses properly based on server headers. This alone reduced repeated requests when navigating between pages.',
			"Second, the app had no internal caching. If a user opened a listing, left the page, and came back, it fetched everything again from the API. I created a small in-memory caching utility that stores responses for a short period (2-5 minutes depending on the data). Now, recently viewed content loads instantly without hitting the server again. This makes browsing feel much more responsive.",
			"Third, the profile page was making three separate API requests: one for the profile, one for bids, and one for wins. After checking the API response, I realized all that data already comes from the main profile endpoint. I refactored it to use a single request instead of three.",
			"Overall results:",
			"• Profile requests reduced from 3 to 1 (67% fewer API calls)",
			"• Profile load time improved from ~2-3 seconds to ~0.5-1 second",
			"• Revisiting pages now loads instantly from cache",
			"No extra libraries were added. The app is now faster, cleaner, and more efficient without increasing complexity.",
		],
		projectUrl: "https://action-house.netlify.app/",
		githubUrl: "https://github.com/Samal-Ibrahim/FED2-SP2-Auction-House",
	},
]

export default projects
