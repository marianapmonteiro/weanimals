import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
function CuidadosAnimais() {
	let items = [
		{ title: "Cuidados", description: "1" },
		{ title: "Características", description: "2" },
		{ title: "Comunidades", description: "3" },
		{ title: "Curiosidades", description: "4" },
	];
	return (
		<Box
			sx={{
				width: "100%",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "5%",
			}}
		>
			{items.map((item) => {
				return (
					<Card
						sx={{
							paddingInline: "5%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							background:
								"linear-gradient(90deg, rgba(241,153,23,1) 35%, rgba(250,197,82,1) 100%)",
							color: "white",
							borderRadius: "10px",
						}}
					>
						<CardContent>
							<Typography variant="h5">{item.title}</Typography>
							<Typography variant="body1">{item.description}</Typography>
						</CardContent>
					</Card>
				);
			})}
			}
		</Box>
	);
}

export default CuidadosAnimais;
