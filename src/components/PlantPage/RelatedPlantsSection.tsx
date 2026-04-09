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
		<section>
			<h2 className="mb-4 text-2xl font-semibold text-[var(--color-accent-strong)]">
				Related plants
			</h2>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				{relatedPlants.map((card) => (
					<Card key={card.name} card={card} />
				))}
			</div>
		</section>
	);
};
