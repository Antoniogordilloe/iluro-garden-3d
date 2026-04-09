import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import { plantCategories } from "../../constants/plantCategories";
import { plantCards } from "../../constants/plantCards";
import { CategoryCard } from "./CategoryCard";

const PAGE_SCROLL = 430;

export const CategoryCarousel = () => {
	const viewportRef = useRef<HTMLDivElement>(null);

	const scrollByAmount = (amount: number) => {
		if (!viewportRef.current) {
			return;
		}

		viewportRef.current.scrollBy({
			left: amount,
			behavior: "smooth",
		});
	};

	return (
		<Box component="section" sx={{ py: { xs: 3, md: 4 }, backgroundColor: "rgba(8, 11, 9, 0.3)", backdropFilter: "blur(4px)" }}>
			<Container maxWidth={false} sx={{ maxWidth: 1600, position: "relative" }}>
				<Stack direction="row" sx={{ mb: 2.5, pr: { md: 10 }, alignItems: "center", justifyContent: "space-between" }}>
					<Typography variant="h4" sx={{ color: "text.primary", fontSize: { xs: "1.8rem", md: "2.3rem" } }}>
						Find your perfect match!
					</Typography>
				</Stack>

				<Box
					ref={viewportRef}
					sx={{
						overflowX: "auto",
						scrollBehavior: "smooth",
						pb: 1,
						scrollbarWidth: "thin",
						scrollbarColor: "rgba(214,173,103,0.55) transparent",
					}}
				>
					<Stack direction="row" spacing={2} sx={{ width: "max-content", minWidth: "100%" }}>
						{plantCategories.map((category) => {
							const count = plantCards.filter((plant) => plant.category === category.id).length;

							return <CategoryCard key={category.id} category={category} count={count} />;
						})}
					</Stack>
				</Box>

				<IconButton
					onClick={() => scrollByAmount(-PAGE_SCROLL)}
					sx={{
						position: "absolute",
						left: { xs: 8, md: 16 },
						top: { xs: "auto", md: "58%" },
						bottom: { xs: 8, md: "auto" },
						transform: { md: "translateY(-50%)" },
						zIndex: 2,
						backgroundColor: "rgba(12, 17, 13, 0.92)",
						border: "1px solid",
						borderColor: "divider",
						color: "primary.light",
						"&:hover": { backgroundColor: "rgba(24, 32, 25, 0.98)" },
					}}
				>
					<ChevronLeftRoundedIcon />
				</IconButton>
				<IconButton
					onClick={() => scrollByAmount(PAGE_SCROLL)}
					sx={{
						position: "absolute",
						right: { xs: 8, md: 16 },
						top: { xs: "auto", md: "58%" },
						bottom: { xs: 8, md: "auto" },
						transform: { md: "translateY(-50%)" },
						zIndex: 2,
						backgroundColor: "rgba(12, 17, 13, 0.92)",
						border: "1px solid",
						borderColor: "divider",
						color: "primary.light",
						"&:hover": { backgroundColor: "rgba(24, 32, 25, 0.98)" },
					}}
				>
					<ChevronRightRoundedIcon />
				</IconButton>
			</Container>
		</Box>
	);
};
