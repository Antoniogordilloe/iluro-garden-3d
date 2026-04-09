import { alpha } from "@mui/material/styles";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { GENERATED_GARDEN_IMAGE_URLS } from "../../constants/assetUrls";

const generatedGardenImages = [...GENERATED_GARDEN_IMAGE_URLS];

const pickRandomGardenImages = (count: number) => {
	const shuffled = [...generatedGardenImages];

	for (let i = shuffled.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}

	return shuffled.slice(0, count);
};

const withGardenImages = <T extends object>(items: T[]) => {
	const randomImages = pickRandomGardenImages(items.length);

	return items.map((item, index) => ({
		...item,
		imageUrl: randomImages[index],
	}));
};

const randomOffers = withGardenImages([
	{
		title: "2-for-1 Terracotta Pots",
		description: "Buy one medium terracotta pot and get another one free this week only.",
		badge: "Flash Offer",
	},
	{
		title: "Mystery Plant Box - 35% Off",
		description:
			"A surprise pack with 3 indoor plants and care cards. Limited stock for newsletter members.",
		badge: "Members",
	},
	{
		title: "Free Repotting Service",
		description:
			"Bring any plant purchased today and we will repot it for free with premium soil mix.",
		badge: "Today",
	},
]);

export const RandomOffers = () => {
	return (
		<Paper sx={{ position: "relative", overflow: "hidden", p: { xs: 3, md: 4 } }}>
			<Box
				sx={{
					pointerEvents: "none",
					position: "absolute",
					right: -64,
					top: -64,
					height: 192,
					width: 192,
					borderRadius: "50%",
					background: "radial-gradient(circle, rgba(214,173,103,0.32) 0%, rgba(214,173,103,0) 70%)",
				}}
			/>
			<Box
				sx={{
					pointerEvents: "none",
					position: "absolute",
					left: -80,
					bottom: 0,
					height: 208,
					width: 208,
					borderRadius: "50%",
					background: "radial-gradient(circle, rgba(104,145,128,0.28) 0%, rgba(104,145,128,0) 70%)",
				}}
			/>

			<Stack
				direction={{ xs: "column", md: "row" }}
				spacing={2}
				sx={{ position: "relative", mb: 3.5, justifyContent: "space-between", alignItems: { xs: "flex-start", md: "center" } }}
			>
				<Box>
					<Chip label="Plant Shop Perks" sx={{ mb: 1.5, backgroundColor: "rgba(255,255,255,0.09)" }} />
					<Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}>
						Random Offers
					</Typography>
				</Box>
				<Chip label="Limited Time" variant="outlined" sx={{ borderColor: "divider", color: "primary.main" }} />
			</Stack>

			<Box
				sx={{
					position: "relative",
					display: "grid",
					gap: 2,
					gridTemplateColumns: { xs: "1fr", xl: "repeat(3, minmax(0, 1fr))" },
				}}
			>
				{randomOffers.map((offer) => (
					<Box
						key={offer.title}
						sx={{
							borderRadius: 2,
							border: "1px solid",
							borderColor: alpha("#ffffff", 0.12),
							backgroundColor: alpha("#0b120f", 0.6),
							p: 2,
							transition: "transform 300ms ease, border-color 300ms ease",
							"&:hover": { transform: "translateY(-4px)", borderColor: "rgba(215,174,99,0.4)" },
						}}
					>
						<Box
							component="img"
							src={offer.imageUrl}
							alt={offer.title}
							loading="lazy"
							sx={{ mb: 2, height: 144, width: 1, borderRadius: 1.5, objectFit: "cover" }}
						/>
						<Chip label={offer.badge} size="small" sx={{ mb: 1.5, backgroundColor: "rgba(255,255,255,0.06)", color: "primary.main" }} />
						<Typography variant="h6" sx={{ mb: 1 }}>
							{offer.title}
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
							{offer.description}
						</Typography>
					</Box>
				))}
			</Box>
		</Paper>
	);
};
