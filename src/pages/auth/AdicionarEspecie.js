import React, { useState, useEffect } from "react";
import {
	Typography,
	Container,
	Divider,
	TextField,
	Button,
	CircularProgress,
	IconButton,
} from "@mui/material";
import styled from "@emotion/styled";
import dog from "../../Images/download.jpg";
import theme from "../../theme/theme";
import AddIcon from "@mui/icons-material/Add";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { AddEspecie } from "../../requests/Especies";
import axios from "axios";

const Box = styled.div`
	width: 100%;
	height: 100%;
`;
const Title = styled.div`
	width: 100%;
`;
const BoxInformacoes = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 5em;
	margin-top: 2em;
	@media (max-width: ${theme.breakpoints.values.sm}px) {
		flex-direction: column;
		gap: 1em;
		align-items: flex-start;
		padding-left: 1em;
	}
`;

const BoxInfo = styled.div`
	width: 500px;
	text-align: left;
	@media (max-width: ${theme.breakpoints.values.sm}px) {
		width: 50vw;
		diplay: flex;
		flex-direction: column;
	}
`;
const BoxForm = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5em;
`;
const BoxExemplos = styled.div`
	margin-top: 1em;
	display: flex;
	flex-direction: column;
	gap: 1em;
`;
const Alert = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1em;
	width: fit-content;
	background-color: #a39ce7;
	padding: 0.5em;
`;
const BoxBtn = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 5em;
`;
const Thumbs = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1em;
	width: fit-content;
	padding-top: 3em;
`;
const Imgs = styled.img`
	width: 60px;
	height: 60px;
	border-radius: 1000px;
