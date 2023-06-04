import React, { useState } from "react";
import { Drawer, Box, Typography, Divider, Button } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import StyledButton from "../Button/index";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
	const [user, setUser] = useState("aaa");
	return (
		<>
			<Drawer
				anchor="right"
				open={open}
				onClose={handleDrawerClose}
				variant="temporary"
			>
				<Box
					style={{
						backgroundImage:
							"linear-gradient(to bottom, #a39ce7, #8f88d0, #7b74b9, #6761a3, #544e8d)",
						borderBottomRightRadius: "150px",
					}}
				>
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
						<h2>WE S2 ANIMALS</h2>
					</Logo>
				</Box>
				<Menu>
					{/* Place your content inside the drawer */}

					<div>
						<Button style={{ width: "100%" }}>
							<Typography color="#252247" style={{ fontWeight: "bold" }}>
								Animais
							</Typography>
						</Button>
					</div>
					<div>
						<Button style={{ width: "100%" }}>
							<Typography color="#252247" style={{ fontWeight: "bold" }}>
								Adoção
							</Typography>
						</Button>
					</div>
					<div>
						<Button style={{ width: "100%" }}>
							<Typography color="#252247" style={{ fontWeight: "bold" }}>
								Quem Somos
							</Typography>
						</Button>
					</div>
					<Divider style={{ width: "100%" }} />
					{user !== "" ? (
						<>
							<div style={{ display: "flex", gap: "1em" }}>
								<AccountCircleIcon />{" "}
								<Typography style={{ textTransform: "none" }}>
									Bem vindo, {user}
								</Typography>
							</div>
							<div
								style={{ display: "flex", gap: "1em" }}
								onClick={() => {
									navigate("/login");
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
									setUser("");
								}}
							/>
						</div>
					)}
				</Menu>
			</Drawer>
		</>
	);
};

export default MobileMenu;
