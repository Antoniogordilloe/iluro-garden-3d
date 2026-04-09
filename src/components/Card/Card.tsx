import { Link } from "react-router-dom";
import { PlantRenderer } from "../PlantRenderer";
import type { PlantCard as PlantCardData } from "../../constants/plantCards";
import { plantCategories } from "../../constants/plantCategories";
import { toPlantSlug } from "../../utils/plantSlug";

type CardProps = {
	card: PlantCardData;
};

const priceFormatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

export const Card = ({ card }: CardProps) => {
	const categoryTitle =
		plantCategories.find((c) => c.id === card.category)?.title ?? card.category;
	const hasDiscount = typeof card.discount === "number" && card.discount > 0;
	const discount = card.discount ?? 0;
	const discountedPrice = card.price * (1 - discount / 100);

	return (
		<Link
			to={`/plant/${toPlantSlug(card.name)}`}
			className="block h-full w-full max-w-[clamp(28rem,39vw,36rem)] justify-self-center text-inherit no-underline"
		>
			<article className="relative h-full cursor-pointer rounded-2xl border border-[var(--color-card-border)] bg-[var(--color-surface)] p-4 text-[var(--color-text)] shadow-[0_2px_8px_rgba(0,0,0,0.16)] backdrop-blur-[8px] transition-shadow duration-200 hover:shadow-[0_8px_18px_rgba(0,0,0,0.24)]">
				{hasDiscount ? (
					<span className="absolute left-4 top-4 z-10 rounded-full bg-emerald-500 px-4 py-4 text-[1rem] font-bold tracking-[0.03em] text-white shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
						-{card.discount}%
					</span>
				) : null}
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
				<p className="mb-2 flex items-baseline gap-2 text-[0.98rem]">
					<strong className="text-[var(--color-heading)]">{priceFormatter.format(discountedPrice)}</strong>
					{hasDiscount ? (
						<span className="text-[0.84rem] text-[var(--color-text)] opacity-70 line-through">
							{priceFormatter.format(card.price)}
						</span>
					) : null}
				</p>
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
