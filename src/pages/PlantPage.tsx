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
		<main className="mx-auto w-full max-w-[100rem] p-8 max-md:p-5">
			<PlantPageActions categoryId={plant.category} />
			<PlantHero plant={plant} categoryTitle={categoryTitle} />
			<PlantCareGrid plant={plant} />
			<RelatedPlantsSection relatedPlants={relatedPlants} />
		</main>
	);
};
