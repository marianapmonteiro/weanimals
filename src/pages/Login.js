import React, { useState, useContext } from "react";
import { Typography, Box, TextField, Divider, InputAdornment, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../theme/theme";
import StyledButton from "../components/Button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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

function Login() {
	const { loginRequest } = useContext(AuthContext)
	const navigate = useNavigate();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('');
	const [helpText, setHelpText] = useState(false)
	const [error, setError] = useState('')
	const [showPassword, setShowPassword] = useState(false);


	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleLogin = async () => {
		loginRequest(email, password, setHelpText, setError)
	}

	return (
		<Container>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					// backgroundColor: "white",
					boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
					padding: "2em",
					gap: "1em",
					borderRadius: "8px",
					width: "400px",
					backdropFilter: "blur(5px)",
					backgroundColor: "rgba(255, 255, 255, 0.5)",
					"@media (max-width: 600px)": {
						width: "fit-content",
					},
				}}
			>
				<Typography
					variant="h4"
					style={{ fontWeight: "bold", color: "#252247" }}
				>
					Login
				</Typography>
				<Typography variant="body1">
					Entre com o seu e-mail e senha cadastrados
				</Typography>
				<TextField
					id="outlined-basic"
					label="E-mail"
					variant="outlined"
					fullWidth
					onChange={(e) => { setEmail(e.target.value) }}
				/>
				<TextField
					id="outlined-adornment-password"
					fullWidth
					type={showPassword ? 'text' : 'password'}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								edge="end"
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
					label="Senha"
					onChange={(e) => { setPassword(e.target.value) }}
				/>
				{helpText ? <Typography variant="body1" style={{ color: 'red' }}>{error}</Typography> : null}
				<StyledButton variant="contained" text="Login" width="100%" onClick={() => { handleLogin() }} />
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
					<Typography variant="body1">Ainda não possui uma conta?</Typography>{" "}
					<Typography
						variant="body1"
						style={{ textDecoration: "underline", cursor: "pointer" }}
						onClick={() => {
							navigate("/signup");
						}}
					>
						Cadastre-se
					</Typography>
				</Box>
			</Box>
		</Container>
	);
}

export default Login;
