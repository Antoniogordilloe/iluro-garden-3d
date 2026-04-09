import { useRef } from "react";
import { plantCategories } from "../../constants/plantCategories";
import { plantCards } from "../../constants/plantCards";
import { CategoryCard } from "./CategoryCard";

const PAGE_SCROLL = 430;

export const CategoryCarousel = () => {
	const viewportRef = useRef<HTMLDivElement>(null);

	const scrollByAmount = (amount: number) => {
		if (!viewportRef.current) {
			return;
		}

		viewportRef.current.scrollBy({
			left: amount,
			behavior: "smooth",
		});
	};

	return (
		<section className="bg-[var(--color-overlay)] px-4 py-4 pb-5 backdrop-blur-[2px]">
			<div className="relative">
				<div className="mb-4 flex items-center justify-between gap-3">
					<h2 className="m-0 text-[1.1rem] font-bold text-[var(--color-text-invert)]">
						Find your perfect match!
					</h2>
				</div>

				<div
					ref={viewportRef}
					className="overflow-x-auto scroll-smooth pb-2 [scrollbar-color:rgba(214,173,103,0.55)_transparent] [scrollbar-width:thin]"
				>
					<div className="grid auto-cols-[minmax(400px,1fr)] grid-flow-col gap-4">
						{plantCategories.map((category) => {
							const count = plantCards.filter(
								(p) => p.category === category.id,
							).length;
							return <CategoryCard key={category.id} category={category} count={count} />;
						})}
					</div>
				</div>

				<button
					type="button"
					className="absolute left-1.5 top-[calc(50%+0.3rem)] z-20 h-[38px] w-[38px] -translate-y-1/2 cursor-pointer rounded-none border border-[var(--color-card-border)] bg-[var(--color-nav)] text-[1.1rem] font-bold text-[var(--color-accent-strong)] opacity-95 shadow-[0_4px_12px_rgba(0,0,0,0.35)] transition duration-200 hover:scale-105 hover:bg-[var(--color-bg-bottom)] max-[720px]:top-auto max-[720px]:bottom-1.5"
					onClick={() => scrollByAmount(-PAGE_SCROLL)}
				>
					{"<"}
				</button>
				<button
					type="button"
					className="absolute right-1.5 top-[calc(50%+0.3rem)] z-20 h-[38px] w-[38px] -translate-y-1/2 cursor-pointer rounded-none border border-[var(--color-card-border)] bg-[var(--color-nav)] text-[1.1rem] font-bold text-[var(--color-accent-strong)] opacity-95 shadow-[0_4px_12px_rgba(0,0,0,0.35)] transition duration-200 hover:scale-105 hover:bg-[var(--color-bg-bottom)] max-[720px]:top-auto max-[720px]:bottom-1.5"
					onClick={() => scrollByAmount(PAGE_SCROLL)}
				>
					{">"}
				</button>
			</div>
		</section>
	);
};
