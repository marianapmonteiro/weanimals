import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Icon from "@mdi/react";
import { mdiDog, mdiCat, mdiPaw, mdiRabbit } from "@mdi/js";

function CuidadosAnimais() {
	const [activeCardIndex, setActiveCardIndex] = useState(0);

	let items = [
		{
			title: "Cuidados",
			description:
				"Saiba os cuidados necessários que você precisa saber para cuidar do seu bichinho",
		},
		{
			title: "Características",
			description:
				"Aprenda sobre os comportamentos e as características do seu amiguinho.",
		},
		{
			title: "Comunidades",
			description:
				"Descubra comunidades com muitas outras pessoas que têm o mesmo bichinho que você!",
		},
		{
			title: "Curiosidades",
			description: "Apresentamos diversas curiosidades sobre o seu bichinho.",
		},
	];
	let icons = [
		<Icon path={mdiPaw} size={3} />,
		<Icon path={mdiDog} size={3} />,
		<Icon path={mdiCat} size={3} />,
		<Icon path={mdiRabbit} size={3} />,
	];

	return (
		<Box
			sx={{
				width: "100%",
				minHeight: "-webkit-fill-available",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "5%",
				"@media (max-width: 600px)": {
					flexWrap: "wrap",
					maxHeight: "-webkit-fill-available",
					gap: "2em",
					paddingBottom: "10em",
					paddingTop: "10em",
				},
			}}
		>
			{items.map((item, index) => {
				const isActiveCard = index === activeCardIndex;
				const cardStyles = {
					padding: "10px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: "10px",
					height: "400px",
					width: "400px",
					background:
						index === activeCardIndex
							? "linear-gradient(90deg, rgba(241,153,23,1) 35%, rgba(250,197,82,1) 100%)"
							: "white",
					boxShadow:
						"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
					cursor: "pointer",
					color: index === activeCardIndex ? "white" : "black",
					"@media (max-width: 600px)": {
						height: "fit-content",
						width: "fit-content",
					},
				};

				const changeColorCard = () => {
					setActiveCardIndex(index);
				};

				return (
					<Card key={index} sx={cardStyles} onClick={changeColorCard}>
						<CardContent
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								textAlign: "center",
								height: "100%",
								gap: "2em",
							}}
						>
							<Box
								sx={{
									backgroundColor: "white",
									borderRadius: "1000px",
									padding: "1em",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: "fit-content",
									height: "fit-content",
									backgroundImage:
										index === activeCardIndex
											? "white"
											: "linear-gradient(to bottom, #aca5f6, #918ad5, #766fb4, #5c5695, #433e77)",
									filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))",
									backdropFilter: "blur(4px)",
								}}
							>
								{React.cloneElement(icons[index], {
									color: isActiveCard ? "rgb(241,153,23)" : "white",
								})}
							</Box>

							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "flex-start",
									flexGrow: 1, // Changed flexGrow to 1
									gap: "1em",
									color: index === activeCardIndex ? "white" : "black",
								}}
							>
								<Typography
									variant="h5"
									style={{
										fontWeight: "bold",
									}}
								>
									{item.title}
								</Typography>
								<Typography
									variant="body1"
									style={{
										color: index === activeCardIndex ? "white" : "#7069c0",
									}}
								>
									{item.description}
								</Typography>
							</Box>
						</CardContent>
					</Card>
				);
			})}
		</Box>
	);
}

export default CuidadosAnimais;
