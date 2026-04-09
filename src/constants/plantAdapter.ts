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

const modelFiles = import.meta.glob("../assets/models/*/*.glb", {
	eager: true,
	import: "default",
}) as Record<string, string>;

const DEFAULT_MODEL_PATH =
	modelFiles["../assets/models/monstera/monstera.glb"];

const getModelPath = (modelName: string) => {
	const exactPath = `../assets/models/${modelName}/${modelName}.glb`;
	if (modelFiles[exactPath]) {
		return modelFiles[exactPath];
	}

	const folderPrefix = `../assets/models/${modelName}/`;
	return (
		Object.entries(modelFiles).find(([path]) => path.startsWith(folderPrefix))?.[1] ??
		DEFAULT_MODEL_PATH
	);
};

/**
 * Adapts raw plant data from the service to PlantCard objects
 * Handles model path resolution based on available assets
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
