import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
	Typography,
	Container,
	Divider,
	TextField,
	Button,
	Select,
	MenuItem,
	IconButton,
	CircularProgress,
} from "@mui/material";
import styled from "@emotion/styled";
import rabbit from "../../Images/rabbit.jpg";
import theme from "../../theme/theme";
import axios from "axios";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { AddRaca } from "../../requests/Raca";
import Swal from "sweetalert2";

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
	opacity: 0.5;
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
function AdicionarRaca() {
	const location = useLocation();
	const [especie, setEspecie] = useState({});
	const [nome, setNome] = useState("");
	const [descricao, setDescricao] = useState("");
	const [files, setFiles] = useState([]);
	const [cuidadosEspecificos, setCuidadosEspecificos] = useState("");
	const [loading, setLoading] = useState(false);
	const [helpText, setHelpText] = useState(false);

	const especies = location.state.especies;
	const category = location.state.category;

	console.log("especies:", especies);
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

	const handleImage = (e) => {
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
	console.log(
		"dados:",
		especie,
		nome,
		descricao,
		files,
		cuidadosEspecificos,
		category
	);

	const addRaca = async () => {
		setLoading(true);
		if (
			especie === {} ||
			nome === "" ||
			descricao === "" ||
			files.length === 0 ||
			cuidadosEspecificos === 0
		) {
			setHelpText(true);
		} else {
			try {
				const formData = new FormData();
				const key = "8b39fd8e05217d4a8bc071ccfe514541";

				for (let i = 0; i < files.length; i++) {
					formData.append("image", files[i]);
				}

				const imageUrls = [];

				for (let i = 0; i < files.length; i++) {
					const response = await axios({
						method: "post",
						url: `https://api.imgbb.com/1/upload?key=${key}`,
						data: formData,
					});
					const imageUrl = response.data.data.url;
					imageUrls.push(imageUrl);
				}
				const especieId = especie._id;
				await AddRaca(
					especieId,
					nome,
					descricao,
					imageUrls,
					cuidadosEspecificos,
					category
				);
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Raça adicionada com sucesso!",
					showConfirmButton: false,
					timer: 1500,
				});
			} catch (error) {
				console.error("Error uploading images:", error);
			}
		}
		setLoading(false);
	};

	return (
		<Container style={{ marginTop: "2em" }} maxWidth={isMedium ? "lg" : "xl"}>
			<Box>
				<Title>
					<Typography variant="h4">Adicionar Bichinho (Raça)</Typography>
					<Divider width="100%" />
				</Title>
				<BoxInformacoes>
					<img
						src={rabbit}
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
							Olá! Nessa página você pode adicionar uma uma raça de bichinho,
							suas informações e fotos! Assim você pode ajudar a nossa
							comunidade a entender mais sobre esse bichinho.
						</Typography>
					</BoxInfo>
				</BoxInformacoes>

				<BoxForm>
					<Typography>Espécie</Typography>
					<Select
						value={especie}
						style={{ width: "30%" }}
						margin="dense"
						onChange={(e) => {
							setEspecie(e.target.value);
						}}
					>
						{especies.map((item) => {
							return <MenuItem value={item}>{item.nome}</MenuItem>;
						})}
					</Select>
				</BoxForm>
				<BoxForm>
					<Typography>Nome da raça</Typography>
					<TextField
						style={{ width: "30%" }}
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
					<Typography>Cuidados Específicos</Typography>
					<TextField
						style={{ width: "50%" }}
						rows={4}
						multiline
						margin="dense"
						onChange={(e) => {
							setCuidadosEspecificos(e.target.value);
						}}
					/>
				</BoxForm>
				{helpText ? (
					<BoxForm>
						<Typography variant="body1" style={{ color: "red" }}>
							Preencha todos os campos!
						</Typography>
					</BoxForm>
				) : null}
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
								addRaca();
							}}
						>
							Adicionar Raça
						</Button>{" "}
					</BoxBtn>
				)}
			</Box>
		</Container>
	);
}

export default AdicionarRaca;
