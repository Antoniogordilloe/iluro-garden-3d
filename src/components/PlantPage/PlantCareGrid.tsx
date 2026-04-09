import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import { Box, Paper, Stack, Typography } from "@mui/material";
import type { PlantCard } from "../../constants/plantCards";

type PlantCareGridProps = {
	plant: PlantCard;
};

const careInfoItems = [
	{ key: "light", label: "Light", icon: <LightModeOutlinedIcon /> },
	{ key: "water", label: "Water", icon: <WaterDropOutlinedIcon /> },
	{ key: "petSafe", label: "Pet Safe", icon: <PetsOutlinedIcon /> },
] as const;

export const PlantCareGrid = ({ plant }: PlantCareGridProps) => {
	return (
		<Box
			component="section"
			sx={{
				mb: 5,
				display: "grid",
				gap: 2,
				gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" },
			}}
		>
			{careInfoItems.map((item) => (
				<Paper
					key={item.key}
					sx={{ p: 3 }}
				>
					<Stack direction="row" spacing={1.5} sx={{ mb: 1.5, alignItems: "center" }}>
						<Box sx={{ color: "primary.main", display: "inline-flex" }}>{item.icon}</Box>
						<Typography variant="h6">{item.label}</Typography>
					</Stack>
					<Typography variant="body1" color="text.secondary">
						{plant[item.key]}
					</Typography>
				</Paper>
			))}
		</Box>
	);
};
