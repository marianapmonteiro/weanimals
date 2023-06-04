import React from "react";
import { Divider, Typography, TextField, InputAdornment } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../theme/theme";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Container = styled.ul`
	width: 100%;
	height: 100vh;
`;

const UlStyled = styled.ul`
	list-style-type: none;
	display: flex;
	gap: 4em;
	padding: 0;
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

function Categorias({ Racas, Especies }) {
	const navigate = useNavigate();
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
						}}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				</TitleandSearchBox>

				<UlStyled>
					{Especies.map((item) => {
						return <li style={{ listStyle: "none" }}>{item}</li>;
					})}
				</UlStyled>
				<BoxAddIcon>
					<AddIcon
						fontSize="large"
						style={{
							color: theme.palette.secondary.dark,
							cursor: "pointer",
						}}
						onClick={() => {
							navigate("/addespecie");
						}}
					/>
				</BoxAddIcon>
			</BoxCategory>
			<Divider width="100%" />
			<BoxCategory>
				<TitleandSearchBox style={{ marginTop: "1em" }}>
					<Typography variant="h4" style={{ fontWeight: "bold" }}>
						Raças
					</Typography>
					<TextField
						sx={{
							m: 1,
							width: "20%",
						}}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				</TitleandSearchBox>
				<UlStyled>
					{Racas.map((item) => {
						return <li>{item}</li>;
					})}
				</UlStyled>
				<BoxAddIcon>
					<AddIcon
						fontSize="large"
						style={{
							color: theme.palette.secondary.dark,
							cursor: "pointer",
						}}
						onClick={() => {
							navigate("/addraca");
						}}
					/>
				</BoxAddIcon>
			</BoxCategory>
		</Container>
	);
}

export default Categorias;
