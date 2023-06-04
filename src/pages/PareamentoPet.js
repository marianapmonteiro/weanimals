import React, { useState } from "react";
import theme from "../theme/theme";
import { Container, Box, CircularProgress } from "@mui/material";
import Layout from "../components/PareamentoPet/Layout";
import styled from "@emotion/styled";
import dia from "../Images/dia.jpg";
import tarde from "../Images/tarde.jpg";
import noite from "../Images/noite.jpg";
import relogio from "../Images/relogio.jpg";

const BoxContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 2em;
	justify-content: center;
	align-items: flex-start;
	@media (max-width: ${theme.breakpoints.values.sm}px) {
		height: 100%;
		margin-top: 2em;
	}
`;

function PareamentoPet() {
	const steps = [
		{
			title: "Seus Hábitos são:",
			options: ["Noturnos", "Matutinos", "Diários"],
			images: [dia, tarde, noite],
			value: 1,
		},
		{
			title: "Quanto tempo disponível você tem por dia?",
			options: ["Menos de 5 horas", "Mais de 5 horas", "Não tenho muito tempo"],
			images: [relogio, relogio, relogio],
			value: 2,
		},
		{
			title:
				"Você viaja muito? Se sim, você tem pessoas confiáveis que podem cuidar do seu bichinho?",
			options: [
				"Não costumo viajar",
				"Sim, mas tenho quem pode cuidar do meu bichinho",
				"Sim, mas não tenho quem pode cuidar do meu bichinho.",
			],
			images: [relogio, relogio, relogio],
			value: 3,
		},
		{
			title: "Qual a característica que você mais gosta em um bichinho?",
			options: ["Independente", "Carinhoso", "Sociável"],
			images: [relogio, relogio, relogio],
			value: 4,
		},
		{
			title: "Sobre pelagem: Qual você prefere?",
			options: ["Independente", "Carinhoso", "Sociável"],
			images: [relogio, relogio, relogio],
			value: 5,
		},
		{
			title: "Você gosta mais de pets domésticos ou exóticos?",
			options: ["Domésticos", "Exóticos"],
			images: [relogio, relogio, relogio],
			value: 6,
		},
		{
			title: "Qual o tamanho do seu lar?",
			options: ["Grande, com quintal", "Médio", "Pequeno"],
			images: [relogio, relogio, relogio],
			value: 7,
		},

		{
			title:
				"O seu bichinho vai poder ficar solto por todos comodos da casa? Se sim, você faria adaptações caso necessário?",
			options: [
				"Sim, posso adaptar a casa para meu bichinho.",
				"Não, mas ficaria numa área grande.",
				"Não, só ficaria em um cômodo.",
			],
			images: [relogio, relogio, relogio],
			value: 8,
		},
	];

	const [value, setValue] = useState(0);
	const [loading, setLoading] = useState(false);
	return (
		<Container>
			<BoxContainer>
				{loading ? (
					<CircularProgress />
				) : (
					steps.map((step, index) =>
						value === index ? (
							<Layout
								key={index}
								title={step.title}
								options={step.options}
								images={step.images}
								setValue={setValue}
								value={step.value}
								setLoading={setLoading}
							/>
						) : null
					)
				)}
			</BoxContainer>
		</Container>
	);
}

export default PareamentoPet;
