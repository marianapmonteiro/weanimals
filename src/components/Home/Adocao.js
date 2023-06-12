import { Typography, Box, Grid, Button } from "@mui/material";
import cat from "../../Images/cutecat.jpeg";
import StyledButton from "../Button";

const Adocao = () => {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",

				"@media (max-width: 600px)": {
					minHeight: window.innerHeight,
				},
			}}
		>
			<Grid
				container
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Grid
					item
					xs={12}
					md={6}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<img
						src={cat}
						alt="Cat"
						width="250px"
						height="250px"
						style={{ borderRadius: "1000px" }}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Box
						sx={{
							height: "400px",
							width: "400px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							gap: "2rem",
						}}
					>
						<Typography
							variant="h4"
							align="center"
							style={{ fontWeight: "bold" }}
						>
							Adote um bichinho!
						</Typography>
						<Typography variant="body1" align="center">
							Além de ver o bichinho que mais combina com você, na WeAnimals
							você pode visualizar uma vasta lista com bichinhos para adoção. Se
							você precisar anunciar um bichinho para adoção também, aqui é o
							lugar!
						</Typography>
						<StyledButton
							variant="contained"
							text="Ver bichinhos para adoção"
						/>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Adocao;
