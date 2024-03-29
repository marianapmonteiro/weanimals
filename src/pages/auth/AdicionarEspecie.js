import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AddEspecie, EditEspecie, DeletarEspecie } from "../../requests/Especies";
import {
	Typography,
	Container,
	Divider,
	TextField,
	Button,
	CircularProgress,
	IconButton,
	Select,
	MenuItem,
	Box
} from "@mui/material";
import styled from "@emotion/styled";
import imagem from "../../Images/addImagem.jpg";
import theme from "../../theme/theme";
import AddIcon from "@mui/icons-material/Add";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TextEditor from "../../components/TextEditor";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ClearIcon from '@mui/icons-material/Clear';
import ModalDeletar from "../../components/ModalDeletar";


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
	const { cookies } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const { alterar, especieId, altNome, altDescricao, altEtiquetas, altComunidades, altImgs } = location.state;

	const author = cookies.UserData.name;
	const token = cookies.WeAnimals;
	const category = location.state.category;
	const etiquetasValores = ["Hábitos noturnos", "Hábitos vespertinos", "Hábitos matutinos", "Territorialista",
		"Sociável", "Independente", "Pode viver solto pela casa", "Requer adaptação para viver solto pela casa", "Tem que ter um espaço somente para ele",
		"Se dá bem com outros animais", "Carinhoso", "Deve viver sem outros pets", "Peludo", "Pelos curtos", "Sem pelos", "Pequeno porte", "Grande porte", "Porte médio"]
	const [nome, setNome] = useState(altNome ? altNome : "");
	const [descricao, setDescricao] = useState(altDescricao ? altDescricao : "");
	const [files, setFiles] = useState(altImgs ? altImgs : []);
	const [etiquetas, setEtiquetas] = useState(altEtiquetas ? altEtiquetas : []);
	const [loading, setLoading] = useState(false);
	const [loadingImgs, setLoadingImgs] = useState(false);
	const [helpText, setHelpText] = useState(false);
	const [errorLabel, setErrorLabel] = useState("");

	const [comunidade, setComunidade] = useState(false);
	const [comunidadeNome, setComunidadeNome] = useState('');
	const [comunidadeLink, setComunidadeLink] = useState('')
	const [redeSocial, setRedeSocial] = useState('')
	const [comunidades, setComunidades] = useState(altComunidades ? altComunidades : [])


	const [openModalDelete, setOpenModalDelete] = useState(false);
	const [infoModal, setInfoModal] = useState({});


	const redesSociais = [
		'Facebook',
		'Instagram',
		'WhatsApp'
	]

	const AddComunidade = () => {
		setComunidades((preValor) => {
			const novaComunidade = { nome: comunidadeNome, redeSocial: redeSocial, link: comunidadeLink };
			return [...preValor, novaComunidade];
		});
		setComunidade(false)
	}
	const handleRemoveComunidade = (index) => {
		setComunidades((prev) => {
			const novoArray = [...prev];
			novoArray.splice(index, 1)
			return novoArray;
		})
	}
	const handleEtiquetas = (value) => {
		setEtiquetas((prevValor) => [...prevValor, value]);
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
				if (comunidades.length > 0) {
					const comunidadesJSON = JSON.stringify(comunidades);
					formData.append("comunidades", comunidadesJSON);
				}
				await AddEspecie(formData, token, navigate);

			} catch (error) {
				console.error("Error uploading images:", error);
			}
		}
		setLoading(false);
	};

	const editEspecie = async () => {
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

				etiquetas.forEach((value) => {
					formData.append('etiquetas[]', value);
				});
				if (comunidades.length > 0) {
					const comunidadesJSON = JSON.stringify(comunidades);
					formData.append("comunidades", comunidadesJSON);
				}
				await EditEspecie(navigate, especieId, formData, token);

			} catch (error) {
				console.error("Error uploading images:", error);
			}
		}
		setLoading(false);
	};

	const deletarEspecie = async () => {
		setInfoModal({
			id: especieId,
			nome: nome,
		});
		setOpenModalDelete(true);
	}

	const handleDelete = (navigate, especieId) => {
		DeletarEspecie(navigate, especieId);
	};

	return (
		<Container style={{ marginTop: "2em" }} maxWidth="lg">
			<Box>
				<Title>
					<Typography variant="h4">{alterar ? "Alterar Bichinho (Espécie)" : "Adicionar Bichinho (Espécie)"}</Typography>
					<Divider width="100%" />
				</Title>
				<BoxInformacoes>
					<img
						src={imagem}
						alt="dog"
						width="100px"
						height="100px"
						style={{ borderRadius: "1000px", objectFit: "cover" }} />
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
						value={nome}
						onChange={(e) => {
							setNome(e.target.value);
						}}
					/>
				</BoxForm>

				<BoxForm>
					<Typography>Descrição</Typography>
					<TextEditor value={descricao} onChange={setDescricao} width="50%" />
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
						<Select
							value={altEtiquetas ? altEtiquetas : etiquetasValores}
							style={{ width: "30%" }}
							margin="dense"
							onChange={(e) => {
								handleEtiquetas(e.target.value);
							}}
						>
							{etiquetasValores.map((item) => {
								return <MenuItem value={item}>{item}</MenuItem>;
							})}
						</Select>
						<AddIcon
						// style={{ color: theme.palette.secondary.dark, cursor: "pointer" }}
						// onClick={handleEtiquetas}
						/>
					</Box>
				</BoxForm>
				<BoxExemplos>
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
				</BoxExemplos>
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
									<Imgs src={item instanceof File ? URL.createObjectURL(item) : `http://localhost:3001/uploads/especies/${item}`} alt="upload" />
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
				<Divider />
				<BoxForm style={{ marginTop: "2em" }}>
					<Typography variant="h5">Adicionar alguma comunidade </Typography>
					<Typography variant="body2" style={{ marginTop: "1em" }}>
						Nesse campo você pode adicionar comunidades/grupos em redes sociais que você acha que serão úteis para novos tutores!
					</Typography>
					<Select
						value={redeSocial}
						style={{ width: "30%", marginTop: '2em' }}
						margin="dense"
						onChange={(e) => {
							setRedeSocial(e.target.value);
						}}
					>
						{redesSociais.map((item) => {
							return <MenuItem value={item} onClick={() => { setComunidade(true) }}>{item}</MenuItem>;
						})}
					</Select>
					{comunidade ?
						<>
							<Box sx={{
								marginTop: '2em', display: "flex", flexDirection: "row", gap: "2em",
								"@media (max-width: 600px)": {
									flexDirection: "column"
								},
							}}>

								<TextField sx={{
									width: "30%", "@media (max-width: 600px)": {
										width: "100%"
									},
								}}
									label="Nome da comunidade/grupo"
									onChange={(e) => setComunidadeNome(e.target.value)}
								/>

								<TextField sx={{
									width: "30%", "@media (max-width: 600px)": {
										width: "100%"
									},
								}}
									label="Link/convite da comunidade/grupo"
									onChange={(e) => setComunidadeLink(e.target.value)}
								/>

							</Box>
							<Box sx={{ width: "100%", marginTop: "1em", display: "flex", gap: "1em" }}>

								<Button variant="outlined" onClick={() => { AddComunidade() }} disabled={comunidadeNome.trim() === '' || comunidadeLink.trim() === ''}
								>Adicionar comunidade</Button>
								<Button variant="outlined" onClick={() => { setComunidade(false); setComunidadeLink(''); setComunidadeNome('') }}>Cancelar</Button>
							</Box>
						</> : null}
					{comunidades.length > 0 ?
						comunidades.map((item, index) => {
							return (
								<Box style={{ display: "flex", gap: "1em", marginTop: "3em" }}>
									{item.redeSocial === 'Instagram' ? <InstagramIcon /> : item.redeSocial === 'Facebook' ? <FacebookIcon /> : <WhatsAppIcon />}
									<a href={item.link} target="_blank">{item.nome}</a>
									<ClearIcon style={{ cursor: "pointer" }} onClick={() => { handleRemoveComunidade(index) }} />
								</Box>
							)
						})
						: null}
				</BoxForm>
				{helpText ? (
					<BoxForm>
						<Typography variant="body1" style={{ color: "red" }}>
							{errorLabel}
						</Typography>
					</BoxForm>
				) : null}
				{alterar ? <Box style={{ marginTop: "2em", width: "100%", display: "flex", justifyContent: "flex-end", }}>
					<Button variant="outlined" color="error" onClick={() => deletarEspecie()}>Deletar espécie</Button>
				</Box> : null}
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
								alterar ? editEspecie() :
									addEspecie();
							}}
						>
							{alterar ? "Alterar Espécie" : "Adicionar Espécie"}
						</Button>
					</BoxBtn>
				)}
			</Box>

			<ModalDeletar
				handleClose={setOpenModalDelete}
				handleDelete={() => handleDelete(navigate, especieId)}
				handleOpen={openModalDelete}
				infoModal={infoModal}
			/>
		</Container>
	);
}

export default AdicionarEspecie;
