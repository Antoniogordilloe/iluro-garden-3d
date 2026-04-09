import { CATEGORY_ICON_URLS } from "./assetUrls";

export type PlantCategory = {
	id: string;
	title: string;
	description: string;
	highlight: string;
	plantCount: number;
	image: string;
};

export const plantCategories: PlantCategory[] = [
	{
		id: "low-light",
		title: "Low Light Lovers",
		description: "Tough plants that thrive in corners and shaded rooms.",
		highlight: "Easy care",
		plantCount: 16,
		image: CATEGORY_ICON_URLS.lowLight,
	},
	{
		id: "pet-safe",
		title: "Pet Safe Picks",
		description: "Beautiful options that are friendlier for cats and dogs.",
		highlight: "Pet safe",
		plantCount: 12,
		image: CATEGORY_ICON_URLS.petSafe,
	},
	{
		id: "air-purifying",
		title: "Air Purifying",
		description: "Leafy favorites known for helping freshen indoor spaces.",
		highlight: "Cleaner rooms",
		plantCount: 10,
		image: CATEGORY_ICON_URLS.airPurifying,
	},
	{
		id: "hanging",
		title: "Hanging Trails",
		description: "Cascading vines perfect for shelves and hanging baskets.",
		highlight: "Lush vines",
		plantCount: 9,
		image: CATEGORY_ICON_URLS.hanging,
	},
	{
		id: "statement",
		title: "Statement Plants",
		description: "Large, sculptural plants that anchor a room instantly.",
		highlight: "Bold look",
		plantCount: 7,
		image: CATEGORY_ICON_URLS.statement,
	},
	{
		id: "humidity",
		title: "Humidity Lovers",
		description: "Ideal for bathrooms and cozy tropical-style zones.",
		highlight: "Tropical vibe",
		plantCount: 11,
		image: CATEGORY_ICON_URLS.humidity,
	},
];
