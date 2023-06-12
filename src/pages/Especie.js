import React, { useState, useEffect } from "react";
import {
	Divider,
	Typography,
	TextField,
	InputAdornment,
	Container,
} from "@mui/material";
import styled from "@emotion/styled";
import theme from "../theme/theme";
import { useLocation, useNavigate } from "react-router-dom";
import gato from "../Images/bunny.jpg";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const MainContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 4em;
	margin-top: 3em;
	padding-bottom: 5em;
	justify-content: center;
	align-items: center;
	@media (max-width: ${theme.breakpoints.values.sm}px) {
		height: 100%;
		margin-top: 0;
		padding-bottom: 0;
	}
`;

const CarouselBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2em;
	width: 500px;
	height: 500px;

	@media (max-width: ${theme.breakpoints.values.sm}px) {
		margin-top: 2em;
		width: 250px;
		height: 250px;
	}
`;
const ImgCarousel = styled.img`
	border-radius: 1000px;
	width: 350px;
	height: 350px;
	@media (max-width: ${theme.breakpoints.values.sm}px) {
		width: 200px;
		height: 200px;
	}
`;

const BoxFlex = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 5em;
	gap: 1em;
	align-items: center;
	@media (max-width: ${theme.breakpoints.values.sm}px) {
		max-width: 300px;
	}
`;
const Alert = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1em;
	width: fit-content;
	background-color: #a39ce7;
	padding: 0.5em;
	padding-inline: 1em;
`;

function Especie() {
	const [isMedium, setIsMedium] = useState(window.innerWidth <= 1919);
	const location = useLocation();
	const { nome, descricao, etiquetas, racas, imagens } = location.state;

	const images = imagens.map((item) => ({
		src: item,
	}));
	console.log("imgs", imagens);
	useEffect(() => {
		const handleResize = () => {
			setIsMedium(window.innerWidth <= 1919);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<MainContainer>
			<CarouselBox>
				<Carousel images={images} />
			</CarouselBox>
			<Container maxWidth={isMedium ? "md" : "xl"}>
				<BoxFlex style={{ marginTop: "1em" }}>
					<Typography variant="h5" style={{ fontWeight: "bold" }}>
						Nome:
					</Typography>
					<Typography variant="body1">{nome}</Typography>
				</BoxFlex>
				<BoxFlex>
					<Typography variant="h5" mt={0} style={{ fontWeight: "bold" }}>
						Descricao:
					</Typography>
					<Typography
						alignItems="flex-end"
						mt={0}
						style={{
							wordBreak: "break-word",
						}}
					>
						{descricao}
					</Typography>
				</BoxFlex>
				<BoxFlex>
					<Typography variant="h5" style={{ fontWeight: "bold" }}>
						Etiquetas:
					</Typography>
				</BoxFlex>
				<div
					style={{
						display: "flex",
						gap: "1em",
						marginTop: "2em",
						flexWrap: "wrap",
					}}
				>
					{etiquetas.map((item) => (
						<Alert key={item}>
							<Typography
								variant="body1"
								style={{ color: "white", textAlign: "end" }}
							>
								{item}
							</Typography>
						</Alert>
					))}
				</div>
				<BoxFlex>
					<Typography variant="h5" style={{ fontWeight: "bold" }}>
						Raças
					</Typography>
				</BoxFlex>
				<BoxFlex style={{ marginTop: "1em" }}>
					<Typography style={{ color: theme.palette.secondary.dark }}>
						raça1
					</Typography>
					<Typography style={{ color: theme.palette.secondary.dark }}>
						raça2
					</Typography>
				</BoxFlex>
			</Container>
		</MainContainer>
	);
}

export default Especie;
