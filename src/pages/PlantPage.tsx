import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import {
	PlantCareGrid,
	PlantHero,
	PlantNotFound,
	PlantPageActions,
	RelatedPlantsSection,
} from "../components/PlantPage";
import { plantCards } from "../constants/plantCards";
import { plantCategories } from "../constants/plantCategories";
import { toPlantSlug } from "../utils/plantSlug";

export const PlantPage = () => {
	const { plantSlug } = useParams();
	const plant = plantCards.find((item) => toPlantSlug(item.name) === plantSlug);

	if (!plant) {
		return <PlantNotFound />;
	}

	const categoryTitle =
		plantCategories.find((item) => item.id === plant.category)?.title ??
		plant.category;

	const relatedPlants = plantCards
		.filter(
			(item) => item.category === plant.category && item.name !== plant.name,
		)
		.slice(0, 4);

	return (
		<Container maxWidth={false} sx={{ maxWidth: 1600, py: { xs: 4, md: 6 } }}>
			<PlantPageActions categoryId={plant.category} />
			<PlantHero plant={plant} categoryTitle={categoryTitle} />
			<PlantCareGrid plant={plant} />
			<RelatedPlantsSection relatedPlants={relatedPlants} />
		</Container>
	);
};
