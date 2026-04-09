import { Box, Chip, Paper, Typography } from "@mui/material";
import { Card } from "../Card";
import { plantCards } from "../../constants/plantCards";

const pickRandomPlants = (count: number) => {
	const shuffled = [...plantCards];

	for (let i = shuffled.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}

	return shuffled.slice(0, count);
};

const featuredPlants = pickRandomPlants(8);

export const FeaturedPlants = () => {
	return (
		<Paper sx={{ width: "100%", mb: 1, p: { xs: 3, md: 4 } }}>
			<Box sx={{ mb: 3.5 }}>
				<Chip label="Featured Picks" sx={{ mb: 1.5, backgroundColor: "rgba(255,255,255,0.09)" }} />
				<Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "2.7rem" } }}>
					Plants worth bringing home
				</Typography>
				<Typography variant="body1" color="text.secondary" sx={{ mt: 1, maxWidth: 760 }}>
					A rotating set of standout plants, from forgiving starters to sculptural centerpieces.
				</Typography>
			</Box>

			<Box
				sx={{
					display: "grid",
					gap: 2,
					gridTemplateColumns: {
						xs: "1fr",
						sm: "repeat(2, minmax(0, 1fr))",
						lg: "repeat(3, minmax(0, 1fr))",
						xl: "repeat(4, minmax(0, 1fr))",
					},
				}}
			>
				{featuredPlants.map((card) => (
					<Card key={card.name} card={card} />
				))}
			</Box>
		</Paper>
	);
};
