import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import {
	Box,
	Button,
	CardActionArea,
	Chip,
	Divider,
	Stack,
	Typography,
	Card as MuiCard,
} from "@mui/material";
import { Link } from "react-router-dom";
import { PlantRenderer } from "../PlantRenderer";
import type { PlantCard as PlantCardData } from "../../constants/plantCards";
import { plantCategories } from "../../constants/plantCategories";
import { toPlantSlug } from "../../utils/plantSlug";
import { useCartStore } from "../../store/cartStore";

type CardProps = {
	card: PlantCardData;
};

const priceFormatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

export const Card = ({ card }: CardProps) => {
	const plantSlug = toPlantSlug(card.name);
	const addToCart = useCartStore((state) => state.addToCart);
	const isInCart = useCartStore((state) =>
		state.items.some((item) => item.slug === plantSlug),
	);
	const categoryTitle =
		plantCategories.find((c) => c.id === card.category)?.title ?? card.category;
	const hasDiscount = typeof card.discount === "number" && card.discount > 0;
	const discount = card.discount ?? 0;
	const discountedPrice = card.price * (1 - discount / 100);
	const careItems = [
		{ label: "Light", value: card.light, icon: <LightModeOutlinedIcon fontSize="small" /> },
		{ label: "Water", value: card.water, icon: <WaterDropOutlinedIcon fontSize="small" /> },
		{ label: "Pet Safe", value: card.petSafe, icon: <PetsOutlinedIcon fontSize="small" /> },
	];

	const handleAddToCart = () => {
		addToCart(card);
	};

	return (
		<MuiCard sx={{ height: 1, width: "100%", maxWidth: 560, justifySelf: "center", display: "flex", flexDirection: "column" }}>
			<CardActionArea component={Link} to={`/plant/${toPlantSlug(card.name)}`} sx={{ height: 1 }}>
				<Stack spacing={2} sx={{ p: 2.5, height: 1 }}>
					<Box sx={{ position: "relative" }}>
						{hasDiscount ? (
							<Chip
								label={`-${card.discount}%`}
								color="success"
								sx={{ position: "absolute", left: 12, top: 12, zIndex: 1, fontWeight: 800 }}
							/>
						) : null}
						<PlantRenderer
							modelPath={card.modelPath}
							sx={{ height: 240 }}
							rotationSpeed={0.5}
							cameraPosition={[0, 0.8, 2.3]}
							modelScale={3}
						/>
					</Box>
					<Stack spacing={1.25}>
						<Chip label={categoryTitle} size="small" sx={{ alignSelf: "flex-start", backgroundColor: "rgba(255,255,255,0.09)" }} />
						<Typography variant="h5">{card.name}</Typography>
						<Stack direction="row" spacing={1.2} sx={{ alignItems: "baseline" }}>
							<Typography variant="h6" color="primary.light">
								{priceFormatter.format(discountedPrice)}
							</Typography>
							{hasDiscount ? (
								<Typography variant="body2" color="text.secondary" sx={{ textDecoration: "line-through" }}>
									{priceFormatter.format(card.price)}
								</Typography>
							) : null}
						</Stack>
						<Divider flexItem />
						<Stack spacing={1}>
							{careItems.map((item) => (
								<Stack key={item.label} direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
									<Box sx={{ color: "primary.main", display: "inline-flex" }}>{item.icon}</Box>
									<Typography variant="body2">
										<Box component="span" sx={{ fontWeight: 700 }}>
											{item.label}:
										</Box>{" "}
										{item.value}
									</Typography>
								</Stack>
							))}
						</Stack>
					</Stack>
				</Stack>
			</CardActionArea>
			<Divider flexItem />
			<Box sx={{ p: 2, pt: 1.5 }}>
				<Button variant="contained" color="primary" fullWidth onClick={handleAddToCart} disabled={isInCart}>
					{isInCart ? "In cart" : "Add to cart"}
				</Button>
			</Box>
		</MuiCard>
	);
};
