import React, { useState, useEffect } from "react";
import { Tabs, Tab, Typography, Container } from "@mui/material";
import TabsMenu from "../components/Animais/TabsMenu";
import Categorias from "../components/Animais/Categorias";
import { GetEspecies } from "../requests/Especies";
import { GetRacas } from "../requests/Raca";
import axios from "axios";

const ListaAnimais = () => {
	const [especies, setEspecies] = useState([]);
	const [racas, setRacas] = useState([]);
	const [value, setValue] = useState('Aves');


	const listagemAnimais = [
		"Aves",
		"Répteis",
		"Roedores",
		"Lagomorfos",
		"Peixes",
		"Cães",
		"Gatos",
	];

	useEffect(() => {
		const fetchData = async () => {
			const especiesData = await GetEspecies();
			const filteredEspecies = especiesData.filter((item) => item.category === value);
			setEspecies(filteredEspecies);

		};

		const fetchData2 = async () => {
			const racasData = await GetRacas();
			const filteredRacas = racasData.filter((item) => item.category === value);
			setRacas(filteredRacas);
		};

		fetchData();
		fetchData2();
	}, [value]);



	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container
			maxWidth="lg"
			sx={{
				display: "flex",
				gap: '1em',
				height: "100%",
				marginTop: "5em",
				"@media (max-width: 600px)": {
					flexDirection: 'column',
					marginTop: "2em",
				},
			}}
		>
			<TabsMenu
				value={value}
				handleChange={handleChange}
				listagemAnimais={listagemAnimais}
			/>
			<div style={{ flex: 1, padding: "16px" }}>
				{value === 'Aves' && (
					<Categorias
						Racas={racas}
						Especies={especies}
						Category={listagemAnimais[0]}
					/>
				)}
				{value === 'Répteis' && (
					<Categorias
						Racas={racas}
						Especies={especies}
						Category={listagemAnimais[1]}
					/>
				)}
				{value === 'Roedores' && (
					<Categorias
						Racas={racas}
						Especies={especies}
						Category={listagemAnimais[2]}
					/>
				)}
				{value === 'Lagomorfos' && (
					<Categorias
						Racas={racas}
						Especies={especies}
						Category={listagemAnimais[3]}
					/>
				)}
				{value === 'Peixes' && (
					<Categorias
						Racas={racas}
						Especies={especies}
						Category={listagemAnimais[4]}
					/>
				)}
				{value === 'Cães' && (
					<Categorias
						Racas={racas}
						Especies={especies}
						Category={listagemAnimais[5]}
					/>
				)}
				{value === 'Gatos' && (
					<Categorias
						Racas={racas}
						Especies={especies}
						Category={listagemAnimais[6]}
					/>
				)}
			</div>
		</Container>
	);
};

export default ListaAnimais;
