import { alpha } from "@mui/material/styles";
import { Box, Card, CardActionArea, Chip, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { PlantCategory } from "../../constants/plantCategories";

type CategoryCardProps = {
	category: PlantCategory;
	count: number;
};

export const CategoryCard = ({ category, count }: CategoryCardProps) => {
	return (
		<Card sx={{ minWidth: { xs: 300, sm: 400 }, minHeight: 280, overflow: "hidden" }}>
			<CardActionArea
				component={RouterLink}
				to={`/category/${category.id}`}
				sx={{
					height: 1,
					position: "relative",
					display: "flex",
					alignItems: "stretch",
					justifyContent: "flex-start",
					"&:hover .category-image": { transform: "scale(1.06)" },
				}}
			>
				<Box
					className="category-image"
					component="img"
					src={category.image}
					alt=""
					aria-hidden="true"
					sx={{
						position: "absolute",
						inset: 0,
						width: 1,
						height: 1,
						objectFit: "cover",
						transition: "transform 500ms ease",
					}}
				/>
				<Box
					sx={{
						position: "absolute",
						inset: 0,
						background: "linear-gradient(180deg, rgba(10, 13, 11, 0.45) 0%, rgba(7, 10, 8, 0.84) 66%, rgba(5, 7, 6, 0.94) 100%)",
					}}
				/>
				<Stack
					spacing={2}
					sx={{ position: "relative", zIndex: 1, width: 1, p: 3, justifyContent: "space-between" }}
				>
					<Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
						<Box>
							<Chip
								label={category.highlight}
								size="small"
								sx={{
									backgroundColor: alpha("#0c0f0c", 0.5),
									color: "#f5edd8",
									backdropFilter: "blur(8px)",
								}}
							/>
							<Typography variant="h5" sx={{ mt: 1.5, color: "#fff5e8" }}>
								{category.title}
							</Typography>
						</Box>
						<Chip
							label={`${count} ${count === 1 ? "plant" : "plants"}`}
							size="small"
							variant="outlined"
							sx={{
								borderColor: alpha("#ffffff", 0.3),
								backgroundColor: alpha("#121612", 0.45),
								color: "#fff1d5",
								backdropFilter: "blur(8px)",
							}}
						/>
					</Stack>
					<Typography variant="body1" sx={{ color: "rgba(243, 237, 227, 0.9)", lineHeight: 1.6, maxWidth: 340 }}>
						{category.description}
					</Typography>
				</Stack>
			</CardActionArea>
		</Card>
	);
};