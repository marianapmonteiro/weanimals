import React, { useState, useEffect } from "react";
import {
	Typography,
	Container,
	Divider,
	TextField,
	Button,
	Select,
	MenuItem,
} from "@mui/material";
import styled from "@emotion/styled";
import dog from "../../Images/download.jpg";
import theme from "../../theme/theme";
import api from "../../utils/api";

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
function AdicionarRaca() {
	const [especie, setEspecie] = useState("");
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

	const especies = ["Cachorro", "Gato", "Coelho", "Ave", "Papagaio"];

	return (
		<Container style={{ marginTop: "2em" }} maxWidth={isMedium ? "lg" : "xl"}>
			<Box>
				<Title>
					<Typography variant="h4">Adicionar Bichinho (Raça)</Typography>
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
							Olá! Nessa página você pode adicionar uma uma raça de bichinho,
							suas informações e fotos! Assim você pode ajudar a nossa
							comunidade a entender mais sobre esse bichinho.
						</Typography>
					</BoxInfo>
				</BoxInformacoes>

				<BoxForm>
					<Typography>Espécie</Typography>
					<Select value={especie} style={{ width: "30%" }} margin="dense">
						{especies.map((item) => {
							return <MenuItem value={item}>{item}</MenuItem>;
						})}
					</Select>
				</BoxForm>
				<BoxForm>
					<Typography>Nome da raça</Typography>
					<TextField style={{ width: "30%" }} margin="dense" />
				</BoxForm>
				<BoxForm>
					<Typography>Descrição</Typography>
					<TextField
						style={{ width: "50%" }}
						rows={4}
						multiline
						margin="dense"
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
						<input type="file" hidden />
					</Button>
				</BoxForm>

				<BoxForm>
					<Typography>Cuidados Específicos</Typography>
					<TextField
						style={{ width: "50%" }}
						rows={4}
						multiline
						margin="dense"
					/>
				</BoxForm>

				<BoxBtn>
					{" "}
					<Button
						variant="contained"
						style={{
							backgroundColor: "#AFA339",
							color: "white",

							bordeRadius: "8px",
						}}
					>
						Adicionar Raça
					</Button>{" "}
				</BoxBtn>
			</Box>
		</Container>
	);
}

export default AdicionarRaca;
