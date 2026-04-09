import { type ReactNode } from "react";
import { Button } from "@mui/material";
import { Link as RouterLink, type To } from "react-router-dom";

interface RoundActionLinkProps {
	to: To;
	children: ReactNode;
}

export const RoundActionLink = ({ to, children }: RoundActionLinkProps) => {
	return (
		<Button
			component={RouterLink}
			to={to}
			variant="outlined"
			color="inherit"
			sx={{
				borderColor: "divider",
				backgroundColor: "rgba(18, 25, 19, 0.62)",
				"&:hover": {
					borderColor: "primary.main",
					backgroundColor: "rgba(18, 25, 19, 0.86)",
				},
			}}
		>
			{children}
		</Button>
	);
};
