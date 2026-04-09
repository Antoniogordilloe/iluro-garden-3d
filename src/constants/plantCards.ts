import { adaptPlantsData } from "./plantAdapter";
import { plantsData } from "./plantsData";

export type PlantCard = {
	name: string;
	light: string;
	water: string;
	petSafe: string;
	category: string;
	modelPath: string;
	price: number;
	discount?: number;
};

export const plantCards: PlantCard[] = adaptPlantsData(plantsData);
