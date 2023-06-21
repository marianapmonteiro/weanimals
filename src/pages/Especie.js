import React, { useState, useEffect } from "react";
import {
	Divider,
	Typography,
	Container,
	Box
} from "@mui/material";
import styled from "@emotion/styled";
import theme from "../theme/theme";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { GetRacas } from '../requests/Raca'
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

function Especie() {
	const navigate = useNavigate();
	const location = useLocation();
	const { id, nome, descricao, etiquetas, imagens, author } = location.state;
	const [racas, setRacas] = useState([]);
	const [filteredRacas, setFilteredRacas] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			await GetRacas(setRacas);
		};
		fetchData();

	}, []);

	useEffect(() => {
		const filteredRacas = racas.filter((item) => item.especie === id);
		setFilteredRacas(filteredRacas);
	}, [racas]);


	console.log('filteredRacasNames', setFilteredRacas)
	const images = imagens.map((item) => ({
		src: `http://localhost:3001/uploads/especies/${item}`,
	}));

	return (
		<Container maxWidth="lg">
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
					<BoxFlex style={{ flexDirection: "column", alignItems: "flex-start" }}>
						<Typography variant="h5" mt={0} style={{ fontWeight: "bold" }}>
							Descricao:
						</Typography>
						{/* <Typography
							alignItems="flex-end"
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
						{filteredRacas.length > 0 ? filteredRacas.map((item) => {
							return (
								<Typography variant="body1" style={{ cursor: 'pointer' }} onClick={() => {
									navigate("/raca", {
										state: {
											nome: item.nome,
											descricao: item.descricao,
											cuidadosEspecificos: item.cuidadosEspecificos,
											imagens: item.imagens,
											especie: item.especie,
										},
									});
								}}>{item.nome}</Typography>
							)
						}) : <Typography>Nenhuma raça encontrada</Typography>}

					</BoxFlex>
					<Box style={{ marginTop: '2em', display: 'flex', flexDirection: "column", gap: '2em', width: '100%' }}>
						<Divider />
						<Typography >
							Publicado por: {author}
						</Typography>
					</Box>
				</Container>
			</MainContainer>
		</Container>
	);
}

export default Especie;
