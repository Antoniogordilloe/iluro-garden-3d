import type { PlantCard } from "../../constants/plantCards";

type PlantCareGridProps = {
	plant: PlantCard;
};

const careInfoItems = [
	{ key: "light", label: "Light", icon: "/icons/light.svg" },
	{ key: "water", label: "Water", icon: "/icons/water.svg" },
	{ key: "petSafe", label: "Pet Safe", icon: "/icons/pet-safe.svg" },
] as const;

export const PlantCareGrid = ({ plant }: PlantCareGridProps) => {
	return (
		<section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{careInfoItems.map((item) => (
				<div
					key={item.key}
					className="rounded-xl border border-[var(--color-card-border)] bg-[var(--color-surface)] p-4 text-[var(--color-text)] backdrop-blur-[8px]"
				>
					<h3 className="mt-0 mb-2 flex items-center gap-2 text-xl font-semibold text-[var(--color-heading)]">
						<img
							src={item.icon}
							alt=""
							aria-hidden="true"
							className="h-5 w-5 shrink-0"
						/>
						{item.label}
					</h3>
					<p className="mb-0">{plant[item.key]}</p>
				</div>
			))}
		</section>
	);
};
