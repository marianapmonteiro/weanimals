import React, { useState } from "react";
import theme from "../../theme/theme";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./MobileMenu";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	padding-inline: 20px;
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
function MobileNavbar() {
	const [open, setOpen] = useState(false);
	return (
		<Container>
			<Menu>
				<Item>
					<Typography variant="p">Logo</Typography>
				</Item>
			</Menu>

			<Menu>
				<MenuIcon
					style={{ cursor: "pointer" }}
					onClick={() => {
						setOpen(true);
					}}
				/>
			</Menu>
			{open ? <MobileMenu open={open} setOpen={setOpen} /> : null}
		</Container>
	);
}

export default MobileNavbar;
