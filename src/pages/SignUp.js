import React, { useState } from "react";
import { Typography, Box, TextField, Divider, InputAdornment, IconButton } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../theme/theme";
import StyledButton from "../components/Button";
import { useNavigate } from "react-router-dom";
import { SignUpRequest } from '../requests/Auth'
import Swal from "sweetalert2";
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

function SignUp() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [helpText, setHelpText] = useState(false)
	const [error, setError] = useState('')
	const [showPassword, setShowPassword] = useState(false);
	const [showconfirmPassword, setShowConfirmPassword] = useState(false)

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);


	const handleSignUp = async () => {
		let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (name === '' || email === '' || password === '' || confirmPassword === '') {
			setHelpText(true);
			setError('Preencha todos os campos.')
			console.log('encontrou texto vazio')
		} else if (!regEmail.test(email)) {
			setHelpText(true);
			setError('Email Inválido.')
		} else {
			console.log('entrou na condiçao de cadstro')
			setHelpText(false);
			setError('');
			await SignUpRequest(name, email, password, confirmPassword, setHelpText, setError, { navigate });
		}

	}

	return (
		<Container>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					backdropFilter: "blur(5px)",
					backgroundColor: "rgba(255, 255, 255, 0.5)",
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
					label="Nome"
					variant="outlined"
					fullWidth
					onChange={(e) => { setName(e.target.value) }}
				/>
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
				<TextField
					id="outlined-adornment-password"
					fullWidth
					type={showconfirmPassword ? 'text' : 'password'}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowConfirmPassword}
								edge="end"
							>
								{showconfirmPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
					label="Confirmar senha"
					onChange={(e) => { setConfirmPassword(e.target.value) }}
				/>
				{helpText ? <Typography variant="body1" style={{ color: 'red' }}>{error}</Typography> : null}
				<StyledButton variant="contained" text="Criar conta" width="100%" onClick={() => { handleSignUp() }} />
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
