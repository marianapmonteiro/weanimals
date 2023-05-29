import React, { useState } from "react";
import { Typography, Button, CardMedia, Divider } from "@mui/material";
import styled from "@emotion/styled";
import Imagem from "../../Images/download.jpg";

const GridContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	gap: 20px;
	flex-direction: column;
	flex-grow: 1;
`;

const GridItem = styled.div`
	display: flex;
	flex-basis: 0;
	flex-grow: 1;
	gap: 50px;
`;

const StyledCardMedia = styled(CardMedia)`
	height: 140px;
	width: 20%;
`;

function Posts() {
	const [posts, setPosts] = useState([
		"post1",
		"post2",
		"post3",
		"post4",
		"post5",
	]);
	return (
		<GridContainer>
			{posts.map((item) => (
				<>
					<GridItem key={item}>
						<StyledCardMedia
							component="img"
							image={Imagem}
							title="Título da Imagem"
						/>

						<div
							style={{ display: "flex", flexDirection: "column", gap: "10%" }}
						>
							<Typography variant="h5">Titulo</Typography>
							<Typography variant="body2" color="text.secondary">
								{item}
							</Typography>
							<Button size="small">Learn More</Button>
						</div>
					</GridItem>
					<Divider />
				</>
			))}
		</GridContainer>
	);
}

export default Posts;
