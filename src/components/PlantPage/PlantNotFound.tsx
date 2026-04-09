import { Link } from "react-router-dom";

export const PlantNotFound = () => {
	return (
		<main className="p-8 max-md:p-5">
			<h1 className="mb-2 text-3xl font-bold">Plant not found</h1>
			<p className="mt-0">That plant does not exist.</p>
			<Link className="text-[var(--color-accent-strong)] underline" to="/">
				Back to all plants
			</Link>
		</main>
	);
};
