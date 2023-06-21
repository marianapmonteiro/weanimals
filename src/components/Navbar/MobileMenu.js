import React, { useContext, useState } from "react";
import { AuthContext } from '../../context/AuthContext'
import { Drawer, Box, Typography, Divider, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import StyledButton from "../Button/index";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from '../../Images/logo.png'
import theme from "../../theme/theme";

const Menu = styled.div`
	width: 250px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding-inline: 20px;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 40px;
	background-color: white;
	text-transform: uppercase;
	padding-top: 50px;
`;

const Logo = styled.div`
	width: 250px;
	padding-inline: 20px;
`;

const Icon = styled.div`
	width: 100%;
	padding-inline: 20px;
	padding-top: 10px;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
`;
const MobileMenu = ({ open, setOpen, navigate }) => {
	const handleDrawerClose = () => {
		setOpen(false);
	};
	const { logoutRequest, cookies } = useContext(AuthContext);
	const [user, setUser] = useState(cookies.UserData)

	return (
		<>
			<Drawer
				anchor="right"
				open={open}
				onClose={handleDrawerClose}
				variant="temporary"
				PaperProps={{
					sx: {
						backgroundColor: theme.palette.background.default,
					}
				}}
			>
				<Box>
					<Icon>
						{" "}
						<CloseIcon
							style={{ color: "#252247", cursor: "pointer" }}
							onClick={() => {
								handleDrawerClose();
							}}
						/>
					</Icon>
					<Logo>
						<img src={logo} alt='logo' style={{ width: "160px", height: "50px" }} onClick={() => {
							navigate("/");
						}} />
					</Logo>
				</Box>
				<Menu style={{ backgroundColor: theme.palette.background.default }}>
					<div>
						<Button style={{ width: "100%" }} onClick={() => {
							navigate("/animais");
							handleDrawerClose()
						}}>
							<Typography color="#252247" style={{ fontWeight: "bold" }}>
								Animais
							</Typography>
						</Button>
					</div>
					<div style={{ position: 'relative' }}>
						<Button style={{ width: "100%" }}>
							<Typography color="#252247" style={{ fontWeight: "bold" }}>
								Adoção
							</Typography>
							<div
								style={{
									position: "absolute",
									color: "red",
									bottom: -20,
									textAlign: "flex-start",
									width: "100%",
								}}
							>
								<p style={{ fontSize: "8px" }}>Em breve</p>
							</div>
						</Button>

					</div>
					<div>
						<Button style={{ width: "100%" }}>
							<Typography color="#252247" style={{ fontWeight: "bold" }} onClick={() => {
								navigate("/aboutus");
								handleDrawerClose()
							}}>
								Quem Somos
							</Typography>
						</Button>
					</div>
					<Divider style={{ width: "100%" }} />
					{user !== undefined ? (
						<>
							<div style={{ display: "flex", gap: "1em" }}>
								<AccountCircleIcon />{" "}
								<Typography style={{ textTransform: "none" }}>
									Bem vindo, {user.name}
								</Typography>
							</div>
							<div
								style={{ display: "flex", gap: "1em" }}
								onClick={() => {
									navigate('/perfil')
									handleDrawerClose()
								}}
							>
								<AccountCircleIcon /> <Typography style={{ textTransform: "none" }}>Perfil</Typography>
							</div>
							<div
								style={{ display: "flex", gap: "1em" }}
								onClick={() => {
									logoutRequest()
									handleDrawerClose()
								}}
							>
								<LogoutIcon /> <Typography>Sair</Typography>
							</div>
						</>
					) : (
						<div>
							<StyledButton
								text="Login"
								padding="30px"
								onClick={() => {
									navigate("/login");
									handleDrawerClose()
								}}
							/>
						</div>
					)}
				</Menu>
			</Drawer >
		</>
	);
};

export default MobileMenu;
