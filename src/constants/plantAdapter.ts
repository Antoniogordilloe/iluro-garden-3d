import type { PlantCard } from "./plantCards";

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

const MODELS_CDN_BASE_URL =
	"https://s29mp5al263ezccl.public.blob.vercel-storage.com/models";

const getModelPath = (modelName: string) => {
	const encodedModelName = encodeURIComponent(modelName);
	return `${MODELS_CDN_BASE_URL}/${encodedModelName}/${encodedModelName}.glb`;
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
	modelPath: getModelPath(rawData.modelName),
	price: rawData.price,
	discount: rawData.discount,
});

export const adaptPlantsData = (rawDataArray: RawPlantData[]): PlantCard[] =>
	rawDataArray.map(adaptPlantData);
