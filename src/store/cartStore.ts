import { create } from "zustand";
import type { PlantCard } from "../constants/plantCards";
import { toPlantSlug } from "../utils/plantSlug";

export type CartItem = {
	slug: string;
	plant: PlantCard;
};

type CartStore = {
	items: CartItem[];
	addToCart: (plant: PlantCard) => void;
	removeFromCart: (slug: string) => void;
	clearCart: () => void;
};

export const getDiscountedPrice = (plant: PlantCard) => {
	const discount = plant.discount ?? 0;
	return plant.price * (1 - discount / 100);
};

export const useCartStore = create<CartStore>((set) => ({
	items: [],
	addToCart: (plant) =>
		set((state) => {
			const slug = toPlantSlug(plant.name);
			const alreadyAdded = state.items.some((item) => item.slug === slug);

			if (alreadyAdded) {
				return state;
			}

			return {
				items: [...state.items, { slug, plant }],
			};
		}),
	removeFromCart: (slug) =>
		set((state) => ({
			items: state.items.filter((item) => item.slug !== slug),
		})),
	clearCart: () => set({ items: [] }),
}));
