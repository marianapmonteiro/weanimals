import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Options from "./Options";
import theme from "../../theme/theme";

const Box = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
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
`;

function Layout({ title, options, images, setValue, value, setLoading, loading, handleNext }) {


	return (
		<Box>
			<Typography variant="h4">{title}</Typography>
			<Options options={options} images={images} />
			<BoxBtn>
				<Button
					variant="contained"
					style={{ color: "white", width: "50%", borderRadius: "8px" }}
					onClick={() => {
						handleNext()
						console.log('value', value)
					}}
				>
					Próximo
				</Button>
			</BoxBtn>
		</Box>
	);
}

export default Layout;
