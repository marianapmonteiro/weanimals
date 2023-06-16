import React, { useState } from "react";
import theme from "../theme/theme";
import { Container, Box, CircularProgress } from "@mui/material";
import Layout from "../components/PareamentoPet/Layout";
import styled from "@emotion/styled";
import dia from "../Images/dia.jpg";
import tarde from "../Images/tarde.jpg";
import noite from "../Images/noite.jpg";
import relogio1 from "../Images/relogio1.jpg";
import relogio2 from "../Images/relogio2.jpg";
import relogio3 from "../Images/relogio3.jpg";
import carinhoso from '../Images/carinhoso.jpg'
import independente from '../Images/independente.jpg'
import sociavel from '../Images/sociavel.jpg'
import peludos from '../Images/peludos.jpg'
import pelocurto from '../Images/pelocurto.jpg'
import tantofazPelos from '../Images/tantofazPelos.jpg'
import grandeporte from '../Images/grandeporte.jpg'
import pequenoporte from '../Images/pequenoporte.jpg'
import tantofazporte from '../Images/tantofazporte.jpg'
import soltocasa from '../Images/soltocasa.jpg'
import alojamento from '../Images/alojamento.jpg'
import adaptarcasa from '../Images/adaptarcasa.jpg'
import casagrande from '../Images/casagrande.jpg'
import casapequena from '../Images/casapequena.jpg'
import casamedia from '../Images/casamedia.jpg'


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
			options: ["Diurnos", "Matutinos", "Noturnos"],
			images: [dia, tarde, noite],
			value: 1,
		},
		{
			title: "Quanto tempo disponível você tem por dia?",
			options: ["Menos de 5 horas", "Mais de 5 horas", "Não tenho muito tempo"],
			images: [relogio1, relogio2, relogio3],
			value: 2,
		},
		{
			title: "Você prefere animais de grande ou pequeno porte?",
			options: ["Pequeno porte", "Grande porte", "Tanto faz"],
			images: [pequenoporte, grandeporte, tantofazporte],
			value: 3,
		},
		{
			title: "Qual a característica que você mais gosta em um bichinho?",
			options: ["Independente", "Carinhoso", "Sociável"],
			images: [independente, carinhoso, sociavel],
			value: 4,
		},
		{
			title: "Sobre pelagem: Qual você prefere?",
			options: ["Pelos curtos", "Peludos", "Tanto faz"],
			images: [pelocurto, peludos, tantofazPelos],
			value: 5,
		},
		{
			title: "Você pretende deixar o seu animalzinho solto pela casa ou em um alojamento?",
			options: ["Em um espaço especial só para ele", "Solto pela casa", "Terei que adaptar minha casa para solta-lo"],
			images: [alojamento, soltocasa, adaptarcasa],
			value: 6,
		},
		{
			title: "Qual o tamanho do seu lar?",
			options: ["Grande, com quintal", "Médio", "Pequeno"],
			images: [casagrande, casamedia, casapequena],
			value: 7,
		},

	];

	const [value, setValue] = useState(0);
	const [loading, setLoading] = useState(false);
	const handleNext = () => {
		setLoading(true);
		setTimeout(() => {
			setValue(value + 1);
			setLoading(false);
		}, 2000); // Tempo de espera de 2 segundos
	};
	return (
		<Container>
			<BoxContainer>
				{loading ? <Box style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box> : steps.map((step, index) =>
					value === index ? (
						<Layout
							key={index}
							title={step.title}
							options={step.options}
							images={step.images}
							setValue={setValue}
							value={step.value}
							setLoading={setLoading}
							loading={loading}
							handleNext={handleNext}
						/>
					) : null
				)}
			</BoxContainer>
		</Container>
	);
}

export default PareamentoPet;
