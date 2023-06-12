import React, { useState } from "react";
import theme from "../../theme/theme";
import styled from "@emotion/styled";
import { Typography, Select, MenuItem } from "@mui/material";
import StyledButton from "../Button/index";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	padding-inline: 40px;
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
	const [user, setUser] = useState("aaa");
	return (
		<Container>
			<Menu>
				<Item>
					<Typography
						variant="p"
						color="#252247"
						onClick={() => {
							navigate("/");
						}}
					>
						Logo
					</Typography>
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
					{user !== "" ? (
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
											Bem vindo, {user}
										</Typography>
									</div>
								);
							}}
						>
							<MenuItem
								style={{ gap: "0.5em" }}
								onClick={() => {
									navigate("/login");
									setUser("");
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
		</Container>
	);
}

export default Navbar;
