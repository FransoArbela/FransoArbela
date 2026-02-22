import { Route, Routes } from "react-router-dom"
import Footer from "@/components/Footer"
import { Nav } from "@/components/Nav"
import Contact from "@/pages/Contact"
import Home from "@/pages/Home"
import _NotFound from "@/pages/NotFound"
import DetailedProject from "./pages/DetailedProject"

function App() {
	return (
		<div className="grid grid-rows-[auto_1fr_auto] mx-auto px-2 min-h-screen container">
			<header className="row-start-1">
				<Nav />
			</header>
			<main className="gap-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects/:id" element={<DetailedProject />} />
					<Route path="*" element={<_NotFound />} />
				</Routes>
			</main>
			<footer className="row-start-3">
				<Footer />
			</footer>
		</div>
	)
}

export default App
