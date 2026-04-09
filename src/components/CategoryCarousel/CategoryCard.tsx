import { Link } from "react-router-dom";
import type { PlantCategory } from "../../constants/plantCategories";

type CategoryCardProps = {
	category: PlantCategory;
	count: number;
};

export const CategoryCard = ({ category, count }: CategoryCardProps) => {
	return (
		<Link
			to={`/category/${category.id}`}
			className="group relative flex min-h-[270px] flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-card-border)] p-5 text-left text-[var(--color-text-invert)] no-underline shadow-[0_8px_20px_rgba(0,0,0,0.26)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(0,0,0,0.34)]"
		>
			<img
				src={category.image}
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
			/>
			<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(9,12,11,0.68)] via-[rgba(8,10,9,0.78)] to-[rgba(5,7,6,0.9)]" />
			<div className="relative z-10 flex items-start justify-between gap-3">
				<div>
					<span className="inline-block self-start rounded-full bg-[rgba(10,14,13,0.55)] px-[0.55rem] py-[0.2rem] text-[0.75rem] font-bold tracking-[0.03em] text-[rgba(245,237,218,0.95)] backdrop-blur-sm">
						{category.highlight}
					</span>
					<h3 className="my-[0.65rem] mb-[0.4rem] text-[1.2rem] text-[rgba(255,247,233,0.98)]">
						{category.title}
					</h3>
				</div>
				<span className="rounded-full border border-[rgba(255,255,255,0.32)] bg-[rgba(12,16,14,0.45)] px-2 py-1 text-[0.74rem] font-semibold text-[rgba(255,244,220,0.92)] backdrop-blur-sm">
					{count} {count === 1 ? "plant" : "plants"}
				</span>
			</div>
			<div className="relative z-10">
				<p className="m-0 text-[0.92rem] leading-[1.35] text-[rgba(243,237,227,0.88)]">
					{category.description}
				</p>
			</div>
	
		</Link>
	);
};