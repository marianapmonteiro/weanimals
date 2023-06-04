import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
	palette: {
		background: {
			default: "#DFEAFD",
		},
		primary: {
			main: "#A39CE7",
			dark: "#6861AC",
		},
		secondary: {
			main: "#FDE834",
			dark: "#AFA339",
		},
	},
	typography: {
		fontFamily: ["Roboto"].join(","),
		h2: {
			color: "#252247", // Define a cor dos títulos (h2) como dark
		},
		h3: {
			color: "#252247", // Define a cor dos títulos (h3) como dark
		},
		h4: {
			color: "#252247", // Define a cor dos títulos (h4) como dark
		},
		body1: {
			color: "#7069c0", // Define a cor dos parágrafos (body1) como primary
		},
		button: {
			color: "#ffffff",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 913,
			lg: 1200,
			xl: 1536,
		},
	},
	overrides: {
		MuiButton: {
			root: {
				background:
					"linear-gradient(90deg, rgba(78, 70, 148, 1) 35%, rgba(163, 156, 231, 1) 100%)",
				color: "white",
				paddingInline: "20px",
				borderRadius: "50px",
				fontWeight: "light",
				fontStyle: "normal",
			},
			label: {
				color: "white", // Set the color for the button label
			},
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
