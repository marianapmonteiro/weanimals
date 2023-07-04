import React from "react";
import { Typography, Container, Box, Grid } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../theme/theme";
import Posts from "../components/Home/Posts";
import ListagemPets from "../components/Home/ListagemPets";
import StyledButton from "../components/Button";
import CuidadosAnimais from "../components/Home/CuidadosAnimais";
import Adocao from "../components/Home/Adocao";
import AjudeComunidade from "../components/Home/AjudeComunidade";
import { useNavigate } from "react-router-dom";
import logo from '../Images/WeAnimalsLogo.png'
import image from '../Images/homeGif.gif'

const Circle = styled.div`
	width: 60vh;
	height: 60vh;
	display: flex;
	background-image: url(${image});
	background-size: cover;
	background-color: gray;
	border-radius: 50%;
	margin-bottom: 50px;
	@media (max-width: ${theme.breakpoints.values.sm}px) {
		width: 50vw;
		height: 30vh;
	}
	@media (min-width: 1736px) {
		width: 30vw;
		height: 60vh;
	},
}}
`;

const Img = styled.img`
	width: 250px;
	height: 250px;
	@media (max-width: ${theme.breakpoints.values.sm}px) {
		width: 160px;
		height: 160px;
	}
	@media (min-width: 1736px) {
		width: 350px;
		height: 350px;
	},
}}
`;

function Home() {
	const navigate = useNavigate();

	return (
		<>
			<Container
				maxWidth='lg'
				sx={{
					height: "100%",
					width: "100%",
					// paddingTop: "5%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					"@media (max-width: 600px)": {
						paddingTop: "0",
					},
					"@media screen and (min-width: 1200px) and (max-width: 1790px)": {
						paddingTop: "5%",
					},
				}}
			>
				<Grid
					container
					spacing={2}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Grid item md={6} sx={12}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "1rem",
								width: "400px",
								height: "100%",
								"@media (max-width: 600px)": {
									paddingTop: "10%",
									width: "100%",
									paddingBottom: "20%",
								},
							}}
						>
							{/* <Typography variant="h2" style={{ fontWeight: "bold" }}>
								WE ANIMALS
							</Typography> */}
							<Img src={logo} alt="logo" />
							<Typography variant="body1">
								Somos uma comunidade apaixonada por bichinhos! Venha se unir a
								gente! Conte como é sua rotina, suas características e seus
								gostos que iremos lhe mostrar o bichinho que mais combina com
								você!
							</Typography>
						</Box>
					</Grid>
					<Grid item md={6} xs={12} sx={{
						"@media (min-width: 1735px)": {
							marginTop: "5%",

						},
					}}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								// gap: "50px",
								paddingBottom: "10%",
								position: "relative",
								width: "100%",
								"@media (max-width: 600px)": {
									paddingBottom: "100px",
								},
							}}
						>
							<Circle />
							<StyledButton
								width="60%"
								variant="contained"
								sx={{
									background:
										"linear-gradient(90deg, rgba(241,153,23,1) 35%, rgba(250,197,82,1) 100%)",
									color: "white",
									borderRadius: "8px",
									paddingInline: "10px",
									width: "60vh",
									"@media (max-width: 600px)": {
										width: "80vw",
									},
									"@media (min-width: 1736px)": {
										width: "30vh",
									},
								}}
								text={"COMEÇAR"}
								onClick={() => {
									navigate("/pareamentopet");
								}}
							/>
						</Box>
					</Grid>
				</Grid>
				<ListagemPets />
				<CuidadosAnimais />
				<Adocao />
				<AjudeComunidade />
				{/* <Posts /> */}
			</Container>
		</>
	);
}

export default Home;
