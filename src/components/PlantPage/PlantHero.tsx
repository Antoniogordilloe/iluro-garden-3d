import type { PlantCard } from "../../constants/plantCards";
import { PlantRenderer } from "../PlantRenderer";

type PlantHeroProps = {
	plant: PlantCard;
	categoryTitle: string;
};

export const PlantHero = ({ plant, categoryTitle }: PlantHeroProps) => {
	return (
		<section className="mb-6 flex items-stretch gap-6 max-lg:flex-col">
			<div className="w-[320px] shrink-0 max-lg:w-full">
				<PlantRenderer
					modelPath={plant.modelPath}
					className="h-full min-h-[300px] w-full max-lg:h-[300px]"
					rotationSpeed={0.5}
					cameraPosition={[0, 1.1, 3.2]}
					modelScale={3}
				/>
			</div>

			<div className="flex-1 rounded-2xl border border-[var(--color-card-border)] bg-[linear-gradient(135deg,var(--color-surface)_0%,var(--color-surface-muted)_100%)] p-8 text-[var(--color-text)] backdrop-blur-[8px] max-md:p-5">
				<span className="mb-3 inline-block rounded-full bg-[var(--color-pill-bg)] px-2.5 py-1 text-[0.8rem] font-bold text-[var(--color-pill-text)]">
					{categoryTitle}
				</span>

				<h1 className="mb-3 text-[2.2rem] font-bold text-[var(--color-heading)] max-md:text-[1.8rem]">
					{plant.name}
				</h1>

				<p className="m-0 text-[1.05rem] text-[var(--color-text)]">
					A healthy, happy {plant.name} starts with the right light, watering
					rhythm, and placement. Use this care profile as your quick guide.
				</p>
			</div>
		</section>
	);
};
