import { Box, Button, Chip, Paper, Stack, Typography } from "@mui/material";
import type { PlantCard } from "../../constants/plantCards";
import { PlantRenderer } from "../PlantRenderer";
import { useCartStore } from "../../store/cartStore";
import { toPlantSlug } from "../../utils/plantSlug";

type PlantHeroProps = {
	plant: PlantCard;
	categoryTitle: string;
};

export const PlantHero = ({ plant, categoryTitle }: PlantHeroProps) => {
	const plantSlug = toPlantSlug(plant.name);
	const addToCart = useCartStore((state) => state.addToCart);
	const isInCart = useCartStore((state) =>
		state.items.some((item) => item.slug === plantSlug),
	);

	return (
		<Box component="section" sx={{ mb: 4, display: "flex", gap: 3, alignItems: "stretch", flexDirection: { xs: "column", lg: "row" } }}>
			<Box sx={{ width: { xs: "100%", lg: 340 }, flexShrink: 0 }}>
				<PlantRenderer
					modelPath={plant.modelPath}
					sx={{ height: { xs: 300, lg: 1 }, minHeight: 300 }}
					rotationSpeed={0.5}
					cameraPosition={[0, 1.1, 3.2]}
					modelScale={3}
				/>
			</Box>

			<Paper
				sx={{
					flex: 1,
					p: { xs: 3, md: 5 },
					background: "linear-gradient(135deg, rgba(14, 21, 18, 0.9) 0%, rgba(22, 33, 27, 0.78) 100%)",
				}}
			>
				<Chip label={categoryTitle} sx={{ mb: 2, backgroundColor: "rgba(255,255,255,0.09)" }} />
				<Stack spacing={2}>
					<Typography variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "4rem" } }}>
						{plant.name}
					</Typography>
					<Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 760 }}>
						A healthy, happy {plant.name} starts with the right light, watering rhythm, and placement. Use this care profile as your quick guide.
					</Typography>
					<Box>
						<Button variant="contained" color="primary" onClick={() => addToCart(plant)} disabled={isInCart}>
							{isInCart ? "In cart" : "Add to cart"}
						</Button>
					</Box>
				</Stack>
			</Paper>
		</Box>
	);
};
