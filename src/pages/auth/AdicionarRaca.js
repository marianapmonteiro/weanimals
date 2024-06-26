import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AddRaca, EditRaca, DeletarRaca } from "../../requests/Raca";
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
import imagem from "../../Images/addImagem.jpg";
import theme from "../../theme/theme";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TextEditor from "../../components/TextEditor";
import ModalDeletar from "../../components/ModalDeletar";


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
	const { cookies } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const { alterar, racaId, altNome, altDescricao, altCuidadosEspecificos, altImgs } = location.state;

	const author = cookies.UserData.name;
	const token = cookies.WeAnimals;
	const [especie, setEspecie] = useState(null);
	const [nome, setNome] = useState(altNome ? altNome : "");
	const [descricao, setDescricao] = useState(altDescricao ? altDescricao : "");
	const [files, setFiles] = useState(altImgs ? altImgs : []);
	const [cuidadosEspecificos, setCuidadosEspecificos] = useState(altCuidadosEspecificos ? altCuidadosEspecificos : "");
	const [loading, setLoading] = useState(false);
	const [helpText, setHelpText] = useState(false);
	const [errorLabel, setErrorLabel] = useState("");

	const [openModalDelete, setOpenModalDelete] = useState(false);
	const [infoModal, setInfoModal] = useState({});



	const especies = location.state.especies;
	const category = location.state.category;


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

	const addRaca = async () => {
		setLoading(true);
		if (
			especie === null ||
			nome === "" ||
			descricao === "" ||
			files.length === 0 ||
			cuidadosEspecificos === '' ||
			files.length > 5
		) {
			setHelpText(true);
			setErrorLabel("Preencha todos os campos com os valores corretos")
		} else {
			try {
				const especieId = especie._id;
				const formData = new FormData();
				formData.append("especie", especieId);
				formData.append("nome", nome);
				formData.append("descricao", descricao);
				files.forEach((file) => {
					formData.append("imagens", file);
				});
				formData.append("cuidadosEspecificos", cuidadosEspecificos);
				formData.append("category", category);
				formData.append("author", author);

				await AddRaca(
					formData,
					token,
					navigate
				);

			} catch (error) {
				console.error("Error uploading images:", error);
			}
		}
		setLoading(false);
	};

	const editRaca = async () => {
		setLoading(true);
		if (
			nome === "" ||
			descricao === "" ||
			files.length === 0 ||
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
				formData.append("cuidadosEspecificos", cuidadosEspecificos);

				let imgsReenviadas = []

				//Pegar do array as imagens vindas do useLocation, ou seja imagens já salvas (formato string)
				files.forEach((file) => {
					if (typeof file === 'string') {
						imgsReenviadas.push(file);
					} else {
						formData.append("imagens", file);
					}
				});

				imgsReenviadas.forEach((file) => {
					formData.append("imgsReenviadas", file)
				})

				await EditRaca(navigate, racaId, formData, token);

			} catch (error) {
				console.error("Error uploading images:", error);
			}
		}
		setLoading(false);
	};

	const deletarRaca = async () => {
		setInfoModal({
			id: racaId,
			nome: nome,
		});
		setOpenModalDelete(true);
	}

	const handleDelete = (navigate, racaId) => {
		DeletarRaca(navigate, racaId);
	};

	return (
		<Container style={{ marginTop: "2em" }} maxWidth="lg">
			<Box>
				<Title>
					<Typography variant="h4">{alterar ? "Alterar Bichinho (Raça)" : "Adicionar Bichinho (Raça)"}</Typography>
					<Divider width="100%" />
				</Title>
				<BoxInformacoes>
					<img
						src={imagem}
						alt="dog"
						width="100px"
						height="100px"
						style={{ borderRadius: "1000px", objectFit: "cover" }}
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

				{alterar ? null : <BoxForm>
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
				</BoxForm>}
				<BoxForm>
					<Typography>Nome da raça</Typography>
					<TextField
						style={{ width: "30%" }}
						margin="dense"
						value={nome}
						onChange={(e) => {
							setNome(e.target.value);
						}}
					/>
				</BoxForm>
				<BoxForm >
					<Typography>Descrição</Typography>
					{/* <TextField
						style={{ width: "50%" }}
						rows={4}
						multiline
						margin="dense"
						onChange={(e) => {
							setDescricao(e.target.value);
						}}
					/> */}
					<TextEditor value={descricao} onChange={setDescricao} width="50%" />
				</BoxForm>


				<BoxForm>
					<Typography>Cuidados Específicos</Typography>
					<TextField
						style={{ width: "50%" }}
						rows={4}
						multiline
						value={cuidadosEspecificos}
						margin="dense"
						onChange={(e) => {
							setCuidadosEspecificos(e.target.value);
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
									<Imgs src={item instanceof File ? URL.createObjectURL(item) : `http://localhost:3001/uploads/racas/${item}`} alt="upload" />
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
				{alterar ? <Box style={{ marginTop: "2em", width: "100%", display: "flex", justifyContent: "flex-end", }}>
					<Button variant="outlined" color="error" onClick={() => deletarRaca()}>Deletar raça</Button>
				</Box> : null}
				{helpText ? (
					<BoxForm>
						<Typography variant="body1" style={{ color: "red" }}>
							{errorLabel}
						</Typography>
					</BoxForm>
				) : null}
				{loading ? (
					<CircularProgress />
				) : (
					<BoxBtn>
						<Button
							variant="contained"
							style={{
								backgroundColor: "#AFA339",
								color: "white",

								bordeRadius: "8px",
							}}
							onClick={() => {
								alterar ? editRaca() :
									addRaca();
							}}
						>
							{alterar ? "Alterar Raça" : "Adicionar Raça"}
						</Button>
					</BoxBtn>
				)}
			</Box>
			<ModalDeletar
				handleClose={setOpenModalDelete}
				handleDelete={() => handleDelete(navigate, racaId)}
				handleOpen={openModalDelete}
				infoModal={infoModal}

			/>
		</Container>
	);
}

export default AdicionarRaca;
