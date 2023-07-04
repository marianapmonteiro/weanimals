import React, { useState, useEffect } from "react";
import {
	Typography,
	Container,
	Box,
	Divider
} from "@mui/material";
import styled from "@emotion/styled";
import theme from "../theme/theme";
import { useLocation } from "react-router-dom";
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


function Raca() {
	const location = useLocation();
	const { especie, nome, descricao, imagens, cuidadosEspecificos, author } =
		location.state;
	const [especieNome, setEspecieNome] = useState("");

	const images = imagens.map((item) => ({
		src: `http://localhost:3001/uploads/racas/${item}`,
	}));
	useEffect(() => {
		const fetchData = async () => {
			const especiesData = await GetEspecies();
			const filteredEspecie = especiesData.filter((item) => item._id === especie);
			setEspecieNome(filteredEspecie[0].nome)

		}
		fetchData();
	}, []);


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
				<Box style={{ marginTop: '2em', display: 'flex', flexDirection: "column", gap: '2em', width: '100%' }}>
					<Divider />
					<Typography >
						Publicado por: {author}
					</Typography>
				</Box>
			</Container>
		</MainContainer>
	);
}

export default Raca;
