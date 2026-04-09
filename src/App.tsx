import { Routes, Route } from "react-router-dom";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Header } from "./components/Header";
import { CategoryCarousel } from "./components/CategoryCarousel";
import { FeaturedPlants } from "./components/FeaturedPlants";
import { RandomOffers } from "./components/RandomOffers";
import { CategoryPage } from "./pages/CategoryPage";
import { PlantPage } from "./pages/PlantPage";
import { AboutPage } from "./pages/AboutPage";
import { CartPage } from "./pages/CartPage";

const HomePage = () => {
	return (
		<Box component="section">
			<CategoryCarousel />

			<Container maxWidth={false} sx={{ maxWidth: 1600, py: { xs: 5, md: 7 } }}>
				<Stack spacing={4.5} sx={{ alignItems: "center" }}>
					<Typography
						variant="h1"
						sx={{ color: "primary.light", fontSize: { xs: "3rem", md: "4.5rem" }, textAlign: "center" }}
					>
					Welcome
					</Typography>
					<Typography
						variant="h5"
						color="text.secondary"
						sx={{ maxWidth: 840, lineHeight: 1.7, fontWeight: 500, textAlign: "center" }}
					>
						Each plant has a story, a personality, and a place where it thrives.
					</Typography>
					<FeaturedPlants />
					<Box sx={{ width: "100%" }}>
						<RandomOffers />
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};

function App() {
	return (
		<Box sx={{ minHeight: "100vh", color: "text.primary" }}>
			<Header />
			<Routes>
				<Route path="/about" element={<AboutPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/category/:categoryId" element={<CategoryPage />} />
				<Route path="/plant/:plantSlug" element={<PlantPage />} />
				<Route path="/" element={<HomePage />} />
			</Routes>
		</Box>
	);
}

export default App;
