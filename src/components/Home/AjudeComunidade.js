import { Typography, Box, Grid, Button } from "@mui/material";
import dog from "../../Images/dog.png";
import StyledButton from "../Button";
import cat from "../../Images/cat.png";

const AjudeComunidade = () => {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
				"@media (max-width: 600px)": {
					minHeight: window.innerHeight,
				},
			}}
		>
			<img
				src={cat}
				alt="cat"
				width="250px"
				height="250px"
				style={{
					position: "absolute",
					top: "5%",
					left: "50%",
					transform: "translateX(-50%)",
					zIndex: 1,
				}}
			/>
			<Box
				sx={{
					width: "80%",
					height: "50vh",
					borderRadius: "9px",
					background:
						"linear-gradient(90deg, rgba(241,153,23,1) 35%, rgba(250,197,82,1) 100%)",
					color: "white",
					display: "flex",
					gap: "2em",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					paddingInline: "16px",
					textAlign: "center",
				}}
			>
				<Typography variant="h4" style={{ fontWeight: "bold" }}>
					Ajude a comunidade!
				</Typography>
				<Typography variant="body1" style={{ color: "white" }}>
					Tem algum bichinho como membro da família? Sabe todos os cuidados que
					ele precisa e quer ajudar a novos tutores cuidarem melhor do seu novo
					bichinho? Aqui você pode! Basta entrar na aba "Animais", escolher a
					categoria e adicionar sobre o bichinho!
				</Typography>
				<Button
					variant="contained"
					style={{
						backgroundColor: "white",
						paddingInline: "4em",
						borderRadius: "20px",
					}}
				>
					Ir para⠀ ▶
				</Button>
			</Box>
		</Box>
	);
};

export default AjudeComunidade;
