import React from "react";
import theme from "../../theme/theme";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	padding-inline: 40px;
	background-color: ${({ theme }) => theme.palette.primary.dark};
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
function Navbar() {
	return (
		<Container>
			<Menu>
				<Item>
					<Typography variant="p">Logo</Typography>
				</Item>
			</Menu>

			<Menu>
				<Item>
					<Typography variant="p">Animais</Typography>
				</Item>
				<Item>
					<Typography variant="p">Adoção</Typography>
				</Item>
				<Item>
					<Typography variant="p">Quem somos</Typography>
				</Item>
				<Item>
					<Typography variant="p">Login</Typography>
				</Item>
			</Menu>
		</Container>
	);
}

export default Navbar;
