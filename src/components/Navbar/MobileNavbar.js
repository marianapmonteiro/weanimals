import React, { useState } from "react";
import theme from "../../theme/theme";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./MobileMenu";
import logo from '../../Images/logo.png'


const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	padding-inline: 20px;
	background-color: transparent;
`;

const Menu = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
	color: white;
	text-transform: uppercase;
	color: #252247;
`;
const Item = styled.div`
	cursor: pointer;
`;
function MobileNavbar({ navigate }) {
	const [open, setOpen] = useState(false);
	return (
		<Container>
			<Menu>
				<Item>
					<img src={logo} alt='logo' style={{ width: "150px", height: "50px" }} onClick={() => {
						navigate("/");
					}} />
				</Item>
			</Menu>

			<Menu>
				<MenuIcon
					style={{ cursor: "pointer", color: "#252247" }}
					onClick={() => {
						setOpen(true);
					}}
				/>
			</Menu>
			{open ? <MobileMenu open={open} setOpen={setOpen} navigate={navigate} /> : null}
		</Container>
	);
}

export default MobileNavbar;
