import React, { useState, useEffect } from 'react'
import { Typography, Box, Grid, Button } from "@mui/material";
import StyledButton from "../Button";
import bunny from "../../Images/coelhinho.png";
import paws from "../../Images/paws.png";

const AjudeComunidade = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
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
		<>
			{/* <img src={paws} style={{ width: "100%" }} /> */}
			<Box
				sx={{
					width: "100%",
					height: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "center",

					"@media (max-width: 600px)": {
						// minHeight: window.innerHeight,
						minHeight: "100vh",
					},
				}}
			>
				<img
					src={bunny}
					alt="coelho"
					width="300px"
					height="300px"
					style={
						{
							// position: "absolute",
							// // top: "5%",
							// left: "50%",
							// transform: "translateX(-50%)",
							// zIndex: 1,
						}
					}
				/>
				<Box
					sx={{
						width: "50%",
						height: "50vh",
						borderRadius: "9px",
						background:
							"linear-gradient(90deg, rgba(241,153,23,1) 35%, rgba(250,197,82,1) 100%)",
						color: "white",
						display: "flex",
						gap: "3em",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						paddingInline: "100px",
						textAlign: "center",
						"@media (max-width: 600px)": {
							paddingInline: '10%',
							paddingTop: '5px',
							paddingBottom: '5px',
							width: "90%",
							gap: "1em",
						},
						"@media screen and (min-width: 600px) and (max-width: 920px)": {
							paddingInline: '50px',
							paddingTop: '5px',
							paddingBottom: '5px',
							width: "90%",
							gap: "5em",
						},
					}}
				>
					<Typography variant={isMobile ? "h6" : "h4"} style={{ fontWeight: "bold", color: '#252247' }}>
						Ajude a comunidade!
					</Typography>
					<Typography variant={isMobile ? "body2" : "body1"} style={{ color: "white" }}>
						Tem algum bichinho como membro da família? Sabe todos os cuidados
						que ele precisa e quer ajudar a novos tutores cuidarem melhor do seu
						novo bichinho? Aqui você pode! Basta entrar na aba "Animais",
						escolher a categoria e adicionar sobre o bichinho!
					</Typography>
					<Button
						variant="contained"
						style={{
							backgroundColor: "white",
							paddingInline: "4em",
							borderRadius: "20px",
						}}
					>
						Ir para⠀ ▶
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default AjudeComunidade;
