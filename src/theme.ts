import { alpha, createTheme } from "@mui/material/styles";

const accent = "#d7ae63";
const accentStrong = "#f3c982";
const background = "#0f1511";
const paper = "rgba(12, 19, 16, 0.8)";
const paperSoft = "rgba(18, 28, 23, 0.7)";

export const gardenTheme = createTheme({
	shape: {
		borderRadius: 20,
	},
	palette: {
		mode: "dark",
		primary: {
			main: accent,
			light: accentStrong,
			dark: "#aa8242",
			contrastText: "#152016",
		},
		secondary: {
			main: "#7ba98f",
			light: "#a8ceb9",
			dark: "#507260",
		},
		background: {
			default: background,
			paper,
		},
		text: {
			primary: "#f5f1e8",
			secondary: "rgba(245, 241, 232, 0.76)",
		},
		divider: "rgba(255, 255, 255, 0.14)",
		success: {
			main: "#53b57d",
		},
	},
	typography: {
		fontFamily: '"DM Sans", "Segoe UI", sans-serif',
		h1: {
			fontFamily: '"Fraunces", Georgia, serif',
			fontWeight: 700,
			letterSpacing: "-0.03em",
		},
		h2: {
			fontFamily: '"Fraunces", Georgia, serif',
			fontWeight: 700,
			letterSpacing: "-0.02em",
		},
		h3: {
			fontFamily: '"Fraunces", Georgia, serif',
			fontWeight: 700,
		},
		button: {
			fontWeight: 700,
			letterSpacing: "0.01em",
			textTransform: "none",
		},
		overline: {
			fontWeight: 700,
			letterSpacing: "0.18em",
			textTransform: "uppercase",
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					height: "100%",
				},
				body: {
					minHeight: "100%",
					backgroundColor: background,
					backgroundImage: [
						"radial-gradient(circle at 12% 18%, rgba(172, 112, 62, 0.24) 0%, transparent 34%)",
						"radial-gradient(circle at 85% 12%, rgba(87, 134, 157, 0.22) 0%, transparent 30%)",
						"radial-gradient(circle at 22% 84%, rgba(95, 132, 96, 0.2) 0%, transparent 32%)",
						"radial-gradient(circle at 80% 78%, rgba(52, 79, 109, 0.22) 0%, transparent 36%)",
						"repeating-linear-gradient(130deg, rgba(255, 255, 255, 0.025) 0, rgba(255, 255, 255, 0.025) 1px, transparent 1px, transparent 18px)",
						"linear-gradient(180deg, #111813 0%, #1b241e 100%)",
					].join(","),
					backgroundAttachment: "fixed",
				},
				"body, #root": {
					minHeight: "100%",
				},
				a: {
					color: "inherit",
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundImage: "none",
					backgroundColor: alpha("#0d140f", 0.82),
					backdropFilter: "blur(18px)",
					borderBottom: `1px solid ${alpha("#ffffff", 0.08)}`,
					boxShadow: "none",
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: "none",
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					backgroundColor: paperSoft,
					backdropFilter: "blur(16px)",
					border: `1px solid ${alpha("#ffffff", 0.12)}`,
					boxShadow: "0 18px 50px rgba(0, 0, 0, 0.24)",
				},
			},
		},
		MuiButton: {
			defaultProps: {
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					borderRadius: 999,
					paddingInline: 18,
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: 999,
				},
			},
		},
	},
});