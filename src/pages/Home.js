import React from "react";
import {
	Typography,
	Container,
	Box,
	Button,
	Divider,
	Grid,
} from "@mui/material";
import styled from "@emotion/styled";
import theme from "../theme/theme";
import Posts from "../components/Home/Posts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListagemPets from "../components/Home/ListagemPets";
import StyledButton from "../components/Button";
import CuidadosAnimais from "../components/Home/CuidadosAnimais";

const Circle = styled.div`
	width: 60vh;
	height: 60vh;
	display: flex;
	background-color: gray;
	border-radius: 50%;
	margin-bottom: 50px;
	@media (max-width: ${theme.breakpoints.values.sm}px) {
		width: 50vw;
		height: 30vh;
	}
`;

function Home() {
	return (
		<>
			<Container
				sx={{
					height: "100%",
					paddingTop: "5%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",

					"@media (max-width: 600px)": {
						height: "100%",
						paddingTop: "0",
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
							<Typography variant="h2" style={{ fontWeight: "bold" }}>
								WE ANIMALS
							</Typography>
							<Typography variant="body1">
								Somos uma comunidade apaixonada por bichinhos! Venha se unir a
								gente! Conte como é sua rotina, suas características e seus
								gostos que iremos lhe mostrar o bichinho que mais combina com
								você!
							</Typography>
						</Box>
					</Grid>
					<Grid item md={6} sx={12}>
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
									width: "60vh",
									"@media (max-width: 600px)": {
										width: "80vw",
									},
								}}
								text={"COMEÇAR"}
							/>
						</Box>
					</Grid>
				</Grid>

				<ListagemPets />
				<CuidadosAnimais />
				<Divider style={{ paddingBottom: "25%" }} />
				<Posts />
			</Container>
		</>
	);
}

export default Home;
