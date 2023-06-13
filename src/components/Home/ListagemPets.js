import { Typography, Box, Grid, Button } from "@mui/material";
import dog from "../../Images/cachorrinho.png";
import StyledButton from "../Button";

const ListagemPets = () => {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				"@media (max-width: 600px)": {
					minHeight: "-webkit-fill-available",
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
							Na We Animals você pode saber sobre todos os bichinhos!
						</Typography>
						<Typography variant="body1" align="center">
							Temos uma vasta lista contendo diversas espécies e suas raças.
							Você pode checar informações como cuidados, alimentação,
							características e comportamentos
						</Typography>
						<StyledButton
							variant="contained"
							text="Veja nossa lista!"
						></StyledButton>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "flex-end",
						"@media (max-width: 600px)": {
							justifyContent: "center",
							alignItems: "center",
						},
					}}
				>
					<img src={dog} alt="Dog" width="350px" height="350px" />
				</Grid>
			</Grid>
		</Box>
	);
};

export default ListagemPets;
