import React from 'react';
import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';
import { Typography, Container, Box, Grid } from "@mui/material";
import StyledButton from '../components/Button';
import theme from '../theme/theme';
import HeroImg from '../Images/heroImg.jpg';
import bunnyCircle from '../Images/bunnycircle.png'
import bunnybg from '../Images/bunnybg.png'
import paws from '../Images/paws.png'
import passaro from '../Images/passaro.jpg'
import cachorro from '../Images/dog2.jpg'
import gato from '../Images/gatinho.jpg'


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding-bottom: 100px;
`;

const Hero = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${HeroImg});
  background-size: cover;
  background-position: center;
  position: relative;
  @media (max-width: ${theme.breakpoints.values.md}px) {
	height: 40vh;
}
`;

const BoxHero = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Title = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 10%;
  align-items: flex-start;
  flex-direction: column;
  gap: 2em;
  position: absolute;
  z-index: 3;
  @media (max-width: ${theme.breakpoints.values.md}px) {
	padding-inline: 20px;
	align-items: center;
	justify-content: center;
	margin-top: 0;
}
`;

const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2em;
  width: 50%;
  @media (max-width: ${theme.breakpoints.values.md}px) {
	padding-inline: 20px;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-top: 2em;
	text-align: center;
`;

const Img = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  object-fit: contain;
  border-radius: 4px;
`;
const BoxImgs = styled.div`
  width: 100%;
  display: flex;
  gap: 2em;
  @media (max-width: ${theme.breakpoints.values.md}px) {
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
`;
const LastImgs = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 8px;
  object-fit: cover;
  @media (max-width: ${theme.breakpoints.values.md}px) {
	width: 250px;
	height: 250px;
}
`;
const Paw = styled.img`
  width: 50%;
  height: 150px; 
  margin-bottom: 2em;
  @media (max-width: ${theme.breakpoints.values.md}px) {
	width: 100%;
	margin-top: 5em;
	height: 100px; 
}
`;

export default function AboutUs() {
	const navigate = useNavigate()
	return (
		<MainContainer>
			<BoxHero>
				<Container maxWidth="lg">
					<Title>
						<Typography variant="h2" style={{ fontWeight: "bold" }}>Sobre nós</Typography>
						<Typography variant="body1" style={{ color: '#252247' }}>Conheça mais sobre a nossa comunidade!</Typography>
					</Title>
				</Container>
				<Hero />
				<svg style={{ position: 'absolute', bottom: 0 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#DFEAFD" fill-opacity="1" d="M0,96L34.3,122.7C68.6,149,137,203,206,229.3C274.3,256,343,256,411,250.7C480,245,549,235,617,224C685.7,213,754,203,823,213.3C891.4,224,960,256,1029,266.7C1097.1,277,1166,267,1234,240C1302.9,213,1371,171,1406,149.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
			</BoxHero>
			<Container maxWidth="lg">
				<Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Grid item xs={12} md={8} >
						<BoxText>
							<Typography variant="h4">Nossa comunidade</Typography>
							<Typography variant="body1">Nossa comunidadeNossa comunidadeNossa comunidadeNossa comunidadeNossa comunidadeNossa comunidade</Typography>
						</BoxText>

					</Grid>

					<Grid item xs={12} md={4}>
						<Img src={bunnybg} alt="Coelho" />
					</Grid>
					<Grid item xs={12} md={8}>
						<Img src={bunnyCircle} alt="Coelho" />
					</Grid>
					<Grid item xs={12} md={4}>
						<BoxText>
							<Typography variant="h4">Objetivos</Typography>
							<Typography variant="body1">Nossa comunidadeNossa comunidadeNossa comunidadeNossa comunidadeNossa comunidadeNossa comunidade</Typography>
						</BoxText>
					</Grid>
				</Grid>
				<Box sx={{ width: "100%", display: 'flex', flexDirection: 'column', gap: '2em', justifyContent: "center", alignItems: 'center', }}>
					<Paw src={paws} />
					<BoxText style={{ textAlign: 'center' }}>
						<Typography variant="h4" style={{ fontWeight: "bold" }}>A vida é melhor ao lado de um animalzinho!</Typography>
					</BoxText>
					<BoxImgs>
						<LastImgs src={passaro} alt="Pássaro" />
						<LastImgs src={cachorro} alt="Cachorro" />
						<LastImgs src={gato} alt="Gato" />
					</BoxImgs>
					<Box style={{ marginTop: "2em" }}><StyledButton text="Procure agora o seu companheiro ideal!" style={{ fontWeight: "bold", paddingTop: '10px', paddingBottom: '10px', }} onClick={() => { navigate("/animais") }} /></Box>
				</Box>
			</Container>
		</MainContainer>
	);
}
