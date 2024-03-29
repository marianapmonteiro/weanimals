import React, { useState, useContext, useEffect } from "react";
import theme from "../../theme/theme";
import styled from "@emotion/styled";
import { Typography, Select, MenuItem, Container } from "@mui/material";
import StyledButton from "../Button/index";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from '../../Images/logo.png'
import { AuthContext } from "../../context/AuthContext";

const MainContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	
	color: ${({ theme }) => theme.palette.primary.dark};
	background-color: transparent;
`;

const Menu = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
	color: white;
	text-transform: uppercase;
`;
const Item = styled.div`
	cursor: pointer;
`;
function Navbar({ navigate }) {
	const { logoutRequest, cookies } = useContext(AuthContext);
	const [user, setUser] = useState(cookies.UserData);

	useEffect(() => {
		setUser(cookies.UserData);
	}, [cookies.UserData, user])

	return (
		<Container maxWidth="lg">
			<MainContainer>
				<Menu>
					<Item>
						<img src={logo} alt='logo' style={{ width: "160px", height: "50px" }} onClick={() => {
							navigate("/");
						}} />
					</Item>
				</Menu>

				<Menu>
					<Item>
						<Typography
							variant="p"
							color="#252247"
							onClick={() => {
								navigate("/animais");
							}}
						>
							Animais
						</Typography>
					</Item>
					<Item style={{ position: "relative" }}>
						<Typography variant="p" color="#252247">
							Adoção
						</Typography>
						<div
							style={{
								position: "absolute",
								color: "red",
								bottom: -20,
								textAlign: "center",
								width: "100%",
							}}
						>
							<p style={{ fontSize: "8px" }}>Em breve</p>
						</div>
					</Item>
					<Item>
						<Typography
							variant="p"
							color="#252247"
							onClick={() => {
								navigate("/aboutus");
							}}
						>
							Quem somos
						</Typography>
					</Item>

					<Item>
						{user !== undefined ? (
							<Select
								displayEmpty
								variant="standard"
								disableUnderline="true"
								renderValue={(value) => {
									return (
										<div style={{ display: "flex", gap: "1em" }}>
											<AccountCircleIcon style={{ color: "#252247" }} />
											<Typography
												variant="body1"
												color="#252247"
												style={{ textTransform: "none" }}
												onClick={() => {
													navigate("/aboutus");
												}}
											>
												Bem vindo(a) {user.name}
											</Typography>
										</div>
									);
								}}
							>
								<MenuItem
									style={{ gap: "0.5em" }}
									onClick={() => {
										navigate('/perfil')
									}}
								>
									<AccountCircleIcon /> <Typography>Perfil</Typography>
								</MenuItem>
								<MenuItem
									style={{ gap: "0.5em" }}
									onClick={() => {
										logoutRequest()
									}}
								>
									<LogoutIcon /> <Typography>Sair</Typography>
								</MenuItem>

							</Select>
						) : (
							<StyledButton
								text="Login"
								padding="30px"
								onClick={() => {
									navigate("/login");
								}}
							/>
						)}
					</Item>
				</Menu>
			</MainContainer>
		</Container>
	);
}

export default Navbar;
