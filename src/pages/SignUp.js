import React from "react";
import { Typography, Box, TextField, Button, Divider } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../theme/theme";
import StyledButton from "../components/Button";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: ${theme.breakpoints.values.sm}px) {
		padding-inline: 2em;
	}
`;

function SignUp() {
	const navigate = useNavigate();
	return (
		<Container>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					backgroundColor: "white",
					boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
					padding: "2em",
					gap: "1em",
					borderRadius: "8px",
					width: "400px",
				}}
			>
				<Typography
					variant="h4"
					style={{ fontWeight: "bold", color: "#252247" }}
				>
					Cadastre-se
				</Typography>
				<Typography variant="body1">Cadastre-se usando seu e-mail</Typography>
				<TextField
					id="outlined-basic"
					label="E-mail"
					variant="outlined"
					fullWidth
				/>
				<TextField
					id="outlined-basic"
					label="Senha"
					variant="outlined"
					fullWidth
				/>
				<TextField
					id="outlined-basic"
					label="Confirmar senha"
					variant="outlined"
					fullWidth
				/>
				<StyledButton variant="contained" text="Criar conta" width="100%" />
				<Divider
					orientation="horizontal"
					flexItem
					style={{ color: "lightgray" }}
				>
					OU
				</Divider>
				<Box
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: "5px",
					}}
				>
					<Typography variant="body1">Já possui uma conta?</Typography>{" "}
					<Typography
						variant="body1"
						style={{ textDecoration: "underline", cursor: "pointer" }}
						onClick={() => {
							navigate("/login");
						}}
					>
						Login
					</Typography>
				</Box>
			</Box>
		</Container>
	);
}

export default SignUp;
