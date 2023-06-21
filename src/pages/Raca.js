import React, { useState, useEffect } from "react";
import {
	Typography,
	Container,
} from "@mui/material";
import styled from "@emotion/styled";
import theme from "../theme/theme";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { GetEspecies } from "../requests/Especies";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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

function Raca() {
	const navigate = useNavigate();
	const [isMedium, setIsMedium] = useState(window.innerWidth <= 1919);
	const location = useLocation();
	const { especie, nome, descricao, imagens, cuidadosEspecificos } =
		location.state;
	const [especies, setEspecies] = useState([]);
	const [especieNome, setEspecieNome] = useState("");
	console.log('especie:', especie)

	const images = imagens.map((item) => ({
		src: `http://localhost:3001/uploads/racas/${item}`,
	}));

	useEffect(() => {
		const fetchData = async () => {
			await GetEspecies(setEspecies);
			especies.forEach((item) => {
				if (item._id === especie) {
					setEspecieNome(item.nome);
				}
			});
		};
		fetchData();
	}, []);
	useEffect(() => {
		especies.forEach((item) => {
			if (item._id === especie) {
				setEspecieNome(item.nome);
			}
		});
	}, [especies]);

	console.log('especie nome', especieNome)


	return (
		<MainContainer>
			<CarouselBox>
				<Carousel images={images} />
			</CarouselBox>
			<Container maxWidth="lg">
				<BoxFlex style={{ marginTop: "1em" }}>
					<Typography variant="h5" style={{ fontWeight: "bold" }}>
						Nome:
					</Typography>
					<Typography variant="body1">{nome}</Typography>
				</BoxFlex>
				<BoxFlex>
					<Typography variant="h5" style={{ fontWeight: "bold" }}>
						Espécie:
					</Typography>
					<Typography alignItems="flex-end" mt={0}>
						{especieNome}
					</Typography>
				</BoxFlex>
				<BoxFlex style={{ flexDirection: "column", alignItems: "flex-start" }}>
					<Typography variant="h5" style={{ fontWeight: "bold" }}>
						Descricao:
					</Typography>
					{/* <Typography
						mt={0}
						style={{
							wordBreak: "break-word",
						}}
					>
						{descricao}
					</Typography> */}
					<ReactQuill
						value={descricao}
						readOnly={true}
						theme={"bubble"}
					/>
				</BoxFlex>
				<BoxFlex>
					<Typography variant="h5" style={{ fontWeight: "bold" }} align="left">
						Cuidados específicos:
					</Typography>
					<Typography
						mt={0}
						style={{
							wordBreak: "break-word",
						}}
					>
						{cuidadosEspecificos}
					</Typography>
				</BoxFlex>
			</Container>
		</MainContainer>
	);
}

export default Raca;
