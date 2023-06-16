import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AddEspecie } from "../../requests/Especies";
import axios from 'axios'
import Swal from "sweetalert2";
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
	flex-wrap: wrap;
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
	const { user } = useContext(AuthContext);
	const author = user.name;
	const location = useLocation();
	const category = location.state.category;

	const exemplos = ["Noturno", "Sociavel", "Territorialista"];
	const [nome, setNome] = useState("");
	const [descricao, setDescricao] = useState("");
	const [files, setFiles] = useState([]);
	const [etiqueta, setEtiqueta] = useState("");
	const [etiquetas, setEtiquetas] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loadingImgs, setLoadingImgs] = useState(false);
	const [helpText, setHelpText] = useState(false);
	const [errorLabel, setErrorLabel] = useState("");

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
	const handleImage = async (e) => {
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
		if (
			nome === "" ||
			descricao === "" ||
			files.length === 0 ||
			etiquetas.length === 0 ||
			files.length > 5
		) {
			setHelpText(true);
			setErrorLabel("Preencha todos os campos com os valores corretos")
		}
		else {
			setHelpText(false);
			try {
				const formData = new FormData();

				formData.append("nome", nome);
				formData.append("descricao", descricao);
				files.forEach((file) => {
					formData.append("imagens", file);
				});
				etiquetas.forEach((value) => {
					formData.append('etiquetas[]', value);
				});
				formData.append("category", category);
				formData.append("author", author);

				await AddEspecie(formData);

			} catch (error) {
				console.error("Error uploading images:", error);
			}
		}
		setLoading(false);
	};

	return (
		<Container style={{ marginTop: "2em" }} maxWidth="lg">
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
							setNome(e.target.value);
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
							setDescricao(e.target.value);
						}}
					/>
				</BoxForm>

				<BoxForm>
					<Typography>Imagens</Typography>
					<Typography style={{ color: 'gray', fontSize: '12px' }}> *Max 5</Typography>
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
						<input type="file" name="images" hidden onChange={handleImage} multiple disabled={loadingImgs}
						/>
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
							{etiquetas.map((item, index) => (
								<Alert key={item}>
									<Typography variant="body1" style={{ color: "white" }}>
										{item}
									</Typography>
									<HighlightOffIcon
										style={{ color: "white", cursor: "pointer" }}
										onClick={() => handleDeleteEtiqueta(index)}
									/>
								</Alert>
							))}
						</>
					)}
				</BoxExemplos>
				{helpText ? (
					<BoxForm>
						<Typography variant="body1" style={{ color: "red" }}>
							{errorLabel}
						</Typography>
					</BoxForm>
				) : null}
				{loading ? (
					<BoxBtn><CircularProgress /></BoxBtn>
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
