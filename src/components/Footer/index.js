import React, { useState } from "react";
import { Typography, Button, CardMedia, Divider } from "@mui/material";
import styled from "@emotion/styled";
import Imagem from "../../Images/download.jpg";
import theme from "../../theme/theme";

const ContainerAll = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 50px;
	background-color: ${({ theme }) => theme.palette.primary.dark};
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
`;

function Footer() {
	return <ContainerAll>WeAnimals 2023</ContainerAll>;
}

export default Footer;
