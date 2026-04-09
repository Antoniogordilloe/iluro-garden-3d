import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const PlantNotFound = () => {
	return (
		<Container maxWidth={false} sx={{ maxWidth: 1600, py: { xs: 4, md: 6 } }}>
			<Paper sx={{ p: { xs: 3, md: 4 } }}>
				<Stack spacing={2} sx={{ alignItems: "flex-start" }}>
					<Typography variant="h2">Plant not found</Typography>
					<Typography variant="body1" color="text.secondary">
						That plant does not exist.
					</Typography>
					<Button component={RouterLink} to="/" color="primary" variant="contained">
						Back to all plants
					</Button>
				</Stack>
			</Paper>
		</Container>
	);
};
