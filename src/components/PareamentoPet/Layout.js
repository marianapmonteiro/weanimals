import React from "react";
import { Button, Typography, Box, Divider } from "@mui/material";
import styled from "@emotion/styled";
import Options from "./Options";
import theme from "../../theme/theme";

const MainContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 5em;
	gap: 3em;
	@media (max-width: ${theme.breakpoints.values.sm}px) {
		height: 100%;
		gap: 2em;
	}
`;
const BoxBtn = styled.div`
	width: 100%;
  	display: flex;
  	align-items: center;
  	justify-content: center;
	margin-top: 3em;
`;

function Layout({ title, options, images, value, handleNext, option, setOption, helpText, setEtiquetaValor }) {

	return (
		<MainContainer>
			<Box>
				<Typography variant="h4">{title}</Typography>
				<Divider style={{ marginTop: '2em' }} />
			</Box>
			<Box>
				<Options options={options} images={images} option={option} setOption={setOption} setEtiquetaValor={setEtiquetaValor} />
			</Box>
			{helpText ? <Box><Typography style={{ color: 'red' }}>Preencha algum valor!</Typography></Box> : null}
			<BoxBtn>
				<Button
					variant="contained"
					style={{ color: "white", width: "50%", borderRadius: "8px" }}
					onClick={() => {
						handleNext()
					}}
				>
					{value === 8 ? "Enviar respostas" : "Próximo"}
				</Button>
			</BoxBtn>
		</MainContainer>
	);
}

export default Layout;
