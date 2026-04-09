import { Link, useParams } from "react-router-dom";
import { Card } from "../components/Card";
import { RoundActionLink } from "../components/RoundActionLink";
import { plantCards } from "../constants/plantCards";
import { plantCategories } from "../constants/plantCategories";

export const CategoryPage = () => {
	const { categoryId } = useParams();
	const category = plantCategories.find((item) => item.id === categoryId);

	if (!category) {
		return (
			<main className="mx-auto w-full max-w-[100rem] p-8 max-md:p-5">
				<h1 className="mb-2 text-3xl font-bold">Category not found</h1>
				<p className="mt-0">That category does not exist.</p>
				<Link className="text-[var(--color-accent-strong)] underline" to="/">
					Back to all categories
				</Link>
			</main>
		);
	}

	const filteredCards = plantCards.filter(
		(card) => card.category === category.id,
	);

	return (
		<main className="mx-auto w-full max-w-[100rem] p-8 max-md:p-5">
			<div className="mb-3 flex justify-end">
				<RoundActionLink to="/">See All Categories</RoundActionLink>
			</div>
			<h1 className="mb-1 text-4xl font-bold text-[var(--color-accent-strong)]">
				{category.title}
			</h1>
			<p className="mt-0 mb-6 text-[0.95rem] text-[var(--color-text-invert)]">
				{category.description}
			</p>

			<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
				{filteredCards.map((card) => (
					<Card key={card.name} card={card} />
				))}
			</section>
		</main>
	);
};
