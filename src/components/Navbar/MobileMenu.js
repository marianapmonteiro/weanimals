import React, { useState } from "react";
import { Drawer, IconButton, Typography } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
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
	color: ${({ theme }) => theme.palette.primary.dark};
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
const MobileMenu = ({ open, setOpen }) => {
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Drawer
				anchor="right"
				open={open}
				onClose={handleDrawerClose}
				variant="temporary"
			>
				<Icon>
					{" "}
					<CloseIcon
						style={{ color: theme.palette.primary.dark, cursor: "pointer" }}
						onClick={() => {
							handleDrawerClose();
						}}
					/>
				</Icon>

				<Logo>
					<h2>WE S2 ANIMALS</h2>
				</Logo>

				<Menu>
					{/* Place your content inside the drawer */}

					<div>
						<Typography>Animais</Typography>
					</div>
					<div>
						<Typography>Adoção</Typography>
					</div>
					<div>
						<Typography>Quem Somos</Typography>
					</div>
					<div>
						<Typography>Login</Typography>
					</div>
				</Menu>
			</Drawer>
		</>
	);
};

export default MobileMenu;
