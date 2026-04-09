import { Stack } from "@mui/material";
import { RoundActionLink } from "../RoundActionLink";

type PlantPageActionsProps = {
	categoryId: string;
};

export const PlantPageActions = ({ categoryId }: PlantPageActionsProps) => {
	return (
		<Stack direction="row" spacing={1.5} useFlexGap sx={{ mb: 3, flexWrap: "wrap", justifyContent: "flex-end" }}>
			<RoundActionLink to={`/category/${categoryId}`}>
				Go Back to Category
			</RoundActionLink>
			<RoundActionLink to="/">See All Categories</RoundActionLink>
		</Stack>
	);
};
