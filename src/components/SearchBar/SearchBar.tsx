import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { plantCards } from "../../constants/plantCards";
import { toPlantSlug } from "../../utils/plantSlug";

export const SearchBar = () => {
	const [query, setQuery] = useState("");
	const [open, setOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	const trimmed = query.trim();
	const suggestions = trimmed
		? plantCards
				.filter((p) => p.name.toLowerCase().includes(trimmed.toLowerCase()))
				.slice(0, 8)
		: [];

	const handleSelect = (name: string) => {
		setQuery(name);
		setOpen(false);
		navigate(`/plant/${toPlantSlug(name)}`);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && suggestions.length > 0) {
			handleSelect(suggestions[0].name);
		} else if (e.key === "Escape") {
			setOpen(false);
		}
	};

	// Close on outside click
	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, []);

	return (
		<div ref={containerRef} className="relative w-full md:w-75">
			<input
				type="text"
				value={query}
				onChange={(e) => {
					setQuery(e.target.value);
					setOpen(true);
				}}
				onFocus={() => trimmed && setOpen(true)}
				onKeyDown={handleKeyDown}
				placeholder="Search plants..."
				className="w-full min-w-0 rounded rounded-r-lg border border-(--color-card-border) bg-(--color-surface) px-3 py-2 text-(--color-heading) outline-none ring-0 placeholder:text-(--color-text-soft)"
			/>

			{/* Suggestions dropdown */}
			{open && trimmed && (
				<ul className="absolute left-0 top-full z-50 w-full border border-t-0 border-(--color-card-border) bg-(--color-surface) shadow-md">
					{suggestions.length > 0 ? (
						suggestions.map((plant) => {
							const lower = plant.name.toLowerCase();
							const queryLower = trimmed.toLowerCase();
							const idx = lower.indexOf(queryLower);
							return (
								<li key={plant.name}>
									<button
										type="button"
										onMouseDown={() => handleSelect(plant.name)}
										className="w-full cursor-pointer px-3 py-2 text-left text-sm text-(--color-heading) transition-colors duration-150 hover:bg-(--color-card-border)"
									>
										{idx >= 0 ? (
											<>
												{plant.name.slice(0, idx)}
												<span className="font-semibold text-(--color-accent-strong)">
													{plant.name.slice(idx, idx + trimmed.length)}
												</span>
												{plant.name.slice(idx + trimmed.length)}
											</>
										) : (
											plant.name
										)}
									</button>
								</li>
							);
						})
					) : (
						<li className="px-3 py-2 text-sm text-(--color-text-soft)">
							No results
						</li>
					)}
				</ul>
			)}
		</div>
	);
};
