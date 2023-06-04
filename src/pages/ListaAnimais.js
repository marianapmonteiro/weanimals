import React, { useState } from "react";
import { Tabs, Tab, Typography, Container } from "@mui/material";
import TabsMenu from "../components/Animais/TabsMenu";
import Categorias from "../components/Animais/Categorias";

const ListaAnimais = () => {
	const [value, setValue] = useState(0);
	const listagemAnimais = [
		"Aves",
		"Répteis",
		"Roedores",
		"Lagomorfos",
		"Peixes",
		"Cães",
		"Gatos",
	];

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const racasAves = [
		"New Hampshire",
		"Plymounth Rock",
		"Rhode Island Red",
		"Sussex",
		"Orpington",
		"Cornish ou indiano",
		"Cochin",
		"Brahma",
	];
	const especiesAves = [];
	return (
		<Container
			maxWidth="xl"
			style={{
				display: "flex",
				height: "100%",
				marginTop: "2em",
			}}
		>
			<TabsMenu
				value={value}
				handleChange={handleChange}
				listagemAnimais={listagemAnimais}
			/>
			<div style={{ flex: 1, padding: "16px" }}>
				{value === 0 && <Categorias Racas={racasAves} Especies={racasAves} />}
				{value === 1 && (
					<Typography variant="h6" component="div">
						Content of Tab 2
					</Typography>
				)}
				{value === 2 && (
					<Typography variant="h6" component="div">
						Content of Tab 3
					</Typography>
				)}
			</div>
		</Container>
	);
};

export default ListaAnimais;
