import React from "react";
import { Grid, Typography, Container, Box } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../theme/theme";
import bunnies from "../Images/bunnies.jpg";

const Content = styled.div`
	width: 100%;
	height: 100vh;

	@media (max-width: ${theme.breakpoints.values.sm}px) {
	
	}
	@media (min-width: 1736px) {
		
	},
}}
`;

const ImgContainer = styled.div`
	width: 100%;
	height: 50%;
	top: 0;
	background-color: pink;
	background-image: url(${bunnies});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	filter: brightness(70%); 
	@media (max-width: ${theme.breakpoints.values.sm}px) {
	
	}
	@media (min-width: 1736px) {
		
	},
}}
`;

const TextContainer = styled.div`
	width: 100%;
	display:flex;
	justify-content: center;
	align-items:center;
	padding-inline: 4em;
	@media (max-width: ${theme.breakpoints.values.sm}px) {
	
	}
	@media (min-width: 1736px) {
		
	},
}}
`;

function AboutUs() {
	return (
		<Content>
			<ImgContainer />

			<Box
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "2em",
					color: "white",
					backgroundColor: theme.palette.primary.main,
				}}
			>
				<Typography variant="h4" style={{ fontWeight: "bold" }}>
					SOBRE NÓS
				</Typography>
			</Box>

			<Box
				style={{
					marginTop: "4em",
					paddingInline: "4em",
					width: "100%",
					display: "flex",
					justifyContent: "flex-end",
					alignItems: "center",
				}}
			>
				<Grid
					container
					style={{
						display: "flex",
						textAlign: "justify",
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					<Grid item xs={4}>
						<Typography variant="body1">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</Typography>
					</Grid>
					<Grid
						item
						xs={6}
						style={{ display: "flex", justifyContent: "flex-start" }}
					>
						<img
							src={bunnies}
							style={{
								width: "200px",
								height: "200px",
								borderRadius: "1000px",
							}}
						/>
					</Grid>
					<Grid
						item
						xs={6}
						style={{ display: "flex", justifyContent: "center" }}
					>
						<img
							src={bunnies}
							style={{
								width: "200px",
								height: "200px",
								borderRadius: "1000px",
							}}
						/>
					</Grid>
					<Grid item xs={4}>
						<Typography variant="body1">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Content>
	);
}

export default AboutUs;
