import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Card } from "../components/Card";
import { RoundActionLink } from "../components/RoundActionLink";
import { plantCards } from "../constants/plantCards";
import { plantCategories } from "../constants/plantCategories";

export const CategoryPage = () => {
	const { categoryId } = useParams();
	const category = plantCategories.find((item) => item.id === categoryId);

	if (!category) {
		return (
			<Container maxWidth={false} sx={{ maxWidth: 1600, py: { xs: 4, md: 6 } }}>
				<Paper sx={{ p: { xs: 3, md: 4 } }}>
					<Stack spacing={2} sx={{ alignItems: "flex-start" }}>
						<Typography variant="h2">Category not found</Typography>
						<Typography variant="body1" color="text.secondary">
							That category does not exist.
						</Typography>
						<Button component={Link} to="/" variant="contained" color="primary">
							Back to all categories
						</Button>
					</Stack>
				</Paper>
			</Container>
		);
	}

	const filteredCards = plantCards.filter(
		(card) => card.category === category.id,
	);

	return (
		<Container maxWidth={false} sx={{ maxWidth: 1600, py: { xs: 4, md: 6 } }}>
			<Stack direction="row" sx={{ mb: 2, justifyContent: "flex-end" }}>
				<RoundActionLink to="/">See All Categories</RoundActionLink>
			</Stack>
			<Typography variant="h1" sx={{ mb: 1, color: "primary.light", fontSize: { xs: "3rem", md: "4.2rem" } }}>
				{category.title}
			</Typography>
			<Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 800 }}>
				{category.description}
			</Typography>

			<Box
				component="section"
				sx={{
					display: "grid",
					gap: 2,
					gridTemplateColumns: {
						xs: "1fr",
						sm: "repeat(2, minmax(0, 1fr))",
						lg: "repeat(3, minmax(0, 1fr))",
						xl: "repeat(4, minmax(0, 1fr))",
					},
				}}
			>
				{filteredCards.map((card) => (
					<Card key={card.name} card={card} />
				))}
			</Box>
		</Container>
	);
};
