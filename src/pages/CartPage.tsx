import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {
	Box,
	Button,
	Container,
	Divider,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { PlantRenderer } from "../components/PlantRenderer";
import { RoundActionLink } from "../components/RoundActionLink";
import { getDiscountedPrice, useCartStore } from "../store/cartStore";

const priceFormatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

export const CartPage = () => {
	const items = useCartStore((state) => state.items);
	const removeFromCart = useCartStore((state) => state.removeFromCart);
	const clearCart = useCartStore((state) => state.clearCart);

	const total = items.reduce((acc, item) => acc + getDiscountedPrice(item.plant), 0);

	if (items.length === 0) {
		return (
			<Container maxWidth={false} sx={{ maxWidth: 1200, py: { xs: 4, md: 6 } }}>
				<Paper sx={{ p: { xs: 3, md: 5 } }}>
					<Stack spacing={2.5} sx={{ alignItems: "flex-start" }}>
						<Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
							<ShoppingBagOutlinedIcon color="primary" />
							<Typography variant="h2">Your cart is empty</Typography>
						</Stack>
						<Typography variant="body1" color="text.secondary">
							Looks like you have not added any plants yet.
						</Typography>
						<Button component={Link} to="/" variant="contained" color="primary">
							Explore plants
						</Button>
					</Stack>
				</Paper>
			</Container>
		);
	}

	return (
		<Container maxWidth={false} sx={{ maxWidth: 1200, py: { xs: 4, md: 6 } }}>
			<Stack direction="row" sx={{ mb: 3, justifyContent: "flex-end" }}>
				<RoundActionLink to="/">Continue Shopping</RoundActionLink>
			</Stack>

			<Paper sx={{ p: { xs: 3, md: 4 } }}>
				<Stack spacing={2.5}>
					<Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.6rem" } }}>
						Your Cart
					</Typography>

					<Stack divider={<Divider flexItem />}>
						{items.map((item) => (
							<Box
								key={item.slug}
								sx={{
									display: "flex",
									gap: 1.5,
									alignItems: { xs: "flex-start", sm: "center" },
									justifyContent: "space-between",
									py: 2,
									flexDirection: { xs: "column", sm: "row" },
								}}
							>
								<Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
									<PlantRenderer
										modelPath={item.plant.modelPath}
										sx={{ width: 88, height: 88, minHeight: 88, borderRadius: 2 }}
										rotationSpeed={0.35}
										cameraPosition={[0, 1.1, 2.2]}
										modelScale={2.2}
									/>
									<Stack spacing={0.5}>
										<Typography variant="h5">{item.plant.name}</Typography>
										<Typography variant="body2" color="text.secondary">
											{item.plant.category}
										</Typography>
									</Stack>
								</Stack>

								<Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
									<Typography variant="h6" sx={{ minWidth: 92, textAlign: { xs: "left", sm: "right" } }}>
										{priceFormatter.format(getDiscountedPrice(item.plant))}
									</Typography>
									<Button
										variant="outlined"
										color="error"
										startIcon={<DeleteOutlineRoundedIcon />}
										onClick={() => removeFromCart(item.slug)}
									>
										Remove from cart
									</Button>
								</Stack>
							</Box>
						))}
					</Stack>

					<Divider flexItem />

					<Stack
						direction={{ xs: "column", sm: "row" }}
						spacing={1.5}
						sx={{ alignItems: { xs: "flex-start", sm: "center" }, justifyContent: "space-between" }}
					>
						<Typography variant="h4">Total: {priceFormatter.format(total)}</Typography>
						<Button variant="text" color="inherit" onClick={clearCart}>
							Clear cart
						</Button>
					</Stack>
				</Stack>
			</Paper>
		</Container>
	);
};
