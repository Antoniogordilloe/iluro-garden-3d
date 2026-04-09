import { Link } from "react-router-dom";
import { PlantRenderer } from "../PlantRenderer";
import type { PlantCard as PlantCardData } from "../../constants/plantCards";
import { plantCategories } from "../../constants/plantCategories";
import { toPlantSlug } from "../../utils/plantSlug";

type CardProps = {
	card: PlantCardData;
};

export const Card = ({ card }: CardProps) => {
	const categoryTitle =
		plantCategories.find((c) => c.id === card.category)?.title ?? card.category;

	return (
		<Link
			to={`/plant/${toPlantSlug(card.name)}`}
			className="block h-full w-full max-w-[clamp(28rem,39vw,36rem)] justify-self-center text-inherit no-underline"
		>
			<article className="h-full cursor-pointer rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-surface)] p-4 text-[var(--color-text)] shadow-[0_2px_8px_rgba(0,0,0,0.16)] backdrop-blur-[8px] transition-shadow duration-200 hover:shadow-[0_8px_18px_rgba(0,0,0,0.24)]">
				<div className="mb-3 overflow-hidden rounded-xl border border-[var(--color-card-border)] bg-[var(--color-surface-muted)]">
					<PlantRenderer
						modelPath={card.modelPath}
						className="h-60 w-full"
						rotationSpeed={0.5}
						cameraPosition={[0, 0.8, 2.3]}
						modelScale={3}
					/>
				</div>
				<span className="mb-2 inline-block rounded-full bg-[var(--color-pill-bg)] px-2 py-[0.18rem] text-[0.72rem] font-bold tracking-[0.03em] text-[var(--color-pill-text)]">
					{categoryTitle}
				</span>
				<h2 className="mb-2 text-[1.05rem] font-semibold text-[var(--color-heading)]">
					{card.name}
				</h2>
				<p className="my-1 flex items-center gap-2 text-[0.95rem]">
					<img src="/icons/light.svg" alt="" aria-hidden="true" className="h-4 w-4 shrink-0" />
					<span>
						<strong>Light:</strong> {card.light}
					</span>
				</p>
				<p className="my-1 flex items-center gap-2 text-[0.95rem]">
					<img src="/icons/water.svg" alt="" aria-hidden="true" className="h-4 w-4 shrink-0" />
					<span>
						<strong>Water:</strong> {card.water}
					</span>
				</p>
				<p className="my-1 flex items-center gap-2 text-[0.95rem]">
					<img src="/icons/pet-safe.svg" alt="" aria-hidden="true" className="h-4 w-4 shrink-0" />
					<span>
						<strong>Pet Safe:</strong> {card.petSafe}
					</span>
				</p>
			</article>
		</Link>
	);
};
