import React, { useState } from "react";
import { Divider, Typography, TextField, InputAdornment } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../theme/theme";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
	width: 100%;
`;

const UlStyled = styled.ul`
	list-style-type: none;
	display: flex;
	gap: 4em;
	padding: 0;
	flex-wrap: wrap;
	@media (max-width: ${theme.breakpoints.values.md}px) {
		flex-direction: column;
		flex-wrap: wrap;
		gap: 1em;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 0;
		margin-top: 1em;
	}
`;

const ListItem = styled.li`
	list-style: none;
	cursor: pointer;

	& a {
		text-decoration: none;
	}

	& a:hover {
		text-decoration: underline;
	}
`;

const BoxAddIcon = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
`;

const BoxCategory = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2em;
	width: 100%;
	@media (max-width: ${theme.breakpoints.values.md}px) {
		flex-direction: column;
		flex-wrap: wrap;
		gap: 0;
		justify-content: flex-start;
		margin-top: 1em;
		width: 100%;
	}
`;
const TitleandSearchBox = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
`;

function Categorias({ Racas, Especies, Category }) {
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState("");
	const [searchValueRaca, setSearchValueRaca] = useState("");

	const filteredEspecies = Especies.filter((item) =>
		item.nome.toLowerCase().includes(searchValue.toLowerCase())
	);
	const filteredRacas = Racas.filter((item) =>
		item.nome.toLowerCase().includes(searchValueRaca.toLowerCase())
	);

	return (
		<Container>
			<BoxCategory>
				<TitleandSearchBox>
					<Typography variant="h4" style={{ fontWeight: "bold" }}>
						Espécies
					</Typography>
					<TextField
						sx={{
							m: 1,
							width: "20%",
							"@media (max-width: 600px)": {
								width: "30%",
							},
						}}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<SearchIcon />
								</InputAdornment>
							),
						}}
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
				</TitleandSearchBox>
				<UlStyled>
					{Especies.length > 0 ? (
						filteredEspecies.map((item) => (
							<ListItem
								key={item.nome}
								onClick={() => {
									navigate("/especie", {
										state: {
											id: item._id,
											nome: item.nome,
											descricao: item.descricao,
											etiquetas: item.etiquetas,
											imagens: item.imagens,
											racas: item.racas,
											author: item.authorName
										},
									});
								}}
							>
								<a>{item.nome}</a>
							</ListItem>
						))
					) : (
						<li style={{ listStyle: "none" }}>Nenhuma espécie encontrada </li>
					)}
				</UlStyled>
				<BoxAddIcon>
					<AddIcon
						fontSize="large"
						style={{
							color: theme.palette.secondary.dark,
							cursor: "pointer",
						}}
						onClick={() => {
							navigate("/addespecie", {
								state: {
									category: Category,
								},
							});
						}}
					/>
				</BoxAddIcon>
			</BoxCategory>
			<Divider width="100%" style={{ marginTop: "1em" }} />
			<BoxCategory>
				<TitleandSearchBox style={{ marginTop: "1em" }}>
					<Typography variant="h4" style={{ fontWeight: "bold" }}>
						Raças
					</Typography>
					<TextField
						sx={{
							m: 1,
							width: "20%",
							"@media (max-width: 600px)": {
								width: "30%",
							},
						}}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<SearchIcon />
								</InputAdornment>
							),
						}}
						value={searchValueRaca}
						onChange={(e) => setSearchValueRaca(e.target.value)}
					/>
				</TitleandSearchBox>
				<UlStyled>
					{Racas.length > 0 ? (
						filteredRacas.map((item) => (
							<ListItem
								key={item}
								onClick={() => {
									navigate("/raca", {
										state: {
											nome: item.nome,
											descricao: item.descricao,
											cuidadosEspecificos: item.cuidadosEspecificos,
											imagens: item.imagens,
											especie: item.especie,
											author: item.authorName
										},
									});
								}}
							>
								<a>{item.nome}</a>
							</ListItem>
						))
					) : (
						<li style={{ listStyle: "none" }}>Nenhuma raça encontrada </li>
					)}
				</UlStyled>
				<BoxAddIcon>
					<AddIcon
						fontSize="large"
						style={{
							color: theme.palette.secondary.dark,
							cursor: "pointer",
						}}
						onClick={() => {
							navigate("/addraca", {
								state: {
									especies: Especies,
									category: Category,
								},
							});
						}}
					/>
				</BoxAddIcon>
			</BoxCategory>
		</Container>
	);
}

export default Categorias;
