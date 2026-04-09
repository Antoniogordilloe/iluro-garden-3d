import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { Alert, Box, Collapse, IconButton } from "@mui/material";
import { useState } from "react";
import { Navbar } from "../Navbar";

export const Header = () => {
	const [isOfferVisible, setIsOfferVisible] = useState(true);
	const madeupOffer = "Spring Vault Sale: 2 rare plants + free ceramic pot for 39.90";

	return (
		<Box component="header" sx={{ position: "sticky", top: 0, zIndex: (theme) => theme.zIndex.appBar }}>
			<Collapse in={isOfferVisible}>
				<Alert
					icon={<LocalOfferOutlinedIcon fontSize="inherit" />}
					action={
						<IconButton
							aria-label="Close offer banner"
							color="inherit"
							size="small"
							onClick={() => setIsOfferVisible(false)}
						>
							<CloseRoundedIcon fontSize="small" />
						</IconButton>
					}
					sx={{
						borderRadius: 0,
						justifyContent: "center",
						backgroundColor: "rgba(215, 174, 99, 0.96)",
						color: "#4c2a10",
						borderBottom: "1px solid rgba(76, 42, 16, 0.2)",
						"& .MuiAlert-message": { fontWeight: 700, letterSpacing: "0.01em" },
					}}
				>
					{madeupOffer}
				</Alert>
			</Collapse>
			<Navbar />
		</Box>
	);
};
