import { Box, Typography } from "@mui/material";
import type { PlantCard } from "../../constants/plantCards";
import { Card } from "../Card";

type RelatedPlantsSectionProps = {
	relatedPlants: PlantCard[];
};

export const RelatedPlantsSection = ({
	relatedPlants,
}: RelatedPlantsSectionProps) => {
	if (relatedPlants.length === 0) {
		return null;
	}

	return (
		<Box component="section">
			<Typography variant="h3" sx={{ mb: 3, color: "primary.light", fontSize: { xs: "2rem", md: "2.4rem" } }}>
				Related plants
			</Typography>
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
				{relatedPlants.map((card) => (
					<Card key={card.name} card={card} />
				))}
			</Box>
		</Box>
	);
};
