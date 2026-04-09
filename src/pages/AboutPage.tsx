import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const AboutPage = () => {
	return (
		<Container maxWidth={false} sx={{ maxWidth: 1600, py: { xs: 4, md: 6 } }}>
			<Paper sx={{ mb: 4, p: { xs: 3, md: 5 } }}>
				<Typography variant="overline" color="primary.main">
					About Iluro Garden
				</Typography>
				<Typography variant="h1" sx={{ mb: 2, color: "primary.light", fontSize: { xs: "3rem", md: "4.4rem" } }}>
					Where Plant Stories Come to Life
				</Typography>
				<Typography variant="body1" sx={{ maxWidth: 900, lineHeight: 1.9, fontSize: { xs: "1rem", md: "1.08rem" } }}>
					Iluro Garden is a curated digital greenhouse where each plant is
					presented with personality, practical care guidance, and visual
					detail. The project was designed to make plant discovery feel
					playful while still being useful for everyday plant care.
				</Typography>
			</Paper>

			<Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" } }}>
				<Paper sx={{ p: 3 }}>
					<Typography variant="h5" sx={{ mb: 1.25 }}>
						Our Mission
					</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
						Help people build confidence with plants by blending
						inspiration and clear care tips in one place.
					</Typography>
				</Paper>
				<Paper sx={{ p: 3 }}>
					<Typography variant="h5" sx={{ mb: 1.25 }}>
						What You Can Explore
					</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
						Browse categories, open detailed plant pages, and find related
						plants to continue your journey.
					</Typography>
				</Paper>
				<Paper sx={{ p: 3 }}>
					<Typography variant="h5" sx={{ mb: 1.25 }}>
						Built With Care
					</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
						The experience uses React, Vite, and reusable UI components to
						stay fast, modular, and easy to grow.
					</Typography>
				</Paper>
			</Box>

			<Stack direction="row" sx={{ mt: 4 }}>
				<Button component={RouterLink} to="/" variant="contained" color="primary">
					Back Home
				</Button>
			</Stack>
		</Container>
	);
};
