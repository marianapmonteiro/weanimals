import React, { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import { useNavigate } from "react-router-dom";
import theme from "./theme/theme";
import RoutesApp from "./RoutesApp";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import Footer from "./components/Footer";

function App() {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const navigate = useNavigate();
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<GlobalStyles
				styles={{
					body: {
						minHeight: "100vh",
						position: "relative",
						backgroundColor: theme.palette.background.default,
					},
				}}
			/>
			{isMobile ? (
				<MobileNavbar navigate={navigate} />
			) : (
				<Navbar navigate={navigate} />
			)}

			<div style={{ paddingBottom: "100px", position: "relative" }}>
				<RoutesApp />
			</div>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
