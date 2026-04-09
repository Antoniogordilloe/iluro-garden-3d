import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { CategoryCarousel } from "./components/CategoryCarousel";
import { FeaturedPlants } from "./components/FeaturedPlants";
import { RandomOffers } from "./components/RandomOffers";
import { CategoryPage } from "./pages/CategoryPage";
import { PlantPage } from "./pages/PlantPage";
import { AboutPage } from "./pages/AboutPage";

const HomePage = () => {
	return (
		<>
			<CategoryCarousel />

			<main className="mx-auto flex w-full max-w-[100rem] flex-col items-center px-8 py-8 max-md:px-5">
				<h1 className="mb-3 text-center text-4xl font-extrabold tracking-tight text-(--color-accent-strong) md:text-5xl">
					Welcome
				</h1>
				<h2 className="mb-8 max-w-4xl text-center text-base leading-7 text-(--color-text-soft) md:text-lg">
					Each plant has a story, a personality, and a place where it thrives. 
				</h2>
				<h2 className="mb-6 text-center text-2xl font-bold text-(--color-heading) md:text-3xl">
				</h2>
				<FeaturedPlants />
				<div className="w-full">
				<RandomOffers />
				</div>
			</main>
		</>
	);
};

function App() {
	return (
		<div className="min-h-screen text-(--color-text-invert)">
			<Header />
			<Routes>
				<Route path="/about" element={<AboutPage />} />
				<Route path="/category/:categoryId" element={<CategoryPage />} />
				<Route path="/plant/:plantSlug" element={<PlantPage />} />
				<Route path="/" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
