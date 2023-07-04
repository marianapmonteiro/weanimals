import React, { useState, useEffect } from "react";
import theme from "../theme/theme";
import { Container, Box, CircularProgress } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Layout from "../components/PareamentoPet/Layout";
import styled from "@emotion/styled";
import steps from "../components/PareamentoPet/Steps";


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
	const navigate = useNavigate()

	const [value, setValue] = useState(0);
	const [loading, setLoading] = useState(false);
	const [respostas, setRespostas] = useState([]);
	const [etiquetaValor, setEtiquetaValor] = useState(0);
	const [option, setOption] = useState('');
	const [helpText, setHelpText] = useState(false)

	useEffect(() => {
		console.log('respostas;;;', respostas);
	}, [respostas]);

	const handleNext = () => {
		if (option === '') {
			setHelpText(true)
		} else {
			setHelpText(false)

			steps.forEach((step) => {
				if (step.options.includes(option)) {
					setRespostas((prevValor) => [...prevValor, step.etiquetas[etiquetaValor]]);
				}

			})
			if (value === 7) {
				navigate('/resultadopet', {
					state: {
						respostas: respostas
					}
				})
			}
			setLoading(true);
			setTimeout(() => {
				setValue(value + 1);
				setLoading(false);
			}, 1000);
		}
		setOption('')
	};

	return (
		<Container>
			<BoxContainer>
				{loading ? <Box style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box> : steps.map((step, index) =>
					value === index ? (
						<Layout
							key={index}
							title={step.title}
							options={step}
							etiquetas={step.etiquetas}
							images={step.images}
							setValue={setValue}
							value={step.value}
							setLoading={setLoading}
							loading={loading}
							handleNext={handleNext}
							option={option}
							setOption={setOption}
							helpText={helpText}
							setEtiquetaValor={setEtiquetaValor}

						/>
					) : null
				)}
			</BoxContainer>
		</Container>
	);
}

export default PareamentoPet;