`;

function AdicionarEspecie() {
	const [isMedium, setIsMedium] = useState(window.innerWidth <= 1919);
	useEffect(() => {
		const handleResize = () => {
			setIsMedium(window.innerWidth <= 1919);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const exemplos = ["Noturno", "Sociavel", "Territorialista"];
	const [nome, setNome] = useState("");
	const [descricao, setDescricao] = useState("");
	const [files, setFiles] = useState([]);
	const [imagens, setImagens] = useState([]);
	const [etiqueta, setEtiqueta] = useState("");
	const [etiquetas, setEtiquetas] = useState([]);
	const [category, setCategory] = useState("");
	const [loading, setLoading] = useState(false);

	const handleEtiquetas = () => {
		setEtiquetas((prevValor) => [...prevValor, etiqueta]);
	};

	const handleDeleteEtiqueta = (index) => {
		setEtiquetas((prev) => {
			const novoArray = [...prev];
			novoArray.splice(index, 1);
			return novoArray;
		});
	};
	const handleImage = (e) => {
		console.log("chamando a funcao");
		const newImages = Array.from(e.target.files);
		setFiles((prevImages) => [...prevImages, ...newImages]);
	};

	const handleDeleteImage = (index) => {
		setFiles((prevImages) => {
			const newImages = [...prevImages];
			newImages.splice(index, 1);
			return newImages;
		});
	};

	const addEspecie = async () => {
		setLoading(true);

		try {
			const formData = new FormData();
			const key = "8b39fd8e05217d4a8bc071ccfe514541";

			for (let i = 0; i < files.length; i++) {
				formData.append("image", files[i]);
			}

			console.log("formData:", formData);

			const response = await axios({
				method: "post",
				url: `https://api.imgbb.com/1/upload?key=${key}`,
				data: formData,
			});

			const imageUrl = response.data.url;

			console.log("Image URL:", imageUrl);
			setImagens((prevImagens) => [...prevImagens, imageUrl]);

			await AddEspecie(nome, descricao, imagens, etiquetas, category);
		} catch (error) {
			console.error("Error uploading images:", error);
		}

		setLoading(false);
	};

	return (
		<Container style={{ marginTop: "2em" }} maxWidth={isMedium ? "lg" : "xl"}>
			<Box>
				<Title>
					<Typography variant="h4">Adicionar Bichinho (Espécie)</Typography>
					<Divider width="100%" />
				</Title>
				<BoxInformacoes>
					<img
						src={dog}
						alt="dog"
						width="100px"
						height="100px"
						style={{ borderRadius: "1000px" }}
					/>
					<BoxInfo>
						<Typography
							variant="body1"
							sx={{
								fontWeight: "bold",
								color: theme.palette.secondary.dark,
							}}
						>
							Olá! Nessa página você pode adicionar uma espécie de bichinho,
							suas informações e fotos! Assim você pode ajudar a nossa
							comunidade a entender mais sobre esse bichinho.
						</Typography>
					</BoxInfo>
				</BoxInformacoes>

				<BoxForm>
					<Typography>Nome da espécie</Typography>
					<TextField
						style={{ width: "50%" }}
						margin="dense"
						onChange={(e) => {
							setNome(e);
						}}
					/>
				</BoxForm>

				<BoxForm>
					<Typography>Descrição</Typography>
					<TextField
						style={{ width: "50%" }}
						rows={4}
						multiline
						margin="dense"
						onChange={(e) => {
							setDescricao(e);
						}}
					/>
				</BoxForm>

				<BoxForm>
					<Typography>Imagens</Typography>
					<Button
						variant="contained"
						component="label"
						sx={{
							color: "white",
							width: "20%",
							marginTop: "2em",
							"@media (max-width: 600px)": {
								width: "40%",
							},
						}}
					>
						Upload File
						<input type="file" hidden onChange={handleImage} multiple />
					</Button>
					<Thumbs>
						{Array.isArray(files) &&
							files.map((item, index) => (
								<div style={{ position: "relative" }} key={index}>
									<Imgs src={URL.createObjectURL(item)} alt="upload" />
									<IconButton
										aria-label="delete"
										size="small"
										style={{
											position: "absolute",
											zIndex: 1,
											top: -15,
											right: -10,
										}}
										onClick={() => handleDeleteImage(index)}
									>
										<HighlightOffIcon style={{ color: "red" }} />
									</IconButton>
								</div>
							))}
					</Thumbs>
				</BoxForm>

				<BoxForm>
					<Typography>Etiquetas</Typography>
					<Box
						style={{
							display: "flex",
							justifyContent: "flex-start",
							alignItems: "center",
							gap: "2em",
						}}
					>
						<TextField
							style={{ width: "20%" }}
							multiline
							margin="dense"
							onChange={(e) => {
								setEtiqueta(e.target.value);
							}}
						/>{" "}
						<AddIcon
							style={{ color: theme.palette.secondary.dark, cursor: "pointer" }}
							onClick={handleEtiquetas}
						/>
					</Box>
				</BoxForm>
				<BoxExemplos>
					{etiquetas.length === 0 ? (
						<div
							style={{
								opacity: "0.5",
								display: "flex",
								flexDirection: "column",
								gap: "1em",
							}}
						>
							<Typography variant="body1">Ex:</Typography>
							{exemplos.map((item) => (
								<Alert key={item}>
									<Typography variant="body1" style={{ color: "white" }}>
										{item}
									</Typography>
									<HighlightOffIcon style={{ color: "white" }} />
								</Alert>
							))}
						</div>
					) : (
						<>
							{etiquetas.map((item) => (
								<Alert key={item}>
									<Typography variant="body1" style={{ color: "white" }}>
										{item}
									</Typography>
									<HighlightOffIcon
										style={{ color: "white", cursor: "pointer" }}
										onClick={handleDeleteEtiqueta}
									/>
								</Alert>
							))}
						</>
					)}
				</BoxExemplos>

				{loading ? (
					<CircularProgress />
				) : (
					<BoxBtn>
						{" "}
						<Button
							variant="contained"
							style={{
								backgroundColor: "#AFA339",
								color: "white",

								bordeRadius: "8px",
							}}
							onClick={() => {
								addEspecie();
							}}
						>
							Adicionar Espécie
						</Button>{" "}
					</BoxBtn>
				)}
			</Box>
		</Container>
	);
}

export default AdicionarEspecie;
