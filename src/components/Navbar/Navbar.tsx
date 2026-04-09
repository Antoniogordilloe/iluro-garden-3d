import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {
	AppBar,
	Box,
	Button,
	Container,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import { PlantRenderer } from "../PlantRenderer";

const navbarLogoPath =
	"https://s29mp5al263ezccl.public.blob.vercel-storage.com/models/logo.glb";

export const Navbar = () => {
	return (
		<AppBar position="static">
			<Container maxWidth={false} sx={{ maxWidth: 1600 }}>
				<Toolbar disableGutters sx={{ py: 1.5, gap: 2.5, flexWrap: { xs: "wrap", md: "nowrap" } }}>
					<Stack
						direction="row"
						spacing={1.5}
						component={RouterLink}
						to="/"
						sx={{ textDecoration: "none", minWidth: 0, mr: { md: 2 }, alignItems: "center" }}
					>
						<Box sx={{ width: 44, height: 44, overflow: "hidden", borderRadius: "50%", flexShrink: 0 }}>
							<PlantRenderer
								modelPath={navbarLogoPath}
								sx={{ width: 1, height: 1, minHeight: 0 }}
								rotationSpeed={0.5}
								cameraPosition={[0.05, 3, 0.05]}
								modelScale={2}
							/>
						</Box>
						<Box>
							<Typography variant="overline" sx={{ color: "primary.main", lineHeight: 1.2 }}>
								Curated Houseplants
							</Typography>
							<Typography variant="h5" sx={{ color: "primary.light", lineHeight: 1.1 }}>
								Iluro Garden
							</Typography>
						</Box>
					</Stack>

					<Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", alignItems: "center" }}>
						<Button
							component="a"
							href="#"
							color="inherit"
							startIcon={<ShoppingBagOutlinedIcon />}
							variant="text"
						>
							Cart
						</Button>
						<Button
							component={RouterLink}
							to="/about"
							color="inherit"
							startIcon={<InfoOutlinedIcon />}
							variant="text"
						>
							About
						</Button>
					</Stack>

					<Box sx={{ flex: 1, minWidth: { xs: "100%", md: 280 }, display: "flex", justifyContent: { xs: "stretch", md: "flex-end" } }}>
						<SearchBar />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
