import type { PlantCard } from "./plantCards";
import { toModelUrl } from "./assetUrls";

export type RawPlantData = {
	name: string;
	light: string;
	water: string;
	petSafe: string;
	category: string;
	modelName: string;
	price: number;
	discount?: number;
};

/**
 * Adapts raw plant data from the service to PlantCard objects
 * Builds remote model URL from the Vercel Blob storage base URL
 */
export const adaptPlantData = (rawData: RawPlantData): PlantCard => ({
	name: rawData.name,
	light: rawData.light,
	water: rawData.water,
	petSafe: rawData.petSafe,
	category: rawData.category,
	modelPath: toModelUrl(rawData.modelName),
	price: rawData.price,
	discount: rawData.discount,
});

export const adaptPlantsData = (rawDataArray: RawPlantData[]): PlantCard[] =>
	rawDataArray.map(adaptPlantData);
