import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { GetRacaById } from "../requests/Raca";
import { useLocation, useNavigate } from "react-router-dom";
import {
	Typography,
	Container,
	Box,
	Divider
} from "@mui/material";
import styled from "@emotion/styled";
import theme from "../theme/theme";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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


function Raca() {
	const { cookies } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const id = searchParams.get("id");

	const userId = cookies.UserData.userId;

	const [raca, setRaca] = useState()
	const [imagens, setImagens] = useState([])


	useEffect(() => {
		const getRaca = async () => {
			const raca = await GetRacaById(id)
			setRaca(raca)
		}

		getRaca();

	}, [id]);

	console.log("raca", raca)
	useEffect(() => {
		const getImgs = () => {
			const imgs = raca && raca.imagens && raca.imagens.map((item) => ({
				src: `http://localhost:3001/uploads/racas/${item}`,
			}));
			setImagens(imgs)
		}
		getImgs();

	}, [raca])

	return (
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
					<Typography variant="body1">{raca && raca.nome}</Typography>
				</BoxFlex>
				<BoxFlex>
					<Typography variant="h5" style={{ fontWeight: "bold" }}>
						Espécie:
					</Typography>
					{raca && raca.especie === null ? <Typography alignItems="flex-end" mt={0}>Espécie não encontrada</Typography> : <Typography alignItems="flex-end" mt={0}>
						{raca && raca.especie.nome}
					</Typography>}
				</BoxFlex>
				<BoxFlex style={{ flexDirection: "column", alignItems: "flex-start" }}>
					<Typography variant="h5" style={{ fontWeight: "bold" }}>
						Descricao:
					</Typography>
					<ReactQuill
						value={raca && raca.descricao}
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
						{raca && raca.cuidadosEspecificos}
					</Typography>
				</BoxFlex>
				{userId === raca?.authorId && (
					<Box style={{ display: 'flex', width: "100%", justifyContent: "flex-end", alignItems: "center" }}>
						<Box style={{
							cursor: 'pointer', display: 'flex', gap: "0.5em"
						}}
							onClick={() => {
								navigate("/addraca", {
									state: {
										alterar: true,
										racaId: raca._id,
										altNome: raca.nome,
										altDescricao: raca.descricao,
										altCuidadosEspecificos: raca.cuidadosEspecificos,
										altImgs: raca.imagens,
									},
								});
							}}
						>
							<EditIcon />
							<Typography>Editar</Typography>
						</Box>
					</Box>)}
				<Box style={{ marginTop: '2em', display: 'flex', flexDirection: "column", gap: '2em', width: '100%' }}>
					<Divider />
					<Typography >
						Publicado por: {raca && raca.authorName}
					</Typography>
				</Box>
			</Container>
		</MainContainer>
	);
}

export default Raca;
