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
		<section className="mx-auto mb-12 w-full max-w-[100rem] rounded-3xl border border-(--color-card-border) bg-(--color-surface) p-5 backdrop-blur-md md:p-7">
			<div className="mb-6 flex flex-wrap items-end justify-between gap-3">
				<div>
					<p className="mb-2 inline-flex rounded-full bg-(--color-pill-bg) px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-(--color-pill-text)">
						Featured Picks
					</p>
				</div>

			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				{featuredPlants.map((card) => (
					<Card key={card.name} card={card} />
				))}
			</div>
		</section>
	);
};
