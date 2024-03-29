import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { GetComunidades } from "../requests/Comunidades";
import { GetRacas } from '../requests/Raca'
import { GetEspecieById } from "../requests/Especies"
import {
	Divider,
	Typography,
	Container,
	Box
} from "@mui/material";
import styled from "@emotion/styled";
import theme from "../theme/theme";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EditIcon from '@mui/icons-material/Edit';

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
	const { cookies } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const searchParams = new URLSearchParams(location.search);
	const id = searchParams.get("id");

	const [especie, setEspecie] = useState();

	const userId = cookies.UserData.userId;

	const [racas, setRacas] = useState([]);
	const [comunidades, setComunidades] = useState([])
	const [imagens, setImagens] = useState([])

	useEffect(() => {
		const getEspecie = async () => {
			const especie = await GetEspecieById(id)
			setEspecie(especie)
		}
		const fetchData = async () => {
			const racasData = await GetRacas();
			const filteredRacas = racasData.filter((item) => item.especie === id);
			setRacas(filteredRacas)
		}
		const fetchData2 = async () => {
			await GetComunidades(id, setComunidades)
		};

		getEspecie();
		fetchData();
		fetchData2()
	}, [id]);

	useEffect(() => {
		const getImgs = () => {
			const imgs = especie && especie.imagens && especie.imagens.map((item) => ({
				src: `http://localhost:3001/uploads/especies/${item}`,
			}));
			setImagens(imgs)
		}
		getImgs();

	}, [especie])

	return (
		<Container maxWidth="lg">
			<MainContainer>
				{imagens && imagens.length > 0 && (
					<CarouselBox>
						<Carousel images={imagens} />
					</CarouselBox>
				)}
				<Container maxWidth="lg">
					<BoxFlex style={{ marginTop: "1em" }}>
						<Typography variant="h5" style={{ fontWeight: "bold" }}>
							Nome:
						</Typography>
						<Typography variant="h6">{especie && especie.nome}</Typography>
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
							value={especie && especie.descricao}
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
						{especie && especie.etiquetas.map((item) => (
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
						{racas.length > 0 ? racas.map((item) => {
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
					<Box style={{ display: "flex", flexDirection: "column", gap: "2em", marginTop: "5em" }}>
						<Typography variant="h5" style={{ fontWeight: "bold" }}>Comunidades</Typography>
						{comunidades.length > 0 ?
							comunidades.map((item) => {
								return (
									<Box style={{ display: "flex", alignItems: "center", gap: "1em" }}>
										{item.redeSocial === 'Instagram' ? <InstagramIcon /> : item.redeSocial === 'Facebook' ? <FacebookIcon /> : <WhatsAppIcon />}
										<a href={item.link} target="_blank">{item.nome}</a>
									</Box>
								)
							})
							: <Typography>Nenhuma comunidade cadastrada</Typography>}
						{userId === especie?.authorId && (
							<Box style={{ display: 'flex', width: "100%", justifyContent: "flex-end", alignItems: "center" }}>
								<Box style={{
									cursor: 'pointer', display: 'flex', gap: "0.5em"
								}}
									onClick={() => {
										navigate("/addespecie", {
											state: {
												alterar: true,
												especieId: especie._id,
												altNome: especie.nome,
												altDescricao: especie.descricao,
												altEtiquetas: especie.etiquetas,
												altComunidades: comunidades,
												altImgs: especie.imagens,
											},
										});
									}}
								>
									<EditIcon />
									<Typography>Editar</Typography>
								</Box>
							</Box>)}
					</Box>
					<Box style={{ marginTop: '2em', display: 'flex', flexDirection: "column", gap: '2em', width: '100%' }}>
						<Divider />
						<Typography >
							Publicado por: {especie && especie.authorName}
						</Typography>
					</Box>

				</Container>
			</MainContainer >
		</Container >
	);
}

export default Especie;
