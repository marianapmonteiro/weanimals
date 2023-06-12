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
	//especies
	const [aves, setAves] = useState([]);
	const [repteis, setRepteis] = useState([]);
	const [roedores, setRoedores] = useState([]);
	const [lagomorfos, setLagomorfos] = useState([]);
	const [peixes, setPeixes] = useState([]);
	const [caes, setCaes] = useState(["Cães"]);
	const [gatos, setGatos] = useState(["Gatos"]);

	//racas
	const [avesRacas, setAvesRacas] = useState([]);
	const [repteisRacas, setRepteisRacas] = useState([]);
	const [roedoresRacas, setRoedoresRacas] = useState([]);
	const [lagomorfosRacas, setLagomorfosRacas] = useState([]);
	const [peixesRacas, setPeixesRacas] = useState([]);
	const [caesRacas, setCaesRacas] = useState([]);
	const [gatosRacas, setGatosRacas] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			await GetEspecies(setEspecies);
			console.log("chamou funcao1");
		};
		const fetchData2 = async () => {
			await GetRacas(setRacas);
			console.log("chamou funcao");
		};
		const GetDogs = async () => {
			await axios.get("https://api.thecatapi.com").then((res) => {
				console.log("dog api:", res);
			});
		};
		fetchData();
		fetchData2();
		GetDogs();
	}, []);

	useEffect(() => {
		especies.forEach((item) => {
			console.log("item", item.category);
			if (item.category === "Aves") {
				setAves((prev) => [...prev, item]);
			}
			if (item.category === "Répteis") {
				setRepteis((prev) => [...prev, item]);
			}
			if (item.category === "Roedores") {
				setRoedores((prev) => [...prev, item]);
			}
			if (item.category === "Lagomorfos") {
				setLagomorfos((prev) => [...prev, item]);
			}
			if (item.category === "Peixes") {
				setPeixes((prev) => [...prev, item]);
			}
			if (item.category === "Caes") {
				setCaes((prev) => [...prev, item]);
			}
			if (item.category === "Gatos") {
				setGatos((prev) => [...prev, item]);
			}
		});
		racas.forEach((item) => {
			console.log("item", item.category);
			if (item.category === "Aves") {
				setAvesRacas((prev) => [...prev, item]);
			}
			if (item.category === "Répteis") {
				setRepteisRacas((prev) => [...prev, item]);
			}
			if (item.category === "Roedores") {
				setRoedoresRacas((prev) => [...prev, item]);
			}
			if (item.category === "Lagomorfos") {
				setLagomorfosRacas((prev) => [...prev, item]);
			}
			if (item.category === "Peixes") {
				setPeixesRacas((prev) => [...prev, item]);
			}
			if (item.category === "Caes") {
				setCaesRacas((prev) => [...prev, item]);
			}
			if (item.category === "Gatos") {
				setGatosRacas((prev) => [...prev, item]);
			}
		});
	}, [especies, racas]);

	useEffect(() => {
		const handleResize = () => {
			setIsMedium(window.innerWidth <= 1919);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	const [isMedium, setIsMedium] = useState(window.innerWidth <= 1919);

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
				{value === 0 && (
					<Categorias
						Racas={avesRacas}
						Especies={aves}
						Category={listagemAnimais[value]}
					/>
				)}
				{value === 1 && (
					<Categorias
						Racas={repteisRacas.map((reptil) => reptil.nome)}
						Especies={repteis}
						Category={listagemAnimais[value]}
					/>
				)}
				{value === 2 && (
					<Categorias
						Racas={roedoresRacas.map((roedor) => roedor.nome)}
						Especies={roedores}
						Category={listagemAnimais[value]}
					/>
				)}
				{value === 3 && (
					<Categorias
						Racas={lagomorfosRacas.map((lagomorfo) => lagomorfo.nome)}
						Especies={lagomorfos}
						Category={listagemAnimais[value]}
					/>
				)}
				{value === 4 && (
					<Categorias
						Racas={peixesRacas.map((peixe) => peixe.nome)}
						Especies={peixes}
						Category={listagemAnimais[value]}
					/>
				)}
				{value === 5 && (
					<Categorias
						Racas={caesRacas.map((cao) => cao.nome)}
						Especies={caes}
						Category={listagemAnimais[value]}
					/>
				)}
				{value === 6 && (
					<Categorias
						Racas={gatosRacas.map((gatos) => gatos.nome)}
						Especies={gatos}
						Category={listagemAnimais[value]}
					/>
				)}
			</div>
		</Container>
	);
};

export default ListaAnimais;
